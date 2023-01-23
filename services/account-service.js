import accountModel from '../models/account-model.js'
import ErrorApi from '../exceptions/error-api.js'

class AccountService {
    async getAccounts(userId) {
        try {
            return await accountModel.find({ user: userId })
        } catch (e) {
            throw ErrorApi.NotFound()
        }
    }

    async getAccount(id) {
        try {
            return await accountModel.findById(id)
        } catch (e) {
            throw ErrorApi.NotFound()
        }
    }

    async createAccount(title, value, currency, icon, userId) {
        const createdDate = new Date()
        return await accountModel.create({
            user: userId,
            title,
            value,
            currency,
            icon,
            created_at: createdDate,
            modified_at: createdDate
        })
    }

    async updateAccount(accountId, userId, accountData) {
        const modifiedDate = new Date()
        return await accountModel.findOneAndUpdate({ _id: accountId, user: userId }, {
            ...accountData,
            modified_at: modifiedDate
        }, { new: true })
    }

    async updateAccountValue(accountId, value) {

    }

    async deleteAccount(accountId, userId) {
        return await accountModel.findOneAndDelete({ _id: accountId, user: userId })
    }
}

export default new AccountService()