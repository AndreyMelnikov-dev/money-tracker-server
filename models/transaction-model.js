import { Schema, model } from 'mongoose'

const transactionSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    account: { type: Schema.Types.ObjectId, ref: 'Account' },
    type: { type: String, default: 'expense' },
    value: { type: Number, default: 0 },
    date: { type: Date, required: true },
    comment: { type: String }
})

export default model('Transactions', transactionSchema)