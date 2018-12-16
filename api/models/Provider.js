const mongoose = require('mongoose')
const Schema = mongoose.Schema

const providerSchema = new Schema({
    properties: {
        name: {
            type: String,
            required: true
        },
        certification: {
            type: Array
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
        },
        category: {
            type: String,
            required: true
        },
        geometry: {
            coordinates: {
                type: Array,
                required: true
            }
        }
    }
})

module.exports = mongoose.model('Provider', providerSchema)