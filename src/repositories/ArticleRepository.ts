import ArticleInterface from '../models/interface/ArticleInterface';
import Article from  '../models/Article';
import ErrorException from '../base/ErrorException';
import RepositoryInterface from '../base/RepositoryInterface';

export default class ArticleRepository implements RepositoryInterface {
    
    constructor(){};

    public async findById(id: string): Promise<ArticleInterface> {
        
        let article: ArticleInterface = await Article.findById(id, (err) => {
            if(err) throw Error();
        });       

        return article;
    };
    
    public async find(): Promise<ArticleInterface[]> {
        let articles: ArticleInterface[] = await Article.find();
        
        return articles;
    };

    public async save(article: ArticleInterface): Promise<void> {
        await article.save().catch(err => {
            throw new ErrorException(err.message, 500);
        });
    }

    public async edit(id: number, article: ArticleInterface): Promise<void> {
        let findArticle = await Article.findByIdAndUpdate(id, article, (err) => {
            if(err) throw new ErrorException(err.message, 500);
        });
    }
    
    public async delete(id: number): Promise<void> {
        let article = await Article.findByIdAndDelete(id, (err) => {
            if(err) throw new ErrorException(err.message, 500);
        });
    }
};
