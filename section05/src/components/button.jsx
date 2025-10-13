import { Children } from "react";

const Button = ({ children, text, color = "black" }) => {
  //이벤트 핸들러
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button onClick={onClickButton} style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
