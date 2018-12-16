'use strict'

const server = require('./api/server')
const mongoose = require('mongoose')

const { PORT, DB_URI } = require('./api/utils/constants')
const MONGOOSE_URI = config.MONGODB_URI || DB_URI;
const API_PORT = config.PORT || PORT;

server.listen(API_PORT, async () => {
  await mongoose.connect(MONGOOSE_URI);
    console.log(`App listening on port ${API_PORT}`);
});
