// babel polyfill for url-images
import '@babel/polyfill';

// react modules
import React from 'react';
import ReactDOM from 'react-dom';

// styles related modules and files
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

// components
import App from './components/App.jsx';

ReactDOM.render(
    <App />,
    document.getElementById('root')
)