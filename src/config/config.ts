const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const ap = express();
const [initial, article] = require('../routes/index');

ap.use(bodyParser.json());
ap.use(bodyParser.urlencoded({ extended: false }));
ap.use(morgan('combined'))

ap.use('/', initial);
ap.use('/article', article);

export default ap;

