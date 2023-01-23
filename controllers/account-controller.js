import accountService from '../services/account-service.js'

class AccountController {

    async getAccounts(req, res, next) {
        try {
            const userId = req.user.id
            const accountsList = await accountService.getAccounts(userId)
            res.json(accountsList)
        } catch (e) {
            next(e)
        }
    }

    async getOneAccount(req, res, next) {
        try {
            const accountId = req.params.id
            const account = await accountService.getAccount(accountId)
            res.json(account)
        } catch (e) {
            next(e)
        }
    }

    async createAccount(req, res, next) {
        try {
            const { title, value, currency, icon } = req.body
            const userId = req.user.id
            const newAccount = await accountService.createAccount(title, value, currency, icon, userId)
            res.json(newAccount)
        } catch (e) {
            next(e)
        }
    }

    async updateAccount(req, res, next) {
        try {
            const userId = req.user.id
            const accountId = req.params.id
            const accountData = req.body
            console.log(accountData)
            const updatedAccount = await accountService.updateAccount(accountId, userId, accountData)
            res.json(updatedAccount)
        } catch (e) {
            next(e)
        }
    }

    async deleteAccount(req, res, next) {
        try {
            const userId = req.user.id
            const accountId = req.params.id
            const deletedAccount = await accountService.deleteAccount(accountId, userId)
            res.json(deletedAccount)
        } catch (e) {
            next(e)
        }
    }
}

export default new AccountController()