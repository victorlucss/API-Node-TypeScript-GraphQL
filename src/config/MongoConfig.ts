import mongoose from 'mongoose';

export default class MongoConfig {

    private user: string | undefined;
    private password: string | undefined;
    private host: string | undefined;

    constructor(user: string | undefined, password: string | undefined, host: string | undefined){
        this.user = user;
        this.password = password;
        this.host = host;
    }

    public async connect(): Promise<void> {

        if(this.user != undefined && this.password != undefined && this.host != undefined){
            console.log("[MONGO] Conecting to MongoDB...");
    
            mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/test?retryWrites=true`, { useNewUrlParser: true })
                .then(() => console.log("[MONGO] Conected to MongoDB"))
                .catch(err => console.error(err));
        }else console.error("[MONGO] User, password or host is undefined!");

        
    }

};