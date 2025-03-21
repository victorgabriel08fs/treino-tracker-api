import express from 'express';
import 'dotenv/config'
import https from 'https';
import fs from 'fs';
import cors from 'cors';
import routes from './routes/index.routes.js';
import { errorMiddleware } from './middlewares/ErrorMiddleware.js';

const app = express();

app.use(express.json());
app.use(cors());

const HTTPS_PORT = process.env.PORT || 3000
const HTTP_PORT = process.env.HTTP_PORT || 3001

if(process.env.APP_ENV && process.env.APP_ENV === 'production') {
    // Carregar os certificados SSL
const options = {
    key: fs.readFileSync("/etc/letsencrypt/live/treinamente-api.duckdns.org/privkey.pem"),
    cert: fs.readFileSync("/etc/letsencrypt/live/treinamente-api.duckdns.org/fullchain.pem"),
  };
  
  // Criar o servidor HTTPS
  https.createServer(options, app).listen(HTTPS_PORT, () => {
    console.log(`Servidor rodando em https://treinamente-api.duckdns.org:${HTTPS_PORT}`);
  });
}

app.use('/api', errorMiddleware.handle, routes);

app.listen(HTTP_PORT, () => console.log(`Server running on port ${HTTP_PORT}`));

