import { Router } from 'express'

import controller from '../controllers/products.controller'

const userRoutes = Router()

userRoutes.route('/')
    .get(controller.getAll)
    .post(controller.create)

userRoutes.route('/:id')
    .get(controller.getEntry)
    .delete(controller.deleteEntry)
    .post(controller.updateEntry)

export default userRoutes
