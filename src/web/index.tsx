import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './components/clock'

const App = (): JSX.Element => {

  return (
    <div>
      <h1><Clock /></h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
