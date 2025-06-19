import express from 'express'

const app = express()
const PORT = 3000

async function main() {
    app.use(express.json())

    app.use('/:username/:cart', (req, res) => {
        res.status(200).json({message: `Hello ${req.params.username}, your cart is empty`})
    })

    app.listen(PORT, () =>{
        
    })
}

main()