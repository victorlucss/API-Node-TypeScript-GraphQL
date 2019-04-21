const app = require('./src/config/config');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const port = process.env.port || 3000;

dotenv.config();

mongoose.connect(`mongodb+srv://apiJS:${process.env.MONGO_PASSWORD}@minicursojs-zr4eo.mongodb.net/test?retryWrites=true`, {useNewUrlParser: true})
    .then(() => {
        console.log("Conected to Mongo DB");
    }, err => {
        console.log(err);
        
    });

app.listen(port, () => {
    console.log(`Server listeninig on port ${port}`)
})

