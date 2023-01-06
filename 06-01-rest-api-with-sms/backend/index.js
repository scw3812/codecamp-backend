import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import dotenv from 'dotenv';

import { options } from './swagger/config.js';
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js';

const app = express();

dotenv.config();

const port = 3001;
const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());
app.use(cors());

app.post('/phone', (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  if (checkValidationPhone(phoneNumber)) {
    sendTokenToSMS(phoneNumber, getToken(6));
  }
  res.send('데이터 저장');
});

app.listen(port, () => {
  console.log(`listen: ${port}`);
});
