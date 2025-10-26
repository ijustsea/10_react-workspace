import { createContext, useReducer, useRef, useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";
import TetrisBackground from "./components/TetrisBackground";

const mockData = [
  {
    id: 1,
    startTime: new Date("2025-10-17T15:00:00").getTime(),
    endTime: new Date("2025-10-17T18:00:00").getTime(),
    content: "자바스크립트 공부",
    isDone: false,
  },
  {
    id: 2,
    startTime: new Date("2025-10-18T15:00:00").getTime(),
    endTime: new Date("2025-10-19T21:00:00").getTime(),
    content: "즐거운 수학여행",
    isDone: false,
  },
  {
    id: 3,
    startTime: new Date("2025-10-23T09:00:00").getTime(),
    endTime: new Date("2025-10-23T20:00:00").getTime(),
    content: "편의점 주말 알바",
    isDone: false,
  },
  {
    id: 4,
    startTime: new Date("2025-10-17T19:00:00").getTime(),
    endTime: new Date("2025-10-17T21:00:00").getTime(),
    content: "SQL 공부",
    isDone: false,
  },
];

function reducer(state, action) {
  let nextState;
  switch (action.type) {
    case "INIT": {
      return action.data;
    }

    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter(
        (item) => String(item.id) !== String(action.data.id)
      );
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("todo", JSON.stringify(nextState));
  return nextState;
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const [isLoading, setIsLoading] = useState(true);
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem("todo");

    if (!storedData) {
      setIsLoading(false);
      return;
    }
    const parsedData = JSON.parse(storedData); // null or undefined일 경우.
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > Number(maxId)) {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data: parsedData,
    });
    setIsLoading(false);
  }, []);

  const onCreate = (startTime, endTime, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        startTime,
        endTime,
        content,
        isDone: false,
      },
    });
  };

  const onUpdate = (id, startTime, endTime, content, isDone) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        startTime,
        endTime,
        content,
        isDone, // isDone을 인자로 받아서 업데이트
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      data: {
        id,
      },
    });
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <TetrisBackground />
      <TodoStateContext.Provider value={data}>
        <TodoDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </>
  );
}

export default App;
