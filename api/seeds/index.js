const mongoose = require('mongoose')

const Provider = require('../models/Provider')
const providers = require('./providers')
const uri = 'mongodb://localhost:27017/foods'

// truncate database
const truncateDatabase = async () => {
    // delete all providers to start with fresh data
    return Promise.all([Provider.deleteMany()])
}

const makeSeeds = async () => {
    // connect to mongo database
    await mongoose.connect(uri)
    // delete all old data in the database
    await truncateDatabase()
    // save all providers into the database
    await Promise.all(providers.map(provider => {
        var newProvider = new Provider(provider)
        return newProvider.save()
    }))
    // close the connection
    mongoose.connection.close()
}

makeSeeds()