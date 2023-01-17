import userService from '../services/user-service.js'

class UserController {
    async registerUser(req, res, next) {
        try {
            const { name, email, login, password, phone } = req.body
            const newUser =
                await userService.registerUser(name, email, login, password, phone)
            res.json(newUser)
        } catch (e) {
            console.log(e)
        }
    }

    async activateUser(req, res, next) {

    }

    async loginUser(req, res, next) {

    }


    async logoutUser(req, res, next) {

    }

    async refreshUser(req, res, next) {

    }

    // delete on release
    async testUser(req, res, next) {
        res.json('test user')
    }
}

export default new UserController