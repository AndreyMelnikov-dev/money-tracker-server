import { Router } from 'express'
import accountController from '../controllers/account-controller.js'

const accountRouter = Router()

accountRouter.get('/accounts', accountController.getAccounts)

export default accountRouter