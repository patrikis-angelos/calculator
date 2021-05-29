import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import Nav from './components/Nav';
import Routes from './components/Routes';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root'),
);
