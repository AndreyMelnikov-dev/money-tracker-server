import tokenService from '../services/token-service.js'
import UserDTO from '../dtos/user-dto.js'

export default function(req, res, next) {
    try {
        const authHeaders = req.headers.authorization

        if (!authHeaders) {
            throw ErrorApi.UnauthorizedError()
        }

        const accessToken = authHeaders.split(' ')[1]

        if (!accessToken) {
            throw ErrorApi.UnauthorizedError()
        }

        const userData = tokenService.validateAccesToken(accessToken)

        if (!userData) {
            throw ErrorApi.UnauthorizedError()
        }

        const userDto = new UserDTO(userData)
        req.user = userDto
        next()
    } catch (e) {
        throw new Error('')
    }
}