import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import productRouter from './modules/products/product.route'
import orderRouter from './modules/orders/orders.route'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'hello assignment 2',
  })
})

app.use('/api/products/', productRouter)
app.use('/api/orders/', orderRouter)

// wrong routes

app.use('/', (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: 'Route not found',
  })
})

export default app
