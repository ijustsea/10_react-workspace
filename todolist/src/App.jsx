import { useReducer } from "react";
import "./App.css";
import Home from "./pages/Home";

const mockData = [
  {
    id: 1,
    startTime: new Date("2025-10-17-15-00-00").getTime(),
    endTime: new Date("2025-10-17-21-00-00").getTime(),
    content: "자바스크립트 공부",
    isDone: false,
  },
  {
    id: 2,
    startTime: new Date("2025-10-18-15-00-00").getTime(),
    endTime: new Date("2025-10-19-21-00-00").getTime(),
    content: "즐거운 수학여행",
    isDone: false,
  },
  {
    id: 3,
    startTime: new Date("2025-10-23-09-00-00").getTime(),
    endTime: new Date("2025-10-23-21-00-00").getTime(),
    content: "편의점 주말 알바",
    isDone: false,
  },
];

function App() {
  const [data, dispatch] = useReducer(useReducer, mockData);

  const onCreate = (startTime, endTime, content) => {};

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
