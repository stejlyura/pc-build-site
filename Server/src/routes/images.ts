import express from 'express';
import fs from 'fs';
import path, { dirname } from 'path';

const router = express.Router();

router.get('/', (req,res) =>{
    const folderPath = path.join(__dirname, '../../public/img')

    fs.readdir(folderPath, (err, files) =>{
        if(err) {
            return res.status(500).json({error: 'Cant find folder'})
        }

        const urlImg = files.map(file => `public/images/${file}`)
        res.json(urlImg)
    })
})

export default router