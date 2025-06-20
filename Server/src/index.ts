import express from 'express'
import { products } from './data/ppp'
import cors from 'cors';
import path from 'path'
import imagesRouter from './routes/images'

const app = express()
const PORT = 3000

async function main() {
    app.use(express.json())

    app.use(cors())

    app.use('./public', express.static(path.join(__dirname, '../public')))

    app.use('/img', imagesRouter)

    app.use('/:username/:cart', (req, res) => {
        res.status(200).json({message: `Hello ${req.params.username}, your cart is empty`})
    })

    app.use('/products', (req,res) =>{
        res.status(200).json(products) //http://localhost:3000/products
    })

    app.listen(PORT, () =>{
        
    })
}

main()