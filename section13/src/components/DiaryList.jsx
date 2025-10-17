import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem.JSX";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DiaryList = ({ data }) => {
  const nav = useNavigate();

  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createDate) - Number(b.createDate);
      } else {
        return Number(b.createDate) - Number(b.createDate);
      }
    });
  };

  const sortedData = getSortedData(); //정렬된 데이터

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType} name="" id="">
          <option value="latest">최신순</option>
          <option value="oldest">오래된순</option>
        </select>
        <Button
          onClick={() => nav("/new")}
          text={"새 일기 쓰기"}
          type={"POSITIVE"}
        />
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default DiaryList;
