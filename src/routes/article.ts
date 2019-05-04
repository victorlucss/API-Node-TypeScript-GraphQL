import express from 'express';
import {findAll, save, del} from '../controllers/article';

const router = express.Router();

router.get('/', (req, res) => {
    findAll(req,res);
});

router.post('/', (req, res) => {
    save(req, res);
})

router.delete('/', (req:any , res: any) => {
    del(req, res);
})

export default router;