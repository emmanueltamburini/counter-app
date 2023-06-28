import { MouseEvent, useState } from "react";

interface Props {
    value: number;
}

export const CounterApp = ({value}: Props) => {
  const [counter, setCounter] = useState<number>(value);
  const handleAdd = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    console.log(event);
    setCounter(c => c + 1);
  };

  const handleSubtract = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    console.log(event);
    setCounter(c => c -1);
  };

  const handleReset = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    console.log(event);
    setCounter(value);
  };

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={handleSubtract}>
            -1
        </button>
        <button onClick={handleAdd}>
            +1
        </button>
        <button onClick={handleReset}>
            reset
        </button>
    </>
  )
}
