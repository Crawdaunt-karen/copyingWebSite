import React from "react";
import { Square } from "./Square";

// Boardコンポーネントが受け取るPropsを定義
// xIsNextは現在がXのターンかどうかを示す真偽値
// squaresは各マスの状態を示す文字列またはnullが含まれる配列
// onplayはマスがクリックされたときに実行される関数で、
// マスのインデックスを引数として受け取る
interface BoardProps {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (i: number) => void;
}

export const Board: React.FC<BoardProps> = ({ squares, onPlay }) => {
  const renderSquare = (i: number) => (
    <Square value={squares[i]} onSquareClick={() => onPlay(i)} />
  );
  const size = 3;
  const renderRow = (row: number) => (
    <div className="board-row" key={row}>
      {Array.from({ length: size }).map((_, col) =>
        renderSquare(row * size + col)
      )}
    </div>
  );
  return (
    <div>{Array.from({ length: size }).map((_, row) => renderRow(row))}</div>
  );
};
