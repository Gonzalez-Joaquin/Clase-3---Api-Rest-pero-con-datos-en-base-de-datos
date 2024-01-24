import { Router } from 'express'

import controller from '../controllers/products.controller'

const commentsRoutes = Router()

commentsRoutes.route('/')
    .get(controller.getAll)
    .post(controller.create)

commentsRoutes.route('/:id')
    .get(controller.getEntry)
    .delete(controller.deleteEntry)
    .post(controller.updateEntry)

export default commentsRoutes
