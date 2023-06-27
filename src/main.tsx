import React from 'react';
import ReactDOM  from 'react-dom/client';
import HelloWorldApp from './HelloWorldApp';
import "./styles.css";

const element = document.getElementById('root');

if (element) {
    ReactDOM.createRoot(element).render(
        <React.StrictMode>
            <HelloWorldApp />
        </React.StrictMode>
    )
}
