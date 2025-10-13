//const { add, sub } = require("./math"); CJS 방식
// import multi from "./math.js";
import multi, { add, sub } from "./math.js"; //확장자까지 정확하게 기입
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

// console.log(add(1, 2));
// console.log(sub(5, 3));
// console.log(multi(3, 3));

//구조분해 할당 : require 메소드를 통해 함수 할당 : CJS 방식
