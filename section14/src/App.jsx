import "./App.css";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import New from "./pages/New";

import { Routes, Route } from "react-router-dom";
import { useReducer, useRef, createContext } from "react";

const mockData = [
  {
    id: 1,
    createDate: new Date("2025-10-17").getTime(),
    emotionId: 1,
    content: "1번 일기 내용입니다.",
  },
  {
    id: 2,
    createDate: new Date("2025-10-16").getTime(),
    emotionId: 2,
    content: "2번 일기 내용입니다.",
  },
  {
    id: 3,
    createDate: new Date("2025-9-17").getTime(),
    emotionId: 3,
    content: "3번 일기 내용입니다.",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.data.id));
    default:
      return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(mockData.length + 1);

  const onCreate = (createDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createDate,
        emotionId,
        content,
      },
    });
  };

  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createDate,
        emotionId,
        content,
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

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="*" element={<Notfound />} />
            <Route path="/new" element={<New />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
