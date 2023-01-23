import { Schema, model } from 'mongoose'

const iconSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    link: { type: String, required: true, unique: true },
    created_at: { type: Date, required: true },
    modified_at: { type: Date, required: true } 
})

export default model('Icon', iconSchema)