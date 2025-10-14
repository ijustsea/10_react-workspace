import { useEffect } from "react";

//홀 수 일 때만 보여지는

const Odd = () => {
  useEffect(() => {
    return () => {};
  }, []);

  return <div>홀수입니다.</div>;
};

export default Odd;
