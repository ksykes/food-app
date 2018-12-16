'use strict'

const server = require('./api/server')
const mongoose = require('mongoose')

const { PORT, DB_URI } = require('./api/utils/constants')
const MONGOOSE_URI = DB_URI || config.MONGODB_URI;
const API_PORT = PORT|| config.PORT;

server.listen(API_PORT, async () => {
  await mongoose.connect(MONGOOSE_URI);
    console.log(`App listening on port ${API_PORT}`);
});
