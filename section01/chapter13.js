//콜백함수 : 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미함
//인수?: argument
//보통 인수로 int, String같은 값을 넣는데, 함수를 넣는경우를 콜백함수로 지칭한다.

function main(value) {
  value();
}

main(() => {});

//콜백함수 활용 : Why use?
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(4 * idx);
});
//함수를 계속 만드는게 불편 => 콜백함수의 의미
