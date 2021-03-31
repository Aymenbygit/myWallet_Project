const mongoose = require('mongoose')

const operationSchema = mongoose.Schema({
    owner: {
        type: mongoose.Types.ObjectId ,
        ref: 'user'
    },
    label: String,
    amount: Number,
    type: String,
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('operation', operationSchema)