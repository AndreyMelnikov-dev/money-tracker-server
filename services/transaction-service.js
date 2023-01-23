import transactionModel from '../models/transaction-model.js'

class TransactionService {

    async getTransactions(userId) {
        return await transactionModel.find({ user: userId })
    }

    async getOneTransaction(userId, transactionId) {
        return await transactionModel.findOne({ user: userId, _id: transactionId })
    }

    async createTransaction(userId, accountId, categoryId = undefined, type, value, comment) {

        const createdDate = new Date()

        return await transactionModel.create({
            user: userId,
            account: accountId,
            category: categoryId,
            type: type,
            value: value,
            comment: comment,
            created_at: createdDate,
            modified_at: createdDate
        })
    }

    async updateTransaction(userId, transactionId, accountId, categoryId = undefined, type, value, comment) {
        const modifiedDate = new Date()
        return await transactionModel.findOneAndUpdate({ user: userId, _id: transactionId }, {
            account: accountId,
            category: categoryId,
            type: type,
            value: value,
            comment: comment,
            modified_at: modifiedDate
        }, { new: true })
    }

    async deleteTransaction(userId, transactionId) {
        return await transactionModel.findOneAndDelete({ user: userId, _id: transactionId })
    }

}

export default new TransactionService()