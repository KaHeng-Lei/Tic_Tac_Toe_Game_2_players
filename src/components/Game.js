import React, { useState } from "react";
import Board from "./Board";
import { calculteWinner } from "../helper";
import RenderMoves from "./RenderMoves";

const styles = {
  width: "200px",
  margin: "20px auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};
const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculteWinner(history[stepNumber]);

  const handleClick = (i) => {
    const currentBoard = history[stepNumber];
    const currentBoardClone = [...currentBoard];
    // if user click an occupied square or if game is won, return
    if (winner || currentBoardClone[i]) return;
    // put an X or O in the clicked square
    currentBoardClone[i] = xIsNext ? "X" : "O";
    setHistory([...history, currentBoardClone]);
    setStepNumber(history.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (i) => {
    setStepNumber(i);
    setXisNext(i % 2 === 0 ? true : false);
    setHistory(history.slice(0, i + 1));
  };

  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner
            ? `Winner is: ${winner}`
            : "Next player is: " + (xIsNext ? "X" : "O")}
        </p>
        <RenderMoves history={history} onClick={jumpTo} />
      </div>
    </>
  );
};

export default Game;
