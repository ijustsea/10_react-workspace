//math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multi(a, b) {
  return a * b;
}

//CJS 방식 : {}는 객체
// module.exports = {
//   add,
//   sub,
// };

//export { add, sub };
