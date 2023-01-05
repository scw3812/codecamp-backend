function getWelcomeTemplate({ username, age, school, createdAt }) {
  const result = `
    <html>
      <body>
        <h1>${username}님 가입을 환영합니다!!</h1>
        <hr />
        <div>이름: ${username}</div>
        <div>나이: ${age}</div>
        <div>학교: ${school}</div>
        <div>가입일: ${createdAt}</div>
      </body>
    </html>
  `;

  console.log(result);
}

const username = '영희'
const age = 20
const school = '토끼대학교'
const createdAt = '2023-01-02'

getWelcomeTemplate({ username, age, school, createdAt });