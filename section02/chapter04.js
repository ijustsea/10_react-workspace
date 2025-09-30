//1.spread (연산자) : 흩뿌리다, 확장적으로 펼치다
//=> 배열, 객체에 저장된 여러값들을 개별로 퍼뜨리는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

//console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

// console.log(obj2);

function funcA(p1, p2, p3) {
  // console.log(p1, p2, p3);
}

funcA(...arr1);

//Rest 매개변수 : 나머지, 나머지 매개변수?

function funcB(one, ...rest) {
  console.log(rest);
  console.log(one);
}

funcB(...arr1);
