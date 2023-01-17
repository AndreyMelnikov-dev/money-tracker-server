import { model, Schema } from 'mongoose'

const tokenSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    refresh_token: { type: String, required: true }
})

export default model('Token', tokenSchema)