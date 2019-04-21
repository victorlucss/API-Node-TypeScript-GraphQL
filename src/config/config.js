const express = require('express');
const app = express();
const [initial, article] = require('../routes/index');

app.use('/', initial);
app.use('/article', article);

module.exports = app;

