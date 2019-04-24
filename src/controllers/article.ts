import Article, { IArticle } from '../models/article'

export function findAll(req:any , res: any) {
    Article.find().then((articles) => {
        res.json(articles)
    }, (err: any) => {
        res.end();
    })
};

export function save(req: any, res: any) {
    let article: IArticle = new Article({
        title: req.body.title,
        content: req.body.content,
        createdAt: Date.now()
    });
    
    article.save((err: any) => {
        if(err) res.status(500).end();

        res.status(200).send({
            message: "Documento salvo."
        })
    });

}