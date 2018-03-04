import React from 'react';
import ReactDOM from 'react-dom';

import GameDevice from './components/05-pages/GameDevice';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(<GameDevice />, document.getElementById('root'));
registerServiceWorker();
