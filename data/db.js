import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/tsa-db', { useNewUrlParser: true });

const productSchema = new mongoose.Schema({
	title: String,
	price: Number,
	image: String,
	productUrl: String,
	description: String,
	type: String,
	trademark: String,
	categories: Array
});

const Products = mongoose.model('products', productSchema);

export { Products };
