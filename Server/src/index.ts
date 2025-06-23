import express from 'express'
import cors from 'cors';
import path from 'path'
//import { products } from './data/ppp'
import {serviceClient} from './elements/client-site'
import ProductRoutes from './routes/products'
import mongoose from 'mongoose';
require ('dotenv').config();

const app = express()
const PORT = 3003

async function main() {


    app.use(express.json())

    app.use(cors())
 
    app.use('/public', express.static(path.join(__dirname, '../public')))

    const mongoUrl = process.env.MONGO_URL;
    if (!mongoUrl) {
        throw new Error('Problem with get data from Mongodb');
    }

    await mongoose.connect(mongoUrl)

    app.use('/api/products', ProductRoutes)
    
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../Client/dist/index.html'));
    });
    
    serviceClient(app)
    
    app.listen(PORT, () =>{
        console.log(`http://localhost:${PORT}`)
    })
}

main()