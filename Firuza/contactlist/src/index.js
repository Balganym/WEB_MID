import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './Contact'
import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(
  <Contact/>, 
  document.getElementById('root')
);


registerServiceWorker();