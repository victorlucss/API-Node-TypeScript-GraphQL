import ArticleRepository from "../repositories/ArticleRepository";
import ArticleInterface from "../models/interface/ArticleInterface";
import ErrorException from "../base/ErrorException";
import Response from "../base/Response";
import Article from "../models/Article";

export default class ArticleService {
    private repository: ArticleRepository;

    constructor(){
        this.repository = new ArticleRepository();
    };

    public async findArticleById(id: string): Promise<ArticleInterface> {
        let article: ArticleInterface = await this.repository.findById(id);

        if(!article) throw new ErrorException(new Response("No article found."), 404);

        return article;
    }

    public async getArticles(): Promise<Response> {
        
        let articles: ArticleInterface[] = await this.repository.find();

        if(articles.length > 0) return new Response(articles);
        
        
        throw new ErrorException("No content found.", 204);

    }

    public async saveArticle(article: ArticleInterface): Promise<Response> {

        try {

            let articleSave: ArticleInterface = new Article(article);
            let validate = await articleSave.validateSync();
    
            if(validate)
                throw new ErrorException(validate.message, 400);

            this.repository.save(articleSave);            
            return new Response("Article successfuly saved!");

        } catch(ex){
            throw ex;
        }
    }
};