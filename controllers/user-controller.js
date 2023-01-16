class UserController {
    async registerUser(req, res, next) {
        
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