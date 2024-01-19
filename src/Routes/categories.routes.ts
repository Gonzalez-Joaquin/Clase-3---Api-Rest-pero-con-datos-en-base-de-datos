import { Router } from 'express'

import controller from '../controllers/categories.controller'

const categoriesRoutes = Router()

categoriesRoutes.route('/')
    .get(controller.getAll)
    .post(controller.newCategory)

export default categoriesRoutes
