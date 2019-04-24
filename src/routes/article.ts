import express from 'express';
import {findAll, save} from '../controllers/article';

const router = express.Router();

router.get('/', (req, res) => {
    findAll(req,res);
});

router.post('/', (req, res) => {
    save(req, res);
})

export default router;