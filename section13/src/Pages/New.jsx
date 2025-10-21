import Editor from "./../components/Editor";
import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();

  const onSubmit = (input) => {
    onCreate(input.createDate.getTime(), input.emotionId, input.content);
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button text={"<"} onClick={() => nav(-1)} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
//New라는 페이지에서 editor부를 떄 일기작성
