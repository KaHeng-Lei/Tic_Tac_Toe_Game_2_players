import React from "react";

const RenderMoves = ({ history, onClick }) => {
  return (
    <>
      {history.map((_step, i) => {
        const destination = i ? `Go to Move #${i}` : "Go to Start";
        return (
          <li key={i}>
            <button onClick={() => onClick(i)}>{destination}</button>
          </li>
        );
      })}
    </>
  );
};

export default RenderMoves;
