import { getToday } from "./utils.js";

export function checkValidationEmail(email) {
  if (!email.includes('@')) {
    console.log('error: invalid email')
    return false;
  }
  return true;
}

export function getWelcomeTemplate({ username, age, school, email }) {
  const today = getToday();
  const result = `
    <html>
      <body>
        <h1>${username}님 가입을 환영합니다!!</h1>
        <hr />
        <div>이름: ${username}</div>
        <div>나이: ${age}</div>
        <div>학교: ${school}</div>
        <div>이메일: ${email}</div>
        <div>가입일: ${today}</div>
      </body>
    </html>
  `;

  return result;
}

export function sendTemplateToEmail(email, template) {
  console.log('To. ' + email, template);
}
