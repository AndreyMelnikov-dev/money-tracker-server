import accountModel from '../models/account-model.js'

class AccountService {
    async getAccounts(userId) {
        return await accountModel.find({ user: userId })
    }
}

export default new AccountService()