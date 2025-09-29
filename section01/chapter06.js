//묵시적 형변환 (JavaScript Engine Auto)

let num = 10;
let str = "20";

const result = num + str;
console.log(result);
//문자열은 어떠한 타입을 만나더라도 상대를 문자로 만듬.

//명시적 형변환
//프로그래머 내장함수등 이용해서 직접형변환
//문자열을 숫자로 형변환

let str1 = "10";
let strToNum1 = Number(str1);

console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = parseInt(str2);

console.log(strToNum2);

let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다.");
