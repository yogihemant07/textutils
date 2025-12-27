import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'


function App() {

  const [mode, SetMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'dark') {
      SetMode('light');
      document.body.style.backgroundColor = 'white';
    }
    else {
      SetMode('dark');
      document.body.style.backgroundColor = '#212529';
    }
  };
  return (
    <>
      <Navbar title="Brand Name" aboutText="About us" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">

        <TextForm heading="Enter Text to Analyze" mode={mode} />
        {/* <About ></About> */}

      </div>
    </>

  );
}

export default App;
