import { useEffect } from "react";

//짝수 일 때만 보여지는

const Even = () => {
  useEffect(() => {
    //클린업, 정리함수
    return () => {
      console.log("UnMount");
    };
  }, []);
  return <div>짝수입니다.</div>;
};

export default Even;
