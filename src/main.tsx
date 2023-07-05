import React from 'react';
import ReactDOM  from 'react-dom/client';
import { CounterApp } from './CounterApp';
import "./styles.css";
import HelloWorldApp from './HelloWorldApp';

const element = document.getElementById('root');

if (element) {
    ReactDOM.createRoot(element).render(
        <React.StrictMode>
            <HelloWorldApp title='Title' subTitle={1} name='Emmanuel'/>
            <CounterApp value={100}/>
        </React.StrictMode>
    )
}
