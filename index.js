'use strict'

const server = require('./api/server')
const mongoose = require('mongoose')

const { PORT } = require('./api/utils/constants')
const MONGOOSE_URI = process.env.MONGODB_URI || config.MONGODB_URI;

server.listen(PORT, async () => {
    await mongoose.connect(MONGOOSE_URI)
    console.log(`App listening on port ${PORT}`)
})
