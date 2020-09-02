const mongoose = require('mongoose')

const useSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        displayName: {
            type: String
        }
    }
})

module.exports = User = mongoose.model("user", useSchema)