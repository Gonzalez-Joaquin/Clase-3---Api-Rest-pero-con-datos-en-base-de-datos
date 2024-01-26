import { Router } from 'express'

import controller from '../controllers/cart.controller'

const cartRoutes = Router()

cartRoutes.route('/')
    .get(controller.getAllElementsToCart)
    .post(controller.addToCart)

export default cartRoutes
