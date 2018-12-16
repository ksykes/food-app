'use strict';

const path = require('path')
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use('/', express.static(path.join(__dirname, '../build')))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/providers', require('./routes/providers'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    const errors = [
      { message: 'unauthorized' },
    ];

    res.status(401).json({ errors });
  } else {
    res.status(500).json({ errors: [err] })
  }
});

module.exports = app;
