const express = require('express');
const router = express.Router();

router.get('/article', (req, res, next) => {
    res.status(200).send({
        title: "Sucess",
        content: "tudo estará aqui em breve"
    })
});

module.exports = router;