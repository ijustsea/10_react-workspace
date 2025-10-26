import React from "react";

const TetrisBackground = () => {
  const blocks = [
    // I 블록들
    { type: "i", cells: 4 },
    { type: "i", cells: 4 },
    // O 블록들
    { type: "o", cells: 4 },
    { type: "o", cells: 4 },
    // T 블록들
    { type: "t", cells: 4 },
    { type: "t", cells: 4 },
    // L 블록들
    { type: "l", cells: 4 },
    { type: "l", cells: 4 },
    // S 블록들
    { type: "s", cells: 4 },
    { type: "s", cells: 4 },
    // Z 블록들
    { type: "z", cells: 4 },
    { type: "z", cells: 4 },
    // J 블록들
    { type: "j", cells: 4 },
    { type: "j", cells: 4 },
    // 추가 블록
    { type: "i", cells: 4 },
  ];

  return (
    <div className="tetris-bg">
      {blocks.map((block, index) => (
        <div key={index} className={`tetris-block block-${block.type}`}>
          {Array.from({ length: block.cells }).map((_, i) => (
            <div key={i} className="cell"></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TetrisBackground;
