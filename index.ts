import express from 'express';
import apiRouter from './src/api';

const app = express();
const port = process.env.PORT || 3000;

app.use('/api', apiRouter);

app.listen(port, () => {
	console.log(`Server listen on ${port}`);
}); 