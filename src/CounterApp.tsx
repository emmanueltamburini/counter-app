import { MouseEvent } from "react";

interface Props {
    value: number;
}

export const CounterApp = ({value}: Props) => {
  const handleAdd = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    console.log(event);
  };

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { value } </h2>
        <button onClick={handleAdd}>
            +1
        </button>
    </>
  )
}
