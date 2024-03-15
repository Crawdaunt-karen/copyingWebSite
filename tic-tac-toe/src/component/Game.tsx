import React, { useState } from "react";
import "../style.css";
import { Board } from "./Board";
import { calculateWinner } from "../utils/calculateWinner";

export const Game: React.FC = () => {
  // Array(9).fill(null) で9 個の要素を全てにnullを設定した配列のsquaresが初期値
  const [history, setHistory] = useState<{ squares: (string | null)[] }[]>([
    { squares: Array(9).fill(null) },
  ]);
  // 現在何番目のstepかを保持するstate
  const [stepNumber, setStepNumber] = useState(0);
  // 現在のプレーヤーがXかOかを決定する
  //stepNumber(手番)が偶数ならX、奇数ならO
  const xIsNext = stepNumber % 2 === 0;

  // Squareコンポーネントでclickが起きたとき
  // iはどのSquareコンポーネントがクリックされたかを識別するインデックス
  const handlePlay = (i: number) => {
    // historyPointはゲームが開始してから、現在の手番までの全てのボードの状態を保持する配列
    // ゲームが任意の段階に戻った時に、その時点からゲームを再開できる
    const historyPoint = history.slice(0, stepNumber + 1);

    // currentは、最後のゲームの状態を保持
    const current = historyPoint[historyPoint.length - 1];
    //squaresはcurrentの個々のマスの状態をX,O,nullのいずれかで保存している
    const squares = current.squares.slice();

    // もし勝敗がすでに決まっているか、そのマスが埋まっていたら何もしない
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    // 選択されたマスを現在のプレーヤーのマーク(X or O)で更新
    squares[i] = xIsNext ? "X" : "O";
    // historyPointにsquaresを追加したhistoryをsetする
    setHistory(historyPoint.concat([{ squares }]));
    // 手番の更新
    setStepNumber(historyPoint.length);
  };

  // どの手番に戻るかの文字列
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
