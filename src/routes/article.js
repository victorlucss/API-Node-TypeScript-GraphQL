const express = require('express');
const router = express.Router();
const article = require('../controllers/article')

router.get('/', (req, res, next) => {
    article.findAll(req,res);
});

router.post('/', function(req, res, next) {
    article.save(req, res, next);
})

module.exports = router;