import "./App.css";
// import Button from "./components/button";
import { useState } from "react";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";
import Register from "./components/Register";
import HookExam from "./components/HookExam";
//리액트 앱에서는 예외적으로 esm방식이라도 확장자 생략가능.

//component base example
//변수안에 함수를 넣으면 함수명 못쓰게 되기 때문에 익명함수로 만듬(화살표)

//component :  html return JavaScript function
//root component
function App() {
  // const buttonProps = {
  //   text: "메일",
  //   color: "red",
  //   a: 1,
  //   b: 2,
  //   c: 3,
  // };

  // return (
  //   <>
  //     <Button {...buttonProps} />
  //     <Button text={"카페"} />
  //     <Button text={"블로그"}>
  //       <div>자식요소</div>
  //     </Button>
  //   </>
  // );

  // const [count, setCount] = useState(2);
  //const [light, setLight] = useState("OFF");

  // return (
  //   <>
  //     <div>
  //       <h1>{count}</h1>
  //       <button
  //         onClick={() => {
  //           setCount(count * 2); //상태변화함수
  //         }}
  //       >
  //         +
  //       </button>
  //     </div>
  // <div>
  //   <h1>{light}</h1>
  //   <button
  //     onClick={() => {
  //       setLight(light === "ON" ? "OFF" : "ON");
  //       //State가 바뀌면 리랜더링 재랜더링된다.
  //     }}
  //   >
  //     스위치
  //   </button>
  // </div>
  //   </>
  // );

  return (
    <>
      <br />
      <HookExam />
    </>
  );
}

export default App;
