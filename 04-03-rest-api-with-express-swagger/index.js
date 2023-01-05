import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';

const app = express();

const port = 3000;
const swaggerSpec = swaggerJsdoc(options)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());

app.get('/boards', (req, res) => {
  const result = [
    { number: 1, writer: '철수', title: 'title', contents: 'contents' },
    { number: 2, writer: '철수', title: 'title', contents: 'contents' },
    { number: 3, writer: '철수', title: 'title', contents: 'contents' },
  ];
  res.send(result);
});

app.post('/boards', (req, res) => {
  console.log(req.body);
  res.send('데이터 저장');
});

app.listen(port, () => {
  console.log(`listen: ${port}`);
});