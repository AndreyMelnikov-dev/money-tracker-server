import { model, Schema } from 'mongoose'

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    activation_link: { type: String, required: true },
    is_activated: { type: Boolean, default: false },
    created_at: { type: Date, required: true },
    modified_at: { type: Date, required: true } // ?
})

export default model('User', userSchema)