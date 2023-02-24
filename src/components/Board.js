import React from "react";
import Square from "./Square";

const style = {
  width: "300px",
  height: "300px",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
  margin: "100px auto",
  border: "4px solid pink",
  borderRadius: "2%",
};
const Board = ({ squares, onClick }) => {
  return (
    <div style={style}>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Board;
