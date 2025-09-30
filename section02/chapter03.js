console.log("chapter03");
let arr = [1, 2, 3];

//배열 구조 분해 할당

let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

//객체 구조 분해 할당
let person = {
  name: "차은우",
  age: 27,
  hobby: "얼굴",
};

// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;

// console.log(name, age, hobby);

let { name, age, hobby, extra = "hello" } = person;
// console.log(name, age, hobby, extra);

//객체 구조분해할당 이용해서 함수 매개변수 받는법

const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
