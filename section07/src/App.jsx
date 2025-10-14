import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useRef, useEffect } from "react";
import Even from "./components/Even";
import Odd from "./components/Odd";

function App() {
  const [count, setCount] = useState(11);
  const [input, setInput] = useState("");
  //props 문법을 이용해서 자식들에게 변수 주기
  //Viewer에게 count, Controller에게 eventHandler주기

  const isMount = useRef(false);

  //1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, []); //빈배열

  //2. 업데이트 : 변화, 리랜더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });
  //3. 언마운트 : 죽음

  // useEffect(() => {
  //   console.log(`count : ${count} / input : ${input}`);
  // }, [count, input]); //count를 의존성 배열이라고 지칭.dependency array : deps

  const onClickBtn = (value) => {
    setCount(count + value);
    //비동기로 동작 : 여기서 호출했지만 나중에 실행됨. 오래걸려서 즉각반영안됨.
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>

      <section>
        <Controller onClickBtn={onClickBtn} />
      </section>
    </div>
  );
}

export default App;
