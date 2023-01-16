import { Schema, model } from 'mongoose'

const categoriesSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    icon: { type: Schema.Types.ObjectId, ref: 'Icon' },
    title: { type: String, required: true }
})

export default model('Categories', categoriesSchema)