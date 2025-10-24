import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TodoDispatchContext } from "../App";
import useTodo from "../hooks/useTodo";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

const Edit = () => {
  const nav = useNavigate();
  const params = useParams();
  const { onUpdate } = useContext(TodoDispatchContext);
  const curTodoItem = useTodo(params.id);

  const onSubmit = (input) => {
    if (confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        params.id,
        input.startTime.getTime(),
        input.endTime.getTime(),
        input.content,
        curTodoItem.isDone
      );
      nav("/", { replace: true });
    }
  };
  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={"< 뒤로 가기"}
          />
        }
      />
      <Editor onSubmit={onSubmit} initData={curTodoItem} text={"수정하기"} />
    </div>
  );
};
export default Edit;
