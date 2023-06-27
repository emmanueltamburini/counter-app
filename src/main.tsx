import React from 'react';
import ReactDOM  from 'react-dom/client';
import { CounterApp } from './CounterApp';
import "./styles.css";

const element = document.getElementById('root');

if (element) {
    ReactDOM.createRoot(element).render(
        <React.StrictMode>
            <CounterApp value={5}/>
        </React.StrictMode>
    )
}
