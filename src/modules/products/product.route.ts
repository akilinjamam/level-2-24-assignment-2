import express from 'express'
import { productController } from './product.controller'
import zodValidation from './product.zodValidation'

const productRouter = express.Router()

productRouter.post(
  '/create-product',
  zodValidation,
  productController.createProduct,
)

productRouter.get('/', productController.getProduct)
productRouter.get('/:id', productController.getProductById)

export default productRouter
