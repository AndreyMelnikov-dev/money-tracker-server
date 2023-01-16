import { model, Schema } from 'mongoose'

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    activationLink: { type: String, required: true },
    isActivated: { type: Boolean, default: false }
})

export default model('User', userSchema)