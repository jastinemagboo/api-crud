import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProductSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Please enter product name'],
		},
		quantity: {
			type: Number,
			required: true,
			default: 0,
		},
		price: {
			type: Number,
			required: true,
			default: 0,
		},
		image: String,
		description: String,
		category: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

const Product = mongoose.model('Product', ProductSchema);

export default Product;
