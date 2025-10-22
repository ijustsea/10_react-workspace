import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";
import Header from "../components/Header";
import Button from "../components/Buttons";

import usePageTitle from "../hooks/usePageTitle";
import DiaryList from "../components/DiaryList";

// 해당 월에 일기를 조회해주는 함수
const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    11,
    59,
    59
  ).getTime();

  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};

const Home = () => {
  const data = useContext(DiaryStateContext); // all 모든일기

  const [pivotDate, setPivotDate] = useState(new Date());

  usePageTitle("감정일기장");

  const monthlyData = getMonthlyData(pivotDate, data); // [{},{}]
  console.log(monthlyData);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
