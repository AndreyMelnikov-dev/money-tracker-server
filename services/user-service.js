import userModel from '../models/user-model.js'
import mailService from './mail-service.js'
import tokenService from './token-service.js'
import UserDTO from '../dtos/user-dto.js'
import bcrypt from 'bcrypt'
import { v4 } from 'uuid'
import ErrorApi from '../exceptions/error-api.js'

class UserService {

    async registerUser(name, email, login, password, phone) {

        // check user candidate
        const userCandidate = await userModel.findOne({ $or: [{ email }, { login }] })
        if (userCandidate)
            throw ErrorApi.BadRequest('User Exist')

        // create some fields
        const hashedPassword = await bcrypt.hash(password, 3)
        const activationLink = v4()
        const userCreatedDate = new Date()

        // create user in DB
        const newUser = await userModel.create({
            name,
            email,
            login,
            password: hashedPassword,
            phone,
            activation_link: activationLink,
            created_at: userCreatedDate,
            modified_at: userCreatedDate
        })

        // send activation mail
        await mailService.sendActivationLink(email, activationLink)

        // tokens
        const userDto = new UserDTO(newUser)
        const tokens = tokenService.generateTokens({...userDto })
        await tokenService.saveRefreshToken(userDto.id, tokens.refreshToken)

        return {
            user: userDto,
            tokens
        }
    }

    async activateUser(activationLink) {
        const user = await userModel.findOne({ activation_link: activationLink })
        if (!user) {
            throw ErrorApi.BadRequest('No user with this link')
        }
        user.is_activated = true
        return await user.save()
    }

    async loginUser(login, email, password) {
        const loginCandidate = await userModel.findOne({
            $or: [
                { login }, { email }
            ]
        })

        if (!loginCandidate)
            throw ErrorApi.BadRequest('User not found')

        const isPasswordsEquals = await bcrypt.compare(password, loginCandidate.password)

        if (!isPasswordsEquals)
            throw ErrorApi.BadRequest('Incorrect password')

        const userDto = new UserDTO(loginCandidate)
        const tokens = await tokenService.generateTokens({...userDto })
        await tokenService.saveRefreshToken(userDto.id, tokens.refreshToken)

        return {
            user: userDto,
            ...tokens
        }
    }

    async logoutUser(refreshToken) {
        return await tokenService.deleteToken(refreshToken)
    }

    async refreshUser(refreshToken) {
        if (!refreshToken)
            throw ErrorApi.UnauthorizedError()

        const validatedUser = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDB = tokenService.findRefreshToken(refreshToken)

        if (!validatedUser || !tokenFromDB)
            throw ErrorApi.UnauthorizedError()

        const userDto = new UserDTO(validatedUser)

        const newTokens = await tokenService.generateTokens({...userDto })
        await tokenService.saveRefreshToken(validatedUser.id, newTokens.refreshToken)

        return {
            user: userDto,
            ...newTokens
        }
    }
    
}

export default new UserService()