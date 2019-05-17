import { Request, Response } from 'express';
import ArticleService from '../services/ArticleService';
import ErrorException from '../base/ErrorException';
import ArticleInterface from '../models/interface/ArticleInterface';

export default class ArticleController {
    
    private service: ArticleService;

    constructor(){
        this.service = new ArticleService();
    }

    findArticleById = async (req: Request, res: Response) => {
        try {
            let id: string = req.params.id;
            res.send(await this.service.findArticleById(id));
        } catch (ex){
            if(ex.code) res.status(ex.code).send(ex.message)
            res.status(500).send(ex.message);
        }
    }

    getArticles = async (req: Request, res: Response) => {
        try {
            res.send(await this.service.getArticles());
        } catch (ex){
            if(ex.code) res.status(ex.code).send(ex.message)
            res.status(500).send(ex.message);
        }
    }

    saveArticle = async (req: Request, res: Response) => {
        try {
            let article: ArticleInterface = req.body;
            res.send(await this.service.saveArticle(article));
        } catch (ex){
            if(ex.code) res.status(ex.code).send(ex.message)
            res.status(500).send(ex.message);
        }
    }
};

// export async function findAll(req: any , res: any, next: any) {
//     let articles = await find();

//     if(!articles) res.status(402).send("oi")

//     res.send(articles)
// };

// export function save(req: any, res: any) {
//     let article: IArticle = new Article({
//         title: req.body.title,
//         content: req.body.content,
//         createdAt: Date.now()
//     });
    
//     article.save((err: any) => {
//         if(err) res.status(500).end();

//         res.status(200).send({
//             message: "Documento salvo."
//         })
//     });
// };

// export function del(req: any, res: any){
//     let id = req.params.id;

//     let article = Article.findById(id, (err) => {
//         if(err) res.status(404).send({message: `Unable to find article with id = ${id}. Error: ${err}`});
        
//         res.status(200).send({
//             message: "Article successfully deleted!"
//         });
//     });
// };

// export function update(req: any, res: any){
//     let id = req.params.id;

//     Article.findById(id, (err, article: IArticle) => {
//         if(err) res.status(404).send({message: `Unable to find article with id = ${id}. Error: ${err}`});
        
//         article.title = req.body.title;
//         article.content = req.body.content;

//         article.save((err: any) => {
//             if(err) res.status(500).end();

//             res.status(200).send({
//                 message: "Article successfully updated!"
//             })
//         });
//     });
// }