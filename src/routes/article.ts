import express from 'express';
import {findAll, save, del, update} from '../controllers/article';

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

router.put('/:id', (req: any, res: any) => {
    update(req, res);
})

export default router;