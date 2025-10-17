import "./App.css";
import Home from "./Pages/Home";
import New from "./Pages/New";
import Diary from "./Pages/Diary";
import Notfound from "./Pages/Notfound";
import Edit from "./Pages/Edit";

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

export const DiaryStateContext = createContext(); //바뀌는것
export const DiaryDispatchContext = createContext(); //안 바뀌는것

//SPA 방식
//1."/" : 모든 일기 조회하는 Home Page
//2."/new" : 새로운 일기 작성하는 New Page
//3."/diary" : 일기 상세조회하는 Dairy Page
function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(mockData.length + 1);

  //일기추가 C
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

  //일기수정 U
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
  //일기삭제 D
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
      {/* <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />
      <Button
        text={"123"}
        onClick={() => {
          console.log("123버튼 클릭");
        }}
        type={"DEFAULT"}
      />
      <Button
        text={"123"}
        onClick={() => {
          console.log("123버튼 클릭");
        }}
        type={"POSITIVE"}
      />
      <Button
        text={"123"}
        onClick={() => {
          console.log("123버튼 클릭");
        }}
        type={"NEGATIVE"}
      /> */}

      {/* <button
        onClick={() => {
          onCreate(new Date().getTime().toLocaleString, 1, "안녕");
        }}
      >
        일기추가 테스트
      </button>

      <button
        onClick={() => {
          onUpdate(2, new Date().getTime().toLocaleString, 1, "수정테스트");
        }}
      >
        일기수정 테스트
      </button>
      <button
        onClick={() => {
          onDelete(1);
        }}
      >
        일기삭제 테스트
      </button> */}

      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}
export default App;
