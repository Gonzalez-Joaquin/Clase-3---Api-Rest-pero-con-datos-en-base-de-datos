import { Router } from 'express'

import controller from '../controllers/comments.controller'

const commentsRoutes = Router()    

commentsRoutes.route('/')
    .get(controller.getAll)
    .post(controller.create)

commentsRoutes.route('/:id')
    .get(controller.getEntry)
    .delete(controller.deleteEntry)
    .put(controller.updateEntry)

export default commentsRoutes
