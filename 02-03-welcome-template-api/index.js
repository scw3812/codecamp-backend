import { checkValidationEmail, getWelcomeTemplate, sendTemplateToEmail } from './email.js';

function createUser(user) {
  const isValid = checkValidationEmail(user.email);
  if (isValid) {
    const template = getWelcomeTemplate(user);
    sendTemplateToEmail(user.email, template);
  }
}

const username = '영희'
const age = 20
const school = '토끼대학교'
const email = 'sdfsdfs@naver.com'

createUser({ username, age, school, email });