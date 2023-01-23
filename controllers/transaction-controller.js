import transactionService from '../services/transaction-service.js'

class TransactionController {

    async getTransactions(req, res, next) {
        try {
            const userId = req.user.id
            const transactionsList = await transactionService.getTransactions(userId)
            res.json(transactionsList)
        } catch (e) {
            next(e)
        }
    }

    async getOneTransactions(req, res, next) {
        try {
            const userId = req.user.id
            const transactionId = req.params.id
            const transaction = await transactionService.getOneTransactions(userId, transactionId)
            res.json(transaction)
        } catch (e) {
            next(e)
        }
    }

    async createTransaction(req, res, next) {
        try {
            const userId = req.user.id
            const { categoryId, accountId, type, value, comment } = req.body
            const newTransaction = await transactionService.createTransaction(userId, accountId, categoryId, type, value, comment)
            res.json(newTransaction)
        } catch (e) {
            next(e)
        }
    }

    async updateTransaction(req, res, next) {
        try {
            const userId = req.user.id
            const { categoryId, accountId, type, value, comment } = req.body
            const transactionId = req.params.id
            const newTransaction = await transactionService.updateTransaction(userId, transactionId, accountId, categoryId, type, value, comment)
            res.json(newTransaction)
        } catch (e) {
            next(e)
        }
    }

    async deleteTransaction(req, res, next) {
        try {
            const userId = req.user.id
            
        } catch (e) {
            next(e)
        }
    }
}

export default new TransactionController()