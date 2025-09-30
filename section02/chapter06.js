//배열순회
let arr = [1, 2, 3];

//1.배열인덱스
for (let i = 0; i < arr.length; i++) {
  //console.log(arr[i]);
}

//2.for of 반복문(배열만)
for (let item of arr) {
  // console.log(item);
}

//객체순회

let person = {
  name: "차은우",
  age: 27,
  hobby: "얼굴",
};

//1.Object.keys : 객체에서 key값만 뽑아서 새로운 배열 반환
let keys = Object.keys(person);

for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}

//2.Object.values : 객체에서 values값만 뽑아서 새로운 배열 반환
let values = Object.values(person);

for (let value of values) {
  console.log(value);
}

//3.for in
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
