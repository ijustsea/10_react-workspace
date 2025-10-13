import "./App.css";
import Button from "./components/button";
//리액트 앱에서는 예외적으로 esm방식이라도 확장자 생략가능.

//component base example
//변수안에 함수를 넣으면 함수명 못쓰게 되기 때문에 익명함수로 만듬(화살표)

//component :  html return JavaScript function
//root component
function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <div>자식요소</div>
      </Button>
    </>
  );
}

export default App;
