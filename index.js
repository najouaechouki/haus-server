import express from 'express';
import cors from 'cors';
const app = express();
const port = 8080;

import apiRouter from './routes/api.js';

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1', apiRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})


