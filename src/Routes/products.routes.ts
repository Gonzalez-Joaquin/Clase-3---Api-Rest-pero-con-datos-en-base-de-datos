import { Router } from 'express'

import controller from '../controllers/products.controller'

const productsRoutes = Router()

productsRoutes.route('/').get(controller.getAllProducts)

export default productsRoutes
