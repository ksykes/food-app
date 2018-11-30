const mongoose = require('mongoose')
const Schema = mongoose.Schema

const providerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    certification: {
        type: String
    },
    products: {
        type: Array
    },
    tours: {
        type: Boolean
    },
    pos: {
        type: Boolean
    },
    about: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    website: {
        type: String
    },
    socialMedia: {
        type: Array
    }
})

module.exports = mongoose.model('Provider', providerSchema)