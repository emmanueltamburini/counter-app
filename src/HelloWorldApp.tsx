const newMessage = {
    message: "Hello World",
    title: "Fernando"
};

const helloWorld = () => "Hello world";

const HelloWorldApp = () => {
  return (
    <>
        <h1>{helloWorld()}</h1>
        <code>{JSON.stringify(newMessage)}</code>
        <p>I am a subtitle</p>
    </>
  )
}

export default HelloWorldApp;