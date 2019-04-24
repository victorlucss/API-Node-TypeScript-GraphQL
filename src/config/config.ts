import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import {article,initial} from '../routes';

const config = express();

config.use(bodyParser.json());
config.use(bodyParser.urlencoded({ extended: false }));
config.use(morgan('combined'))

config.use('/', initial);
config.use('/article', article);

export default config;

