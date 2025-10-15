import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

import { useState, useRef } from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React Study",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Landry",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "Sing a song",
    date: new Date().getTime(),
  },
];
//현실에서 할 일들을 프로그래밍으로 표현하려면 객체로 표기

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(mockData.length);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([...todos, newTodo]);
    //스프레드 연산자로 ...todos 로 기존의 값들을 가져오고 앞이나 뒤에 배치한다.
  };

  const onUpdate = (targetId) => {
    //todos 배열값들 중 targetId와 일치하는
    //todo를 찾고 isDone을 true/false로 변경(Set함수).

    //인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새배열.
    setTodos(
      todos.map((todo) => {
        if (todo.id === targetId) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
    );
  }; //map은 리턴한거 가지고 배열을 만들어주는 것.

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };
  //props로 onCreate 함수 Editor에게 넘겨주기
  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
