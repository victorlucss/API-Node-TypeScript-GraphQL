const app = require('./src/config/config');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const port = process.env.port || 3000;

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/test?retryWrites=true`, {useNewUrlParser: true})
    .then(() => {
        console.log("Conected to MongoDB");
    }, err => {
        console.error("Failed to connect to MongoDB", err);
        
    });

app.listen(port, () => {
    console.log(`Server listeninig on port ${port}`)
})

