import Header from "../components/Header";
import Button from "../components/Button";
import { useContext, useState, useEffect } from "react";
import { TodoStateContext } from "../App";
import TodoList from "../components/TodoList";

const getDateData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    pivotDate.getDate(),
    0,
    0,
    0
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    pivotDate.getDate() + 1,
    0,
    0,
    0
  ).getTime();

  return data.filter(
    (item) => item.startTime < endTime && item.endTime >= beginTime
  );
};

const Home = () => {
  const data = useContext(TodoStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  const [isToday, setIsToday] = useState(false);

  const dayData = getDateData(pivotDate, data);

  useEffect(() => {
    const today = new Date();
    setIsToday(
      pivotDate.getFullYear() === today.getFullYear() &&
        pivotDate.getMonth() === today.getMonth() &&
        pivotDate.getDate() === today.getDate()
    );
  }, [pivotDate]);

  const onIncreaseDate = () => {
    setPivotDate(
      new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth(),
        pivotDate.getDate() + 1
      )
    );
  };
  const onDecreaseDate = () => {
    setPivotDate(
      new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth(),
        pivotDate.getDate() - 1
      )
    );
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}. ${
          pivotDate.getMonth() + 1
        }. ${pivotDate.getDate()}`}
        leftChild={<Button onClick={onDecreaseDate} text={"< NEXT"} />}
        rightChild={<Button onClick={onIncreaseDate} text={"PREV >"} />}
        isToday={isToday}
      />

      <TodoList data={dayData} />
    </div>
  );
};

export default Home;
