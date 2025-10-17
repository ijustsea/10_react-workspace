import "./App.css";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import New from "./pages/New";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/new" element={<New />} />
      </Routes>
      테스트
    </>
  );
}

export default App;
