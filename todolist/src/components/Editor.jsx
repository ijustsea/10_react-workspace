import "./Editor.css";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useEffect, useState } from "react";

const Editor = ({ initData, onSubmit, text }) => {
  const nav = useNavigate();
  const now = new Date();

  const [input, setInput] = useState({
    startTime: now,
    endTime: new Date(now.getTime() + 3 * 60 * 60 * 1000),
    content: "",
  });

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        startTime: new Date(Number(initData.startTime)),
        endTime: new Date(Number(initData.endTime)),
      });
    }
  }, [initData]);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: name === "content" ? value : new Date(value),
    });
  };

  const onClickSubmitButton = () => {
    if (input.content.trim() === "") {
      alert("일정 내용을 입력해주세요.");
      return;
    }
    onSubmit(input);
  };

  // Date 객체를 datetime-local 형식으로 변환하는 함수
  const formatDateTimeLocal = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>START:</h4>
        <input
          name="startTime"
          type="datetime-local"
          value={formatDateTimeLocal(input.startTime)}
          onChange={onChangeInput}
        />
        <h4>END:</h4>
        <input
          name="endTime"
          type="datetime-local"
          value={formatDateTimeLocal(input.endTime)}
          onChange={onChangeInput}
        />
      </section>
      <section className="content_section">
        <h4>NEW QUEST</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘을 무슨 일을 할까?"
        />
      </section>
      <section className="button_section">
        <Button onClick={() => nav(-1)} text={"취소하기"} type={"DELETE"} />
        <Button onClick={onClickSubmitButton} text={text} />
      </section>
    </div>
  );
};

export default Editor;
