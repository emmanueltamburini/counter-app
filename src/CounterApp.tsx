interface Props {
    value: number;
}

export const CounterApp = ({value}: Props) => {
  return (
    <>
        <h1>CounterApp</h1>
        <h2> { value } </h2>
    </>
  )
}
