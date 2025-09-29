//Falsy : 조건문에서 False 취급
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

//Truthy : 조건문에서 True 취급(너무많음)
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

//Use case ex
let person = {
  name: "김이찬",
};

function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

printName(person);
