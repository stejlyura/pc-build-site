import express from 'express'
import cors from 'cors';
import path from 'path'
import {serviceClient} from './elements/client-site'
import ProductRoutes from './routes/products'
import mongoose from 'mongoose';
require ('dotenv').config();

const app = express();
const PORT = 3300;

async function main() {
  app.use(express.json());
  app.use(cors());

  app.use('/public', express.static(path.join(__dirname, '../public')));

  const mongoUrl = process.env.MONGO_URL;
  if (!mongoUrl) {
    throw new Error('Problem with get data from Mongodb');
  }

  await mongoose.connect(mongoUrl);

  // API
  app.use('/api/products', ProductRoutes);

  // Фронт
  const clientDist = path.join(__dirname, '../Client/dist');
  app.use('/app', express.static(clientDist));

  // SPA fallback
  app.get('/app/*', (req, res) => {
    res.sendFile(path.join(clientDist, 'index.html'));
  });

  app.listen(PORT, () => {
    console.log(`🟢 http://localhost:${PORT}/app`);
    console.log(`🟡 http://localhost:${PORT}/api/products`);
  });
}

main();