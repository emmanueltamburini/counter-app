import React from 'react';
import ReactDOM  from 'react-dom/client';

const App = () => {
  return (
    <h1>Hello world</h1>
  )
}

const element = document.getElementById('root');

if (element) {
    ReactDOM.createRoot(element).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}

export default App