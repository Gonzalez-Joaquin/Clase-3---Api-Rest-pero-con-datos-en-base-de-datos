import { Router } from 'express'

import controller from '../controllers/users.controller'

const userRoutes = Router()

userRoutes.route('/')
    .get(controller.getAll)
    .post(controller.create)

userRoutes.route('/:id')
    .get(controller.getEntry)
    .delete(controller.deleteEntry)
    .put(controller.updateEntry)

export default userRoutes
