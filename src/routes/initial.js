const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Flisol 2019 - Ligando o motor com JS",
        content: "Bem vindo, cabra arretado!",
        version: "RAPADURA 0.1"
        
    })
});

module.exports = router;