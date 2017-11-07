import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import PomodoroTimer from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PomodoroTimer workingTime={25} restingTime={5} />, document.getElementById('root'));
registerServiceWorker();
