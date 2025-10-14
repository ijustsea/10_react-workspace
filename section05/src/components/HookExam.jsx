import useInput from "../hooks/useInput";

//Three tips of Hook
//1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출가능
//2. 조건부로 호출 될 수는 없다.
//3. Custom Hook 직접 만들 수 있다.

//const state = useState();
//Invalid hook call. Hooks can only be called inside of the body of a function component.

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
      <br />
      <br />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
