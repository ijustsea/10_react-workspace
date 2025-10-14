import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(10);
  //props 문법을 이용해서 자식들에게 변수 주기
  //Viewer에게 count, Controller에게 eventHandler주기

  const onClickBtn = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickBtn={onClickBtn} />
      </section>
    </div>
  );
}

export default App;
