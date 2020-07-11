import React from 'react';
import ReactDOM from 'react-dom';
import DashApp from './dashApp';
import './style.css';

ReactDOM.render(
  <DashApp />,
  document.getElementById('app')
);

module.hot.accept();
