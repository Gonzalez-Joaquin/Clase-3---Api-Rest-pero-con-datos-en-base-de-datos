import { Router } from 'express'

import controller from '../controllers/categories.controller'

const categoriesRoutes = Router()

categoriesRoutes.route('/')              
    .get(controller.getAll)  
    .post(controller.create)

categoriesRoutes.route('/:id')
    .get(controller.getEntry)
    .put(controller.updateEntry)
    .delete(controller.deleteEntry)

export default categoriesRoutes
