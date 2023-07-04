const newMessage = {
    message: "Hello World",
    title: "Fernando"
};

const helloWorld = (name: string) => `Hello ${name}`;

interface Props {
    title: string;
    subTitle: number;
    name: string;
}

const HelloWorldApp = ({title, subTitle, name}: Props) => {
  return (
    <>
        <h1> {title} </h1>
        <h2>{subTitle + 1}</h2>
        <code>{JSON.stringify(newMessage)}</code>
        <p>{helloWorld(name)}</p>
    </>
  )
}

export default HelloWorldApp;