import { TProduct } from './product.interface'
import Product from './products.model'

const createProduct = async (product: TProduct) => {
  const result = await Product.create(product)

  return result
}

const getProduct = async () => {
  const result = await Product.find({})

  return result
}

const getProductById = async (id: string) => {
  const result = await Product.find({ _id: id })

  return result
}

export const productService = {
  createProduct,
  getProduct,
  getProductById,
}
