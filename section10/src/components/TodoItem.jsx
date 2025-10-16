import "./TodoItem.css";

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

export default TodoItem;
