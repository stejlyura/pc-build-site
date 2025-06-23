import express from "express";
import { Product } from "../data/ppp";

const router = express.Router()

router.post('/', async(req, res)=>{
    try{
        const product = await Product.create(req.body)
        res.status(201).json(product)
    }
    catch {
        res.status(400).json({ error: 'Error get data from db' })
    }
})

export default router;