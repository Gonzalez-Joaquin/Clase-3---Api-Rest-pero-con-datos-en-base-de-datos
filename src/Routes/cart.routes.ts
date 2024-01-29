import { Router } from 'express'

import controller from '../controllers/cart.controller'

const cartRoutes = Router()

cartRoutes.route('/')
    .post(controller.esPosible)

export default cartRoutes
