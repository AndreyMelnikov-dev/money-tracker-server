import userService from '../services/user-service.js'

class UserController {
    async registerUser(req, res, next) {
        try {
            const { name, email, login, password, phone } = req.body
            const newUser = await userService.registerUser(name, email, login, password, phone)

            res.cookie('refreshToken', newUser.refreshToken, { maxAge: 60 * 60 * 24 * 30 * 1000, httpOnly: true })
            res.json(newUser)
        } catch (e) {
            console.log(e)
        }
    }

    async activateUser(req, res, next) {
        try {
            const activationLink = req.params.link
            const activatedUser = await userService.activateUser(activationLink)
            res.json(activatedUser)
        } catch (e) {
            console.log(e)
        }
    }

    async loginUser(req, res, next) {
        try {
            const { login, email, password } = req.body
            const loggedUser = await userService.loginUser(login, email, password)
            res.cookie('refreshToken', loggedUser.refreshToken, { maxAge: 60 * 60 * 24 * 30 * 1000, httpOnly: true })
            res.json(loggedUser)
        } catch (e) {
            console.log(e)
        }
    }

    async logoutUser(req, res, next) {
        try {
            const refreshToken = req.cookies.refreshToken
            const loggedoutUser = await userService.logoutUser(refreshToken)
            res.clearCookie('refreshToken')
            res.json(loggedoutUser)
        } catch (e) {
            console.log(e)
        }
    }

    async refreshUser(req, res, next) {
        
    }

    // delete on release
    async testUser(req, res, next) {
        res.json('test user')
    }
}

export default new UserController