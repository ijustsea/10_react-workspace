import { useReducer } from "react";

//reducer : 상태 변환기
function reducer(state, action) {
  // if (action.type === "INCREASE") {
  //   return state + action.data;
  // } else if (action.type === "DECREASE") {
  //   return state - action.data;
  // }

  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  //dispatch : 발송하다 : 상태변화가 있어야한다는 사실을 알리는 함수

  const onClickPlus = () => {
    //상태가 어떻게 변화되길 원하는지
    dispatch({
      type: "INCREASE",
      data: 10,
    });
  };

  const onClickMinus = () => {
    //상태가 어떻게 변화되길 원하는지
    dispatch({
      type: "DECREASE",
      data: 10,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
