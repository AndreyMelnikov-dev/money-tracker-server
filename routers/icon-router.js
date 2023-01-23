import { Router } from 'express'
import iconController from '../controllers/icon-controller.js'

const iconRouter = Router()

iconRouter.get('/icons', iconController.getIcons)
iconRouter.get('/icons/:id', iconController.getOneIcon)
iconRouter.post('/icons', iconController.createIcon)
iconRouter.delete('/icons/:id', iconController.deleteIcon)

export default iconRouter