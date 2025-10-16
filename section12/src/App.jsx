import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

import { useRef, useCallback, useReducer, createContext, useMemo } from "react";

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

function reducer(todos, action) {
  switch (action.type) {
    case "CREATE":
      return [...todos, action.data];
    case "UPDATE":
      return todos.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return todos.filter((item) => item.id !== action.targetId);
    case "EXTEND":
      return todos.map((item) =>
        item.id === action.targetId
          ? { ...item, date: item.date + 7 * 24 * 60 * 60 * 1000 }
          : item
      );
  }
}

export const TodoStateContext = createContext(); //변하는것
export const TodoDispatchContext = createContext(); //변하지 않는것?

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(mockData.length);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime() + 14 * 24 * 60 * 60 * 1000,
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onExtend = useCallback((targetId) => {
    dispatch({
      type: "EXTEND",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []); //처음 마운트 될때 생성만됨.

  const memoDispatch = useMemo(() => {
    return {
      onCreate,
      onUpdate,
      onDelete,
      onExtend,
    };
  }, []);

  //props로 onCreate 함수 Editor에게 넘겨주기
  return (
    <div className="App">
      <Header />

      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
