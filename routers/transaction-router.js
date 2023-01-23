import { Router } from 'express'
import transactionController from '../controllers/transaction-controller.js'

const transactionRouter = Router()

transactionRouter.get('/transactions', transactionController.getTransactions)
transactionRouter.get('/transactions/:id', transactionController.getOneTransactions)
transactionRouter.post('/transactions', transactionController.createTransaction)
transactionRouter.put('/transactions/:id', transactionController.updateTransaction)
transactionRouter.delete('/transactions/:id', transactionController.deleteTransaction)




export default transactionRouter