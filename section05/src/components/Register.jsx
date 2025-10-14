import { useRef, useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  console.log(input);

  const countRef = useRef(0); // 리랜더링 되지않음.
  const inputRef = useRef();
  const birthRef = useRef();

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      //이름 입력하는 DOM요소 포커싱 => Ref가 접근가능
      inputRef.current.focus();
    } else if (input.birth === "") {
      birthRef.current.focus();
    }
  };

  return (
    <>
      <div>
        <div>
          <input
            ref={inputRef}
            name="name"
            value={input.name}
            onChange={onChange}
            placeholder={"이름"}
          />
        </div>
        <div>
          <input
            ref={birthRef}
            name="birth"
            value={input.birth}
            onChange={onChange}
            type="date"
          />
        </div>
        <div>
          <select name="country" value={input.country} onChange={onChange}>
            <option value={""}></option>
            <option value={"kr"}>한국</option>
            <option value={"us"}>미국</option>
            <option value={"eu"}>유럽</option>
          </select>
        </div>
        <div>
          <textarea name="bio" value={input.bio} onChange={onChange} />
        </div>
        <button onClick={onSubmit}>제출</button>
      </div>
    </>
  );
};

export default Register;
