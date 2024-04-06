import Router from 'express';
import {
	getAllProducts,
	getOneProduct,
	updateOneProduct,
	createProducts,
	deleteOneProduct,
} from '../controller/products.js';

const router = Router();

router.get('/products', getAllProducts).post('/products', createProducts);
router
	.get('/products/:id', getOneProduct)
	.put('/product/:id', updateOneProduct)
	.delete('/product/:id', deleteOneProduct);

export default router;
