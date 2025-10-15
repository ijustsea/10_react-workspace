import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

import { useState, useRef, useEffect } from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "키다리 아줌마",
    date: new Date().getTime() + 14 * 24 * 60 * 60 * 1000,
  },
  {
    id: 1,
    isDone: false,
    content: "늙은 왕자",
    date: new Date().getTime() + 14 * 24 * 60 * 60 * 1000,
  },
  {
    id: 2,
    isDone: false,
    content: "애기와 바다",
    date: new Date().getTime() + 14 * 24 * 60 * 60 * 1000,
  },
];
//현실에서 할 일들을 프로그래밍으로 표현하려면 객체로 표기

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(mockData.length);

  const onCreate = (content) => {
    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isDone: false,
        content: content,
        date: new Date().getTime() + 14 * 24 * 60 * 60 * 1000,
      }),
      mode: "cors",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

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

  const onExtend = (targetId) => {
    //todos 배열값들 중 targetId와 일치하는
    //todo를 찾고 isDone을 true/false로 변경(Set함수).

    //인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새배열.
    setTodos(
      todos.map((todo) => {
        if (todo.id === targetId) {
          return { ...todo, date: todo.date + 7 * 24 * 60 * 60 * 1000 };
        }
        return todo;
      })
    );
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };
  //props로 onCreate 함수 Editor에게 넘겨주기
  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List
        todos={todos}
        onUpdate={onUpdate}
        onDelete={onDelete}
        onExtend={onExtend}
      />
    </div>
  );
}

export default App;
