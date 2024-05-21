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

const upldateProductById = async (id: string, data: Partial<TProduct>) => {
  const { tags, variants, inventory, newTag, ...others } = data

  if (Object.keys(data).length === 7) {
    const result = await Product.updateOne({ _id: id }, { $set: data })

    return result
  }

  if (others.category || others.description || others.name || others.price) {
    const result = await Product.updateOne(
      { _id: id },
      { $set: others },
      { new: true, runValidators: true },
    )
    return result
  }

  if (tags) {
    const product = await Product.findById({ _id: id })
    if (!product) return

    const tagIndex = product?.tags.indexOf(tags[0])
    if (tagIndex === -1) return

    product.tags[tagIndex] = newTag

    const result = product.save()

    return result
  }

  if (variants) {
    const result = await Product.findByIdAndUpdate(
      { _id: id },
      { variants: variants },
      { new: true },
    )
    return result
  }

  if (inventory) {
    if (inventory.quantity)
      return await Product.updateOne(
        { _id: id },
        { $set: { 'inventory.quantity': inventory.quantity } },
      )
    if (inventory.inStock)
      return await Product.updateOne(
        { _id: id },
        { $set: { 'inventory.inStock': inventory.inStock } },
      )
  }
}

export const productService = {
  createProduct,
  getProduct,
  getProductById,
  upldateProductById,
}
