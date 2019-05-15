import ArticleInterface from '../models/interface/ArticleInterface';
import Article from  '../models/Article';
import ErrorException from '../base/ErrorException';
import RepositoryInterface from '../base/RepositoryInterface';

export default class ArticleRepository implements RepositoryInterface {
    
    constructor(){};

    public async findById(id: string): Promise<ArticleInterface> {
        
        //When the article isn't found I just need to throw the error to the above layer (in this case, the Service)
        let article: ArticleInterface = await Article.findOne({"_id": id}).catch(err => {
            throw Error();
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
