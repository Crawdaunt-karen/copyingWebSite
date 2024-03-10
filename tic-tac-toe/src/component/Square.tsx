import React from "react";

// Squareコンポーネントが受け取るpropsの型を定義
// valueは表示するマーク（string型の☓や◯）か、何も設定されていないnull
interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

export const Square = ({
  value,
  onSquareClick,
}: SquareProps): React.ReactElement => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};
