import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({
  id,
  isDone,
  content,
  date,
  onUpdate,
  onDelete,
  onExtend,
}) => {
  // const time = new Date(date).toLocaleString("ko-KR", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   second: "2-digit",
  // });

  const onChangeCheckbox = (e) => {
    onUpdate(id);
  };

  const onChangeButton = (e) => {
    onDelete(id);
  };

  const onChangeDate = (e) => {
    onExtend(id);
  };

  return (
    <div className="TodoItem">
      읽음{" "}
      <input onChange={onChangeCheckbox} type="checkbox" checked={isDone} />
      <div className="content">도서명 :&nbsp;{content}</div>
      <div className="date">
        반납일 :&nbsp;
        {new Date(date).toLocaleString("ko-KR", {
          month: "long",
          day: "numeric",
          hour: "2-digit",
        })}
      </div>
      <button onClick={onChangeButton}>반납</button>
      <button onClick={onChangeDate}>연장</button>
    </div>
  );
};

// export default memo(TodoItem, (prevProps, nextProps) => {
//   //반환값에 따라, Props 바뀌었는지 여부 판다.
//   //true : Props 바뀌지않음, 리랜더링 x
//   //false : porps 바뀜, 리랜더링 o

//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;
//   return true;
// });

export default memo(TodoItem); //memo() : 고차함수 or 고차 컴포넌트(Higher Order Component)
