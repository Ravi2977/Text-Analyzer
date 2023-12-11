import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import AboutUs from './components/AboutUs';
import React, { useState } from 'react'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type

    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const [mode, setMode] = useState('light')//check that dark mode enable or not
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Dark mode is Disabled", 'success')
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = "rgb(39, 41, 40)"
      showAlert("Dark mode is Enabled", 'success')
    }
  }
  return (
    <>
      <Navbar title="Text-Changer" about="About Text-Changer" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />

      <TextForm heading="Enter your Text to Analyse" mode={mode} showAlert={showAlert} />
      <AboutUs mode={mode} />
    </>
  );
}

export default App;
