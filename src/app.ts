import dotenv from 'dotenv';
import config from './config/config';
import * as mongo from './config/mongo';

const port = process.env.port || 3000;

dotenv.config();

mongo.connect(3000, 5);

config.listen(port, () => {
    console.log(`Server listeninig on port ${port}`)
})

