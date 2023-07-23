import React from 'react';
import './App.css';
import Gallery from './Gallery';
function App() {
  return (
    <>
    <div className="App">
     <h1 style={{textAlign:'center'}}>Image Gallery</h1>
     <h2 style={{textAlign: 'center'}}>Photographed and Code By AKRAM BOUTZOUGA</h2>
    </div>
    <div>
      <Gallery />
    </div>
    </>
  );
}

export default App;
