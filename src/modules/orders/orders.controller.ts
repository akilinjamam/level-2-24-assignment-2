import { Request, Response } from 'express'
import { orderService } from './orders.service'

const createOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderService.createOrder(req.body)

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Order failed to create',
      error,
    })
  }
}

const getOrder = async (req: Request, res: Response) => {
  try {
    const { email } = req.query
    const emailData: any = email

    const result = await orderService.getOrder(emailData)

    res.status(200).json({
      success: true,
      message: email
        ? 'Orders fetched successfully for user email!'
        : 'Orders fetched successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Order failed to create',
      error,
    })
  }
}

export const orderController = {
  createOrder,
  getOrder,
}
