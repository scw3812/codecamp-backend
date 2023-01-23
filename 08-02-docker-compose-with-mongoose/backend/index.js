import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { options } from './swagger/config.js';
import { checkValidationEmail, getWelcomeTemplate, sendTemplateToEmail } from './email.js';
import { Board } from './models/board.model.js';

const app = express();

dotenv.config();

const port = 3001;
const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());
app.use(cors());

app.get('/boards', async (req, res) => {
  const result = await Board.find();
  res.send(result);
});

app.post('/boards', async (req, res) => {
  const board = new Board(req.body);
  await board.save();
  res.send(board);
});

app.post('/users', (req, res) => {
  const user = req.body.user;
  const isValid = checkValidationEmail(user.email);
  if (isValid) {
    const template = getWelcomeTemplate(user);
    sendTemplateToEmail(user.email, template);
  }
  res.send('가입 완료');
});

mongoose.connect('mongodb://my-database:27017/myproject03');

app.listen(port, () => {
  console.log(`listen: ${port}`);
});
