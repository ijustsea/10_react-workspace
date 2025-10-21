import EmotionItem from "./EmotionItem";
import Button from "./Button";
import "./Editor.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const emotionList = [
  { emotionId: 1, emotionName: "완전좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "그럭저럭" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "완전나쁨" },
];
const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};
const Editor = ({ initdata, onSubmit }) => {
  const nav = useNavigate();
  useEffect(() => {
    if (initdata) {
      setInput({
        ...initdata,
        createDate: new Date(Number(initdata.createDate)),
      });
    }
  }, [initdata]);

  const [input, setInput] = useState({
    createDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  const onChangeInput = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    let name = e.target.name;
    let value = e.target.value;
    if (name === "createDate") {
      value = new Date(value);
    }
    setInput({
      ...input,
      [name]: value,
    });
  };
  const onClickEmotion = (emotionId) => {
    setInput({
      ...input,
      emotionId: emotionId,
    });
  };
  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createDate)}
          type="date"
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() => onClickEmotion(item.emotionId)}
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="text_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어떗나요"
        />
      </section>
      <section className="button_section">
        <Button text="취소하기" />
        <Button
          onClick={onClickSubmitButton}
          text="작성완료"
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};
export default Editor;
