import { Schema, model } from 'mongoose'

const accountSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    value: { type: Number, default: 0 },
    currency: { type: String, deafult: '$' },
    icon: { type: Schema.Types.ObjectId, ref: 'Icon' },
    created_at: { type: Date, required: true },
    modified_at: { type: Date, required: true } // ?
})

export default model('Account', accountSchema)