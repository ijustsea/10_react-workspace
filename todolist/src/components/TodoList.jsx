import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoItem from "./TodoItem";
import Button from "./Button";

const TodoList = ({ data }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(b.startTime) - Number(a.startTime);
      } else {
        return Number(a.startTime) - Number(b.startTime);
      }
    });
  };

  const sortedData = getSortedData();

  return (
    <div>
      <div>
        <select value={sortType} onChange={onChangeSortType}>
          <option value={"latest"}>빠른순</option>
          <option value={"oldest"}>늦은순</option>
        </select>
        <Button
          onClick={() => nav("/new")}
          text={"NEW QUEST"}
          type={"POSITIVE"}
        />
      </div>
      <div>
        {sortedData.map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
