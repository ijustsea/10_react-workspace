//1.filter : 기존 배열에서 조건 만족하는요소들만 골라서 새로운배열
let arr1 = [
  { name: "장우석", hobby: "골프" },
  { name: "김이찬", hobby: "숏박스" },
  { name: "최재홍", hobby: "골프" },
];
let golfPeople = arr1.filter((item) => item.hobby === "골프");
// console.log(golfPeople);

//2.map(핵심) : 배열의 모든요소 순회하면서, 각각콜백함수실행
//그 결과값들을 모아서 새로운 배열로 반환한다. (중요중요중요)
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  //console.log(idx, item);
  return item * 2; //** 이 지점이 forEach문과 다르다.
});
// console.log(mapResult1);

let names = arr1.map((item) => item.name);
console.log(names);

let hobbys = arr1.map((item) => item.hobby);
//console.log(hobbys);

//3.sort : 배열을 사전순으로 정렬하는 메소드
let arr3 = ["b", "a", "c"];
arr3.sort();
//console.log(arr3);
let arr3_1 = [10, 3, 5, 1];
const sortArr = arr3_1.sort((a, b) => {
  if (a > b) {
    //b가 a 앞에 와라
    return 1;
  } else if (a < b) {
    //a가 b 앞에 와라
    return -1;
  } else {
    //두 값의 자리를 바꾸지마
    return 0;
  }
});
//console.log(sortArr);
//console.log(arr3_1);//원본영향있음

//4.toSorted : 정렬된 새로운 배열을 반환하는 메소드
let arr4 = ["c", "a", "b"];
const toSorted = arr4.toSorted();
console.log(toSorted, arr4); //원본에 영향없음

//5.join : 배열의 모든요소를 하나의 문자열로 합쳐서 반환하는 메소드
let arr5 = ["Hi", "I'm", "pretty"];
const joined = arr5.join(" "); //구분자 제시
console.log(joined);
