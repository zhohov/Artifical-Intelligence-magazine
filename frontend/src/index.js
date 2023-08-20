import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './interceptors/axios';
import './static/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

