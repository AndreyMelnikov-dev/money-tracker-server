import jwt from 'jsonwebtoken'
import tokenModel from '../models/token-model.js'

class TokenService {

    generateTokens(payload) {
        const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN, { expiresIn: '60d' })
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: '1m' })

        return {
            refreshToken,
            accessToken
        }
    }

    async saveRefreshToken(userId, refreshToken) {
        const token = await tokenModel.findOne({ user: userId })
        if (token) {
            token.refresh_token = refreshToken
            return await token.save()
        }
        return await tokenModel.create({
            user: userId,
            refresh_token: refreshToken
        })
    }

    async deleteToken(refreshToken) {
        return await tokenModel.findOneAndDelete({ refresh_token: refreshToken })
    }

    validateRefreshToken(refreshToken) {
        try {
            return jwt.verify(refreshToken, process.env.REFRESH_TOKEN)
        } catch (e) {
            return null
        }
    }

    async findRefreshToken(refreshToken) {
        try {
            return await tokenModel.findOne({ refresh_token: refreshToken })
        } catch (e) {
            return null
        }
    }

}

export default new TokenService()