import React, { useState } from "react";
import "../style.css";
import { Board } from "./Board";
// import { calculateWinner } from "../utils/calculateWinner";

const calculateWinner = (squares: (string | null)[]): string | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export const Game: React.FC = () => {
  // Array(9).fill(null) で9 個の要素を全てにnullを設定した配列のsquaresが初期値
  const [history, setHistory] = useState<{ squares: (string | null)[] }[]>([
    { squares: Array(9).fill(null) },
  ]);
  // 現在何番目のstepかを保持するstate
  const [stepNumber, setStepNumber] = useState(0);
  const xIsNext = stepNumber % 2 === 0;

  // Squareコンポーネントでclickが起きたとき
  // iはどのSquareコンポーネントがクリックされたかを識別するインデックス的なやつ
  const handlePlay = (i: number) => {
    // 現在までのゲームの履歴をコピーし、かつ現在の状態を取得
    // 例えばゲームが4手進んでいるとすると、stepNumberは3
    // そこでhistory.slice(0, 3 + 1)を呼び出すとインデックス0から3までの4つの状態を含む新しい配列が得られる
    const historyPoint = history.slice(0, stepNumber + 1);

    // 現在のボードの状態を取得
    const current = historyPoint[historyPoint.length - 1];
    const squares = current.squares.slice();

    // もし勝敗がすでに決まっていたら何もしない
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";
    setHistory(historyPoint.concat([{ squares }]));
    setStepNumber(historyPoint.length);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((_, move) => {
    const desc = move ? `Go to move #${move}` : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={current.squares}
          onPlay={handlePlay}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
