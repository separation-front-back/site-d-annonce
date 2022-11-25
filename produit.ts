import { Router } from 'express'
import db from './db'

const router = Router()

router.post('/api/product/create', (req, res) => {
    console.log(req.body)

    db('products')
        .insert({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
        })
        .then(() => {
            console.log('product created')
        })
})
router.get('/api/products', (req, res) => {
    db('products').then((e) => {
        if (e) res.send(e)
    })
})
router.get('/api/product/test', (req, res) => {
    db('products')
        .insert({
            name: 'alo',
            price: 15,
            description: 'desc alo',
        })
        .then(() => {
            console.log('product created')
        })
})
export default router
