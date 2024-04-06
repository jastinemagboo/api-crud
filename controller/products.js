import Product from '../models/Product.js';

export const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find({});
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const createProducts = async (req, res) => {
	try {
		const products = await Product.create(req.body);
		res.status(200).json(products);
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
};
export const getOneProduct = (req, res, next) => {
	console.log('I am a middleware');
	next();
};
async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findById(id);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const updateOneProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findByIdAndUpdate(id, req.body);
		if (!product) {
			return res.statu(404).json({ message: 'Product not found' });
		}

		const updatedProduct = await Product.findById(id);
		res.status(200).json(updatedProduct);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const deleteOneProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findByIdAndDelete(id);

		if (!product) {
			res.status(400).json({ message: 'Product not found' });
		}
		await res.status(200).json({ message: 'Product deleted successfully' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
