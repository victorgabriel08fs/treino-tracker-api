import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import routes from './routes/index.routes.js';
import { errorMiddleware } from './middlewares/ErrorMiddleware.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', errorMiddleware.handle, routes);

app.listen(3000, () => console.log('Server running on port 3000'));

