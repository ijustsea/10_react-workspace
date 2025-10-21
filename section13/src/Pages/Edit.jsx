import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Editor from "../components/Editor";
import Button from "../components/Button";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();

  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext); //모든일기라서 하나만꺼내와야함.

  const [curDiaryItem, setcurDiaryItem] = useState(null);

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );
    if (!currentDiaryItem) {
      alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
      //원래는 컴포넌트가 다 그려지고 나서호출되어야함
    }
    setcurDiaryItem(currentDiaryItem);
  }, [params.id]);

  const onClickDelete = () => {
    if (confirm("일기를 정말 삭제하시겠습니까? 삭제되면 복구할수 없습니다.")) {
      //일기삭제 로직 :
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (confirm("일기를 정말 수정할까요")) {
      onUpdate(
        params.id,
        input.createDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  // const getCurrentDiaryItem = () => {
  //   const currentDiaryItem = data.find(
  //     (item) => String(item.id) === String(params.id)
  //   );
  //   if (!currentDiaryItem) {
  //     alert("존재하지 않는 일기입니다.");
  //     nav("/", { replace: true });
  //     //원래는 컴포넌트가 다 그려지고 나서호출되어야함
  //   }
  //   return currentDiaryItem;
  // };

  // const currentDiaryItem = getCurrentDiaryItem();
  // console.log(currentDiaryItem);
  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={"< 뒤로가기"}
          />
        }
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      <Editor onSubmit={onSubmit} initdata={curDiaryItem} />
    </div>
  );
};

export default Edit;
