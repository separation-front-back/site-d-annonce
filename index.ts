import express from 'express'
import productRouter from './produit'
import usersRouter from './user'
import db from './db'
import * as dotenv from 'dotenv'
dotenv.config()
const path = require('path')

const app = express()
const port = process.env.SERVER_PORT || 8500


app.use(productRouter)
app.use(usersRouter)
const http = require('http').createServer(app)

app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

const server = http.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`)
})

app.get('/', (req, res) => {
    db('products').then((e) => {
        if (e) {
            res.render('index', { products: e })
        }
    })
})

app.get('/product', (req, res) => {
    res.render('product')
})

app.get('/add-product', (req, res) => {
    res.render('add-product')
})

app.get('/login', (req, res) => {
    res.render('login')
})
