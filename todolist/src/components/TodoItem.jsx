import "./TodoItem.css";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { TodoDispatchContext } from "../App";
import { useContext } from "react";

const TodoItem = ({ id, startTime, endTime, content, isDone }) => {
  const nav = useNavigate();
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheckbox = (e) => {
    onUpdate(id, startTime, endTime, content, !isDone);
  };
  const onClickDelete = () => {
    if (confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      // 일기 삭제 로직
      onDelete(id);
      nav("/", { replace: true });
    }
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
        &nbsp;{isDone === true ? "CLEAR" : "GOING"}
      </div>
      <div className="info_section">
        <div className="content">{content}</div>
        <div className="time_wrapper">
          <div className="start_time">{formatDateTime(startTime)}</div>
          <div className="end_time">{formatDateTime(endTime)}</div>
        </div>
      </div>

      <div className="button_section">
        <Button onClick={() => nav(`/edit/${id}`)} text={"수정"} />
        <Button onClick={onClickDelete} text={"삭제"} type={"DELETE"} />
      </div>
    </div>
  );
};

export default TodoItem;
