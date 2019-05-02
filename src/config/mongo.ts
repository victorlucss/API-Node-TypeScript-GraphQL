import mongoose from 'mongoose';

let mongoIsConected = false;

const connectToMongo = () => {
    console.log("[MONGO] Conecting to MongoDB...");
    mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/test?retryWrites=true`, {useNewUrlParser: true})
        .then(() => {
            mongoIsConected = true;
            console.log("[MONGO] Conected to MongoDB");
        }, (err: any) => {
            mongoIsConected = false;
            console.error("[MONGO] Failed to connect to MongoDB", err);
        });
};

export function connect(interval: number, attemps: number){
    let retryable = setInterval(() => {
        if(attemps === 0) {
            console.error("[MONGO] Error in MongoDB connection!");
            clearInterval(retryable);
        }else if(!mongoIsConected){
            console.log("[MONGO] Retrying connection with MongoDB");
            connectToMongo();
        }

        attemps--;
    }, interval);    

    connectToMongo();

};