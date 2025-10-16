import "./App.css";
import Home from "./Pages/Home";
import New from "./Pages/New";
import Diary from "./Pages/Diary";
import Notfound from "./Pages/Notfound";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { getEmotionImage } from "./util/get-emotion-image";

//SPA 방식
//1."/" : 모든 일기 조회하는 Home Page
//2."/new" : 새로운 일기 작성하는 New Page
//3."/diary" : 일기 상세조회하는 Dairy Page
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}
export default App;
