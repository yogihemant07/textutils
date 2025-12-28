import './App.css';
import Alerts from './components/Alerts';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import { Link, Route,Routes, Switch, BrowserRouter as Router } from 'react-router-dom';

function App() {

  const [mode, SetMode] = useState('light');

  const [alert, SetAlert] = useState(null);

  const [color, SetColor] = useState('#563d7c');

  const showAlert = (messgae, type) => {

    SetAlert({
      msg: messgae,
      type: type
    });

    setTimeout(() => {
      SetAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'dark') {
      SetMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enable", "success");
      // document.title = 'Text Utils(Dark)'
    }
    else {
      SetMode('dark');
      document.body.style.backgroundColor = color;
      showAlert("Dark Mode has been enable", "success");
      // document.title = 'Text Utils(Light)'
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtil" aboutText="About us" mode={mode} toggleMode={toggleMode} SetColor={SetColor} />
        <Alerts alert={alert} />
        <div className="container my-3">

          <Routes>
            <Route exact path='/about' element = {<About bgColor = {color}></About>}/>
            <Route exact path='/' element = {<TextForm heading="Enter Text to Analyze" showAlert={showAlert} mode={mode} />}/>
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
