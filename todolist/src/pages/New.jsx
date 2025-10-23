import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TodoDispatchContext } from "../App";
import Header from "../components/Header";
import Editor from "../components/Editor";
import Button from "../components/Button";

const New = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  const nav = useNavigate();

  const onSubmit = (input) => {
    onCreate(input.startTime.getTime(), input.endTime.getTime(), input.content);
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"새로운 일정"}
        leftChild={
          <Button
            onClick={() => {
              nav("/");
            }}
            text={"< 뒤로 가기"}
          />
        }
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
