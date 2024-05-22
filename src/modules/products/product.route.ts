import express from 'express'
import { productController } from './product.controller'
import zodValidation from './product.zodValidation'

const productRouter = express.Router()

productRouter.post('/', zodValidation, productController.createProduct)

productRouter.get('/', productController.getProduct)
productRouter.get('/:id', productController.getProductById)
productRouter.put('/:id', productController.updateProductById)

export default productRouter
