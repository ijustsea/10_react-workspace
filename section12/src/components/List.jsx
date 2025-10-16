import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";

const List = () => {
  const todos = useContext(TodoStateContext);
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

  const { totalCount, readCount, notReadCount } = useMemo(() => {
    console.log("dang 오래걸리면 분석함수호출!"); //머리속에 넣어
    const totalCount = todos.length;
    const readCount = todos.filter((todo) => todo.isDone).length;
    const notReadCount = totalCount - readCount;

    return {
      totalCount,
      readCount,
      notReadCount,
    };
  }, [todos]); //[] deps : 의존성 배열

  return (
    <div className="List">
      <h3 style={{ color: "yellowgreen" }}>myBook List ✔ </h3>
      <div>총 대출한 도서: {totalCount}</div>
      <div>이미 읽은 도서: {readCount}</div>
      <div>읽지 않은 도서: {notReadCount}</div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="찾고싶은 도서를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
          //return <TodoItem todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
