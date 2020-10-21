import React from 'react';

import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Body from './Body';

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <Header />
      </div>
      
      <div className="app__body">
        <Sidebar />
        <Body />
      </div>

      {/* Popup */}
    </div>
  );
}

export default App;
