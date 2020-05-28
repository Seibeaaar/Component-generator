import React from 'react';
import Config from './components/Config';
import Preview from './components/Preview';
import './styles/App.scss';

const App = () => {
  return (
    <div className="app__container">
      <Config />
      <Preview />
    </div>
  )
}

export default App;
