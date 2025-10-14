import { useState } from "react";

//커스텀 훅
function useInput() {
  const [input, setInput] = useState("");
  //리액트 훅! 함수형 컴포넌트에서만 써야하는데 그냥 일반함수에서 사용중인데 문제
  //일반함수를 커스텀 훅으로 만들어버리면 되는데 함수 이름에 use를 붙여주면 됨

  const onChange = (e) => {
    setInput(e.target.value);
  };
  return [input, onChange];
}

export default useInput;
