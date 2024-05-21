import { NextFunction, Request, Response } from 'express'
import { z } from 'zod'
const zodValidation = (req: Request, res: Response, next: NextFunction) => {
  // Define Zod schema for Variant
  const variantSchema = z.object({
    type: z.string().nonempty({ message: 'Type from varient is required' }),
    value: z.string().nonempty({ message: 'Value from varient is required' }),
  })

  // Define Zod schema for Inventory
  const inventorySchema = z.object({
    quantity: z
      .number()
      .min(0, { message: 'Quantity must be a non-negative number' }),
    inStock: z.boolean(),
  })

  // Define Zod schema for Product
  const productSchema = z.object({
    name: z.string().nonempty({ message: 'Name is required' }),
    description: z.string().nonempty({ message: 'Description is required' }),
    price: z.number().positive({ message: 'Price must be a positive number' }),
    category: z.string().nonempty({ message: 'Category is required' }),
    tags: z.array(z.string().nonempty({ message: 'Tag cannot be empty' })),
    variants: z.array(variantSchema),
    inventory: inventorySchema,
  })

  const validation = productSchema.safeParse(req.body)

  if (validation?.error) {
    return res.status(400).json({
      success: false,
      message: 'zod validation failed',
      error: validation?.error?.errors,
    })
  }

  if (validation?.success) {
    next()
  }
}

export default zodValidation
