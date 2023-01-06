import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import dotenv from 'dotenv';

import { options } from './swagger/config.js';
import { checkValidationEmail, getWelcomeTemplate, sendTemplateToEmail } from './email.js';

const app = express();

dotenv.config();

const port = 3001;
const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());
app.use(cors());

app.post('/users', (req, res) => {
  const user = req.body.user;
  const isValid = checkValidationEmail(user.email);
  if (isValid) {
    const template = getWelcomeTemplate(user);
    sendTemplateToEmail(user.email, template);
  }
  res.send('가입 완료');
});

app.listen(port, () => {
  console.log(`listen: ${port}`);
});
