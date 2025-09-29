//객체생성
let obj1 = new Object();
let obj2 = {}; //객체 리터럴방식

//객체 프로퍼티
let person = {
  name: "차은우",
  age: 27,
  hobby: "얼굴",
  extra: {},
  10: 20,
  "like cat": true,
};
console.log(person);

let name = person.name;
let age = person["age"];

let property = "hobby";
let hobby = person[property];

//새로운 프로퍼티를 추가하는 방법
person.job = "연기자";
person["favoriteFood"] = "초콜릿";

delete person.job;
delete person.favoriteFood;
