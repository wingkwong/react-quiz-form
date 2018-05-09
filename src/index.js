import React from 'react';
import ReactDOM from 'react-dom';
import QuizForm from './QuizForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<QuizForm />, document.getElementById('root'));
registerServiceWorker();
