import express from 'express'
import { orderController } from './orders.controller'
import zodValidationForOrders from './orders.zodValidation'

const orderRouter = express.Router()

orderRouter.post('/', zodValidationForOrders, orderController.createOrder)

orderRouter.get('/', orderController.getOrder)
// orderRouter.get('/:id', orderController.getOrderById)
// orderRouter.put('/:id', orderController.updateOrderById)
// orderRouter.delete('/:id', orderController.deleteOrderById)

export default orderRouter
