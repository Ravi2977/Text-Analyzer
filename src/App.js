import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import AboutUs from './components/AboutUs';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light')//check that dark mode enable or not
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = "white"
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = "rgb(39, 41, 40)"

    }
  }
  return (
    <>
      <Navbar title="Text-Changer" about="About Text-Changer" mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Enter your Text to Analyse" mode={mode} />
      <AboutUs mode={mode}/>
    </>
  );
}

export default App;
