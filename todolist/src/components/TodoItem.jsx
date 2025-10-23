import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { TodoDispatchContext } from "../App";
import { useContext } from "react";

const TodoItem = ({ id, startTime, endTime, content, isDone }) => {
  const nav = useNavigate();
  const { onUpdate } = useContext(TodoDispatchContext);

  const onChangeCheckbox = (e) => {
    onUpdate(id, startTime, endTime, content, !isDone);
  };

  // 날짜와 시간 포맷 함수
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const dateStr = date.toLocaleDateString("ko-KR", {
      month: "long",
      day: "numeric",
    });
    const timeStr = date.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${dateStr} ${timeStr}`;
  };

  return (
    <div className="TodoItem">
      <div>
        <input onChange={onChangeCheckbox} type="checkbox" checked={isDone} />
        &nbsp;{isDone === true ? "completed" : "unfinished"}
      </div>
      <div className="info_section">
        <div className="start_time">{formatDateTime(startTime)}</div>
        <div className="end_time">{formatDateTime(endTime)}</div>
        <div className="content">{content}</div>
      </div>

      <div className="button_section">
        <Button onClick={() => nav(`/edit/${id}`)} text={"수정"} />
        <Button text={"삭제"} />
      </div>
    </div>
  );
};

export default TodoItem;
