import { Router } from 'express'
import Product from './model/product'

const router = Router()

router.post('/api/product/create', async (req, res) => {
    const product = new Product()
    product.name = req.body.name
    product.price = req.body.price
    product.description = req.body.description
    await product.save()
    res.send('Product has been created!')
})
router.get('/api/products', (req, res) => {
    Product.find().then((products) => {
        res.send(products)
    })
})
router.get('/api/product/:id', (req, res) => {
    Product.findOne({ where: { id: Number(req.params.id) } }).then(
        (product) => {
            res.send(product)
        }
    )
})
export default router
