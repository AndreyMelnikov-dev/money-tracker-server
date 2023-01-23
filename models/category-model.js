import { Schema, model } from 'mongoose'

const categoriesSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    icon: { type: Schema.Types.ObjectId, ref: 'Icon' },
    title: { type: String, required: true },
    created_at: { type: Date, required: true },
    modified_at: { type: Date, required: true }
})

export default model('Categories', categoriesSchema)