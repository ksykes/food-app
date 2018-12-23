'use strict';

exports.PORT = process.env.PORT || 3001;
exports.SECRET = process.env.SECRET || 'super-secret-passphrase';
exports.DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/foods'
// exports.DB_URI = 'mongodb://heroku_rd1smrtw:ac4ntfqn9uttgtej7p8mrs3jcp@ds135724.mlab.com:35724/heroku_rd1smrtw'