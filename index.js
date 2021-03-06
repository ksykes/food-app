'use strict'

const server = require('./api/server')
const mongoose = require('mongoose')

const { PORT, DB_URI } = require('./api/utils/constants')

server.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    mongoose.connect(DB_URI, (err) => {
        if (err === true) {
            console.log('There was a problem connecting to MongoDB.')
            // console.log(err)
        } else {
            console.log('You\'ve connected successfully.')
        }
    });
});
