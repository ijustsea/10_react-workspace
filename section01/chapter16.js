//상수객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; //property 추가
animal.name = "까망이"; //property 수정
delete animal.color; //property 제거

//console.log(animal);
//상수객체는 주소값이 상수이기떄문에
//객체 자체를 바꾸는게 아닌 프로퍼티를 바꾸는건 가능하다.

//메서드 : 값이 함수인 프로퍼티

const person = {
  name: "차은우",
  //메서드 : 함수를 가지는 프로퍼티
  sayHi: () => {
    console.log("Hello!");
  },
};

person["sayHi"]();
person.sayHi();
