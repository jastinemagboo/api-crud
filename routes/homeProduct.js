import Router from 'express';
import { createHome, getAllHomes, getOneHome } from '../controller/home.js';

const router = Router();

// router.get('/home', getHome);
// router.post('/home', createHome);

// route grouping
router.route('/home').get(getAllHomes).post(createHome);
router.route('/home/:id').get(getOneHome);

export default router;
