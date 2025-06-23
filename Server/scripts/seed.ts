import mongoose from 'mongoose';
import { Product, products } from '../src/data/ppp'
import dotenv from 'dotenv';
dotenv.config();

const sendToDB = products

const mongoUrl = process.env.MONGO_URL

async function seed() {
  if (!mongoUrl) {
    throw new Error('No MONGO_URL')
  }

  await mongoose.connect(mongoUrl)
  await Product.insertMany(products)
  console.log('Add MongoDB')
  process.exit()
}

seed().catch(err => {
  console.error('Err', err)
  process.exit(1)
})