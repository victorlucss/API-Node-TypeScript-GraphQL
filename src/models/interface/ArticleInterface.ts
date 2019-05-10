import { Document } from 'mongoose';

export default interface ArticleInterface extends Document {
    title: string,
    content: string,
    createdAt: number
};