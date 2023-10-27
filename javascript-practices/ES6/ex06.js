// 구조분해

const user = {
  firstName: "새",
  lastName: "벽",
  email: "@gmail.com",
};
// 구조 분해 할당을 사용하여 객체로부터 데이터 추출
const { firstName, lastName, email } = user;
console.log(firstName);
