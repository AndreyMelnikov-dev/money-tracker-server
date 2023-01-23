import { Router } from 'express'
import accountController from '../controllers/account-controller.js'

const accountRouter = Router()

accountRouter.get('/accounts', accountController.getAccounts)

accountRouter.get('/accounts/:id', accountController.getOneAccount)

accountRouter.post('/accounts', accountController.createAccount)

accountRouter.put('/accounts/:id', accountController.updateAccount)

accountRouter.delete('/accounts/:id', accountController.deleteAccount)




export default accountRouter