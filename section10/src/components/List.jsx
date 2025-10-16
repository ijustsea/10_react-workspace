import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete, onExtend }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = (e) => {
    if (search.trim() === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData(); // 할일, 검색된 할일

  return (
    <div className="List">
      <h3 style={{ color: "yellowgreen" }}>myBook List ✔ </h3>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="찾고싶은 도서를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
              onExtend={onExtend}
            />
          );
          //return <TodoItem todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
