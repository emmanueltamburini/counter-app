const newMessage = {
    message: "Hello World",
    title: "Fernando"
};

const helloWorld = () => "Hello world";

interface Props {
    title: string;
    subTitle: number;
}

const HelloWorldApp = ({title, subTitle}: Props) => {
  return (
    <>
        <h1>{title}</h1>
        <h2>{subTitle + 1}</h2>
        <code>{JSON.stringify(newMessage)}</code>
        <p>{helloWorld()}</p>
    </>
  )
}

export default HelloWorldApp;