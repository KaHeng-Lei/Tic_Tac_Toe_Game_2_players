import React from "react";

const style = {
  width: "100px",
  height: "100px",
  color: "pink",
  background: "black",
  padding: "0 auto",
  fontSize: "75px",
  fontWeight: "300",
  border: "2px solid pink",
};
const Square = ({ value, onClick }) => {
  return (
    <button style={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
