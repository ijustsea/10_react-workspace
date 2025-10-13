import { useState } from "react";

const Bulb = () => {
  const [light, setLight] = useState("OFF");
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "green" }}>OFF</h1>
      )}
      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
          //State가 바뀌면 리랜더링 재랜더링된다.
        }}
      >
        스위치
      </button>
    </div>
  );
};

export default Bulb;
