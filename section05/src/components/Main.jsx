//JSX 주의사항
//1. 중괄호 내부에는 자바스크립트 표현식만 가능 (IF, FOR 불가능)
//2. 숫자, 문자열, 배열 값만 랜더링 가능 (undefined, null 표현 불가능)
//객체 자체를 출력 불가능 : Objects are not valid as a React child (found: object with keys {a, b}).
//3. 모든 태그는 닫혀있어야 된다.
//4. most important : 최상위 태그는 반드시 단 하나. 병렬 태그 작성 불가능

import "./Main.css";

const Main = () => {
  const user = {
    name: "차은우",
    isLogin: true,
  };

  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
  //return <>{user.isLogin ? <div>로그인</div> : <div>로그아웃</div>}</>;
};

export default Main;
