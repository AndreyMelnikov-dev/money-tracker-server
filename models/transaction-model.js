import { Schema, model } from 'mongoose'

const transactionSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    account: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Categories', required: false },
    type: { type: String, default: 'expense', enum: ['expense', 'income', 'translation'] },
    value: { type: Number, default: 0 },
    date: { type: Date, required: true },
    comment: { type: String },
    created_at: { type: Date, required: true },
    modified_at: { type: Date, required: true }
})

export default model('Transaction', transactionSchema)