import mongoose, {Schema, Document} from 'mongoose';

export interface IArticle extends Document {
    title: string,
    content: string,
    createdAt: number
}

const articleSchema: Schema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    createdAt: Date
}, {
    versionKey: false
});

export default mongoose.model<IArticle>('Article', articleSchema);