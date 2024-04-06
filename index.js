import express from 'express';
import mongoose from 'mongoose';
import Product from './models/Product.js';
const app = express();
const port = 3000;

// for middleware
app.use(express.json());

// use to add new data using for-urlencoded
app.use(express.urlencoded({ extended: true }));

// routes file
import homeProduct from './routes/homeProduct.js';
import products from './routes/products.js';

// for creating routes
app.use('/', homeProduct);
app.use('/', products);

// mongo db connection
mongoose
	.connect(
		'mongodb+srv://admin:adminUser@backenddb.dswm2ng.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB',
	)
	.then(() => {
		console.log('Connected to database!');
		app.listen(port, () => {
			console.log('Server is running on port', port);
		});
	})
	.catch(() => {
		console.log('Connection failed!');
	});
