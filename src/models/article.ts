import mongoose, {Schema} from 'mongoose';
import ArticleInterface from './interface/ArticleInterface';

const articleSchema: Schema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    createdAt: Date
}, {
    versionKey: false
});

export default mongoose.model<ArticleInterface>('Article', articleSchema);