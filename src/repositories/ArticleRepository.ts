import ArticleInterface from '../models/interface/ArticleInterface';
import Article from  '../models/Article';
import ErrorException from '../base/ErrorException';

export default class ArticleRepository {
    
    constructor(){};

    public async find(): Promise<ArticleInterface[]> {
        let articles: ArticleInterface[] = await Article.find();
        
        return articles;
    };

    public async save(article: ArticleInterface): Promise<void> {
        await article.save().catch(err => {
            throw new ErrorException(err.message, 500);
        });
    }
};
