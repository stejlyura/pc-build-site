import express from 'express'
import { products } from './data/ppp'
import cors from 'cors';
import path from 'path'
import {serviceClient} from './elements/client-site'
import mongoose from 'mongoose';
require ('dotenv').config();

const app = express()
const PORT = 3000

async function main() {


    app.use(express.json())

    app.use(cors())
 
    app.use('/public', express.static(path.join(__dirname, '../public')))

    app.use('/products', (req,res) =>{
        res.status(200).json(products)
    })

    serviceClient(app)
    
    app.listen(PORT, () =>{
    })
}

main()