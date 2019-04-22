const Article = require('../models/article')

module.exports.findAll = (req, res) => {
    let all = Article.find();

    all.then((articles) => {
        res.json(articles)
    }, err => {
        res.end();
    })
};

module.exports.save = function(req, res) {
    let article = {
        title: req.body.title,
        content: req.body.content,
        createdAt: req.body.createdAt   
    };

    article = new Article(article);
    
    article.save((err) => {
        if(err) res.status(500).end();

        res.status(200).send({
            message: "Documento salvo."
        })
    });

}