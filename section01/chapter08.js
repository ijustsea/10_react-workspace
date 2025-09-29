console.log("chapter08.js");
//null 병합 연산자 : 존재하는 값을 추려내는 기능
//null, undefined 아닌 값 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 30;

let var4 = var1 ?? var2;
console.log(var4);
let var5 = var1 ?? var3;
console.log(var5);
let var6 = var2 ?? var3;
console.log(var6);

let userName = "차은우";
let userNickName = "존잘왕자";
let displayName = userName ?? userNickName;
console.log(displayName);

//typeof 연산자 : 값의 타입을 문자열로 변환하는 기능
let var7 = 1;
var7 = "hello";

let t1 = typeof var7;
console.log(t1);
