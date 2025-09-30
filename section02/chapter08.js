//1.forEach : 모든 요소 순회하면서 각각요소 특정동작을 수행하는 메소드
let arr1 = [1, 2, 3];
arr1.forEach((item, index, arr) => {
  //console.log(index, item * 2);
});

let doubleArr = [];
arr1.forEach((item) => {
  doubleArr.push(item * 2);
});

//console.log, doubleArr;

//2.includes  : 특정 요소가 배열에 존재하는지 없는지 확인하는 메소드
let arr2 = [1, 2, 3];
let includes = arr2.includes(3);
//console.log(includes);

//3.indexOf : 특정 요소의 인덱스 (위치) 찾아서 반환
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);

let objectArr = [{ name: "김시연" }, { name: "차은우" }];
//console.log(objectArr.indexOf({ name: "김시연" }));

//4.findIndex : 모든 요소 순회하면서 콜백함수 만족하는 특정요소 인덱스를 찾아 반환해주는 메소드
let arr4 = [1, 2, 3];
const findIndex = arr4.findIndex((item) => item % 2 !== 0);
//console.log(findIndex);

//5.find : 모든 요소 순회하면서 콜백함수를 만족하는 요소를 찾는데 요소를 그대로 반환

let arr5 = [{ name: "김시연" }, { name: "차은우" }];
const finded = arr5.find((item) => item.name === "김시연");
console.log(finded);
