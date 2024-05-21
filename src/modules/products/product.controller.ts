import { Request, Response } from 'express'
import { productService } from './product.service'

const createProduct = async (req: Request, res: Response) => {
  try {
    const productInfoData = req.body

    const result = await productService.createProduct(productInfoData)

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Product failed to create',
      error,
    })
  }
}

const getProduct = async (req: Request, res: Response) => {
  try {
    const result = await productService.getProduct()

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Product failed to fetche',
      error,
    })
  }
}

const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const result = await productService.getProductById(id)

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Product failed to fetche',
      error,
    })
  }
}

const updateProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const result = await productService.upldateProductById(id, req.body)

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Product failed to update',
      error,
    })
  }
}
const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const result = await productService.deleteProductById(id)

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Product failed to delete',
      error,
    })
  }
}

export const productController = {
  createProduct,
  getProduct,
  getProductById,
  updateProductById,
  deleteProductById,
}
