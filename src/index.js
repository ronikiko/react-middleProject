import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppStateContext from './context/app/AppStateContext'

ReactDOM.render(
  <AppStateContext>
    <App />
  </AppStateContext>,
  document.getElementById('root')
);

