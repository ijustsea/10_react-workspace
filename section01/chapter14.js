//scope : 범위 ~ 변수나 함수에 접근하거나 호출할수 있는 범위
//전역(전체)|지역(특정) 스코프

let a = 1;

function funcA() {
  console.log(a);
}

funcA();

if (true) {
  let c = 1;
}

for (let i = 0; i < 10; i++) {
  let d = 10;
  function funcB() {
    console.log("funcB");
  }
}

funcB();
