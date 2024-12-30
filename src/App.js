import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import React from "react";
// Uncomment the following lines to enable routing
// import {
//   BrowserRouter as Router,
//   Routes, 
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setText('Disable Dark Mode');
      document.body.style.backgroundColor = 'black';
      showAlert(": Dark mode has been enabled", "success");
    } else {
      setMode('light');
      setText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert(": Dark mode has been disabled", "success");
    }
  };

  return (
    <>
      {/* Enable the <Router> wrapper below for routing */}
      {/* <Router> */}
      <Navbar title={"Textutils"} about="About Us" mode={mode} toggleMode={toggleMode} text={text} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* Use <Routes> and <Route> below for routing */}
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* <Route exact path="/" element={<TextForm showAlert={showAlert} info={"Write Your Text Here"} mode={mode} />} /> */}
        {/* </Routes> */}
        {/* Default content when routing is disabled */}
        <TextForm showAlert={showAlert} info={"Write Your Text Here"} mode={mode} />
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
