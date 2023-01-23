import tokenService from '../services/token-service.js'
import ErrorApi from '../exceptions/error-api.js'

export default function(req, res, next) {
    try {
        const authHeaders = req.headers.authorization
        if (!authHeaders) {
            return next(ErrorApi.UnauthorizedError())
        }
        const accessToken = authHeaders && authHeaders.split(' ')[1]

        if (!accessToken) {
            return next(ErrorApi.UnauthorizedError())
        }

        const userData = tokenService.validateAccesToken(accessToken)
        if (!userData) {
            return next(ErrorApi.UnauthorizedError())
        }

        req.user = userData
        next()
    } catch (e) {
        return next(ErrorApi.UnauthorizedError())
    }
}