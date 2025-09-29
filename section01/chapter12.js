//함수표현식
function funcA() {
  console.log("funcA");
}

let varA = funcA;
//console.log(varA);
varA();

let varB = function () {
  console.log("funcB");
}; //익명함수

varB();

//화살표함수
let varC = function () {
  return 1;
};

let varD = (value) => value + 5;
console.log(varD(5));
