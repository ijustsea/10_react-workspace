function greeting() {
  console.log("안녕하세요");
}

//JavaScript는 매개변수로 자료형을 쓰지않는다.

console.log(getArea(50, 30));

//함수안에 함수 정의 가능.
function getArea(width, height) {
  function another() {
    console.log("another");
  }
  another();
  let area = width * height;
  return area;
}
