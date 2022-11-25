import express from 'express'
import bodyParser from 'body-parser'
import productRouter from './produit'
import usersRouter from './user'
import * as dotenv from 'dotenv'
dotenv.config()
import path from 'path'
import Product from './model/product'
import './db'

const app = express()
const port = process.env.SERVER_PORT || 8500
app.use(bodyParser.json())
app.use(productRouter)
app.use(usersRouter)

const http = require('http').createServer(app)

app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

const server = http.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`)
})

app.get('/', (req, res) => {
    Product.find().then((products) => {
        res.render('index', { products: products })
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

app.get('/register', (req, res) => {
    res.render('register')
})
