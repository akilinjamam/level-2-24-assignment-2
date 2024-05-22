import Product from '../products/products.model'
import { TOrder } from './orders.interface'
import Orders from './orders.model'

const createOrder = async (data: TOrder) => {
  const id = data.productId
  const product: any = await Product.findOne({ _id: id })

  const orderQuantity = data.quantity
  const productQuantity = product.inventory.quantity

  const remainingProducts = productQuantity - orderQuantity

  if (remainingProducts >= 0) {
    await Product.updateOne(
      { _id: product._id },
      { $set: { 'inventory.quantity': remainingProducts } },
    )
  }

  if (remainingProducts === 0) {
    const result = await Product.updateOne(
      { _id: product._id },
      { $set: { 'inventory.inStock': false } },
    )

    return result
  }

  if (product.inventory.inStock) {
    const result = await Orders.create(data)
    return result
  } else {
    return {
      success: false,
      message: 'Insufficient quantity available in inventory',
    }
  }
}

const getOrder = async (email: string) => {
  if (email) return Orders.find({ email: email })

  const result = await Orders.find()
  return result
}

export const orderService = {
  createOrder,
  getOrder,
}
