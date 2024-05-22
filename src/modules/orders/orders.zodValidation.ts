import { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

const zodValidationForOrders = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const orderSchema = z.object({
    email: z.string().email(),
    productId: z.string(),
    price: z.number().positive(),
    quantity: z.number().int().positive(),
  })

  const parsedOrder = orderSchema.safeParse(req.body)

  if (parsedOrder?.error) {
    return res.status(400).json({
      success: false,
      message: 'zod validation failed',
      error: parsedOrder?.error?.errors,
    })
  }

  next()
}

export default zodValidationForOrders
