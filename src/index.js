import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
var routes = require('./config/routes');

ReactDOM.render(
  routes,
  document.getElementById('app')
);
