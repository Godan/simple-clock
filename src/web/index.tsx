import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './components/clock'
import './index.css';

const App = (): JSX.Element => {

  return (
    <div className="main">
        <div className="header"></div>
      <div className="content">
        <h1><Clock /></h1>
      </div>
      <div className="footer"></div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
