import path from 'path';
import express, { Application } from 'express';

const clientDist = path.join(__dirname, '../../../Client/dist');

export function serviceClient(app: Application) {
  // 1. Сначала: отдаём статику
  app.use(express.static(clientDist));

  // 2. Потом: фоллбэк для Vue-роутов
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}