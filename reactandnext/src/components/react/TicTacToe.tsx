import { useState } from "react";

function TicTacToe() {
  const [isX, setX] = useState(false);
  const [history, setHistory] = useState<Array<(null | string)[]>>([
    Array(9).fill(null),
  ]);
  const [winner, setWinner] = useState<string | null | undefined>(null);
  const currentState = history[history.length - 1];
  const jumpTo = (num: number) => {
    setHistory(history.slice(0, num));
  };
  const handleClick = (idx: number) => {
    const newArr = history[history.length - 1].slice();
    if (newArr[idx]) {
      return;
    }
    if (isX) {
      newArr[idx] = "X";
      setX(!isX);
    } else {
      newArr[idx] = "O";
      setX(!isX);
    }
    setHistory([...history, newArr]);
    const gotWin = winningChar(newArr);
    if (gotWin) {
      setWinner(gotWin);
      setTimeout(() => {
        alert(`winner is ${gotWin}`);
      }, 100);
    }
  };

  return (
    <div className="flex justify-evenly items-center h-[300px] w-[400px] bg-white">
      <div className="flex flex-col">
        {history.map((history, idx) => {
          return (
            <button onClick={() => jumpTo(idx + 1)} className=" text-black">
              hop on {idx + 1}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-1">
        {currentState.map((state, idx) => {
          return (
            <button
              onClick={() => handleClick(idx)}
              key={`${idx}tikutikuyep`}
              className="w-12 h-12 border-black text-black border rounded-lg"
            >
              {state}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default TicTacToe;

function winningChar(arr: (string | null)[]) {
  const winArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winArr.length; i++) {
    const [a, b, c] = winArr[i];
    if (arr[a] && arr[a] === arr[b] && arr[b] === arr[c]) {
      return arr[a];
    }
  }
}
