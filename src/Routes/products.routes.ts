import { Router } from 'express'

import controller from '../controllers/products.controller'

const productsRoutes = Router()

productsRoutes.route('/')
    .get(controller.getAll)
    .post(controller.create)

productsRoutes.route('/:id')
    .get(controller.getEntry)
    .delete(controller.deleteEntry)
    .put(controller.updateEntry)

export default productsRoutes
