import { Router } from 'express'
import categoryController from '../controllers/category-controller.js'

const categoryRouter = Router()

categoryRouter.get('/categories', categoryController.getCategories)
categoryRouter.get('/categories/:id', categoryController.getCategories)

export default categoryRouter