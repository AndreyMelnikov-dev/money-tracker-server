import { Router } from 'express'
import categoryController from '../controllers/category-controller.js'

const categoryRouter = Router()

categoryRouter.get('/categories', categoryController.getCategories)
categoryRouter.get('/categories/:id', categoryController.getOneCategory)
categoryRouter.post('/categories', categoryController.createCategory)
categoryRouter.put('/categories/:id', categoryController.updateCategory)
categoryRouter.delete('/categories/:id', categoryController.deleteCategory)

export default categoryRouter