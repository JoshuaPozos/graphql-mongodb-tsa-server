import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './data/schema';

const app = express();

app.get('/', (req, res) => {
	res.send('All ready');
});

app.use(
	'/graphql',
	graphqlHTTP({
		// Use schema
		schema,
		// Use graphiql
		graphiql: true
	})
);

app.listen(3301, () => console.log('App listening on port 3301!'));
