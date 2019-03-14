import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import menu from'./burguerQueen.json'

ReactDOM.render(<App menu={menu}/>, document.getElementById('root'));

serviceWorker.unregister();
