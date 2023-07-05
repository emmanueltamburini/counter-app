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
        <button aria-label="btn-subtract" onClick={handleSubtract}>
            -1
        </button>
        <button aria-label="btn-add" onClick={handleAdd}>
            +1
        </button>
        <button aria-label="btn-reset" onClick={handleReset}>
            reset
        </button>
    </>
  )
}
