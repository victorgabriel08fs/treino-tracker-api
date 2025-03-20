import express from 'express';
import 'dotenv/config'
import routes from './routes/index.routes.js';

const app = express();

app.use(express.json());

app.use('/api', routes);

app.use("/", (req, res) => res.json({ message: "Hello World" }));

app.listen(3000, () => console.log('Server running on port 3000'));

