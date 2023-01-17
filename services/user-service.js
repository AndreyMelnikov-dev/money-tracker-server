import userModel from '../models/user-model.js'
import mailService from './mail-service.js'
import bcrypt from 'bcrypt'
import { v4 } from 'uuid'

class UserService {
    async registerUser(name, email, login, password, phone) {

        // check user candidate
        const userCandidate = await userModel.findOne({ $or: [{ email }, { login }] })
        if (userCandidate)
            throw new Error('user exist')

        // get some fields
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
        

        return newUser
    }
}

export default new UserService()