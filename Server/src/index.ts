import express from 'express'
import { products } from './data/ppp'

const app = express()
const PORT = 3000

async function main() {
    app.use(express.json())

    app.use('/:username/:cart', (req, res) => {
        res.status(200).json({message: `Hello ${req.params.username}, your cart is empty`})
    })

    app.use('/products', (req,res) =>{
        res.status(200).json(products)
    })

    app.listen(PORT, () =>{
        
    })
}

main()