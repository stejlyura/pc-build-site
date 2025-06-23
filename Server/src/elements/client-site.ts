import path from 'path';
import express, { Application } from 'express';

const clientDist = path.join(__dirname, '../../../Client/dist');

export function serviceClient(app: Application) {
  app.use(express.static(clientDist));
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}