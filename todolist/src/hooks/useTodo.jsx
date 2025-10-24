import { useContext, useEffect, useState } from "react";
import { TodoStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useTodo = (id) => {
  const data = useContext(TodoStateContext); //모든 일정
  const [curTodoItem, setCurTodoItem] = useState();
  const nav = useNavigate();

  useEffect(() => {
    const currentTodoItem = data.find((item) => String(item.id) === String(id));
    if (!currentTodoItem) {
      alert("QUEST NOT EXISTED");
      nav("/", { replace: true });
    }
    setCurTodoItem(currentTodoItem);
  }, [id]);

  return curTodoItem;
};

export default useTodo;
