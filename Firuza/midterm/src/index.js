import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Item from './Item';
import ItemList from './ItemList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Item />, document.getElementById('root'));
registerServiceWorker();
