const power = function (x) {
  return x * x;
};

const numbers = [1, 2, 3, 4, 5];

// 화살표 함수의 생략 과정

// 1. 원본
numbers.forEach(function (n) {
  console.log(`${n}:  ${power(n)}`);
});

// 2. 두가지 이상의 결과에는 중괄호 필요 - function이 사라지고 화살표가 등장
numbers.forEach((n) => {
  console.log(`${n}: ${power(n)}`);
  console.log("Hello, It's me.");
});

// 3. 단일 결과, 완전한 축약형
numbers.forEach((n) => console.log(`${n}: ${power(n)}`));
