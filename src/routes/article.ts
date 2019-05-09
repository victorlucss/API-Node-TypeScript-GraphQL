import express from 'express';
import {findAll, save, del, update} from '../controllers/article';

const router = express.Router();

router.get('/', findAll);

router.post('/', save);

router.delete('/', del);

router.put('/:id', update);

export default router;