const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const [initial, article] = require('../routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'))

app.use('/', initial);
app.use('/article', article);

module.exports = app;

