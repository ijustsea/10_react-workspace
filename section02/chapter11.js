//   동기 : 순서대로 순차적으로 하나씩 하는방식
// 비동기 : 작업을 순서대로 처리하지 않음.

console.log(1);
setTimeout(() => {
  console.log(2);
}, 3000);
console.log(3);
