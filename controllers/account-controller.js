import accountService from '../services/account-service.js'

class AccountController {

    async getAccounts(req, res, next) {
        try {
            const user = req.user
            // const accountsList = await accountService(user.id)
            res.json(user)
        } catch (e) {
            next(e)
        }
    }

    async getOneAccount(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }

    async createAccount(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }

    async updateAccount(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }

    async deleteAccount(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }
}

export default new AccountController()