import mongoose from 'mongoose';
import { Products } from './db';

export const resolvers = {
	Query: {
		getProduct: ({ id }) => {
			return new Product(id, productDB[id]);
		}
	},
	Mutation: {
		createProduct: (root, { input }) => {
			const newProduct = new Products({
				title: input.title,
				price: input.price,
				image: input.image,
				productUrl: input.productUrl,
				description: input.description,
				type: input.type,
				trademark: input.trademark,
				categories: input.categories
			});

			newProduct.id = newProduct._id;

			return new Promise((resolve, object) => {
				newProduct.save(err => {
					if (err) rejects(err);
					else resolve(newProduct);
				});
			});
		}
	}
};

export default resolvers;
