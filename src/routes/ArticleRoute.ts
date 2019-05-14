import { Application } from 'express';
import RouteInterface from '../models/interface/RouteInterface';
import ArticleController from '../controllers/ArticleController';

export default class ArticleRoute implements RouteInterface {

    private controller: ArticleController;

    constructor(){
        this.controller = new ArticleController();
    }

    public applyRoute(app: Application): void {

        app.get('/article/:id', this.controller.findArticleById);

        app.get('/article', this.controller.getArticles);

        app.post('/article', this.controller.saveArticle);

        // app.delete('/:id', this.controller.deleteArticle);

        // app.put('/:id', this.controller.updateArticle);
    }

};
