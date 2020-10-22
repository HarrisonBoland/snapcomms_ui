import React, { useState } from 'react';

import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Body from './Body';

function App() {
  const [ next, setNext] = useState(false)

  let buttonStyle
  let buttonChildren = 'NEXT'
  if (next) {
    buttonStyle = {
      backgroundColor: '#f37223'
    }
    buttonChildren = 'BACK'
  } else {
    buttonStyle = {
      backgroundColor: 'green'
    }
    buttonChildren = 'NEXT'
  }

  return (
    <div className="App">
      <div className="app__header">
        <Header />
      </div>
      
      <div className="app__body">
        <Sidebar next={next} />
        <Body next={next} />
        <button className='button app-button' onClick={() => setNext(!next)} style={buttonStyle}>{buttonChildren}</button>
      </div>

      {/* Popup */}
    </div>
  );
}

export default App;
