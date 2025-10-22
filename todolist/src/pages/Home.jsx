import Header from "../components/Header";
import Button from "../components/Button";

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
    23,
    59,
    59
  ).getTime();

  return data.filter(
    (item) => item.startTime <= endTime && item.endTime >= beginTime
  );
};

const Home = () => {
  return (
    <div>
      <Header
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
      투두리스트
    </div>
  );
};

export default Home;
