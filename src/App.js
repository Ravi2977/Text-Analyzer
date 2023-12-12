import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import AboutUs from './components/AboutUs';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Dark mode is Disabled', 'success');
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(39, 41, 40)';
      showAlert('Dark mode is Enabled', 'success');
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Text-Analyzer" about="About Text-Changer" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<AboutUs mode={mode} />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter your Text to Analyze" mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
          </div>
      </Router>
      
    </>
  );
}

export default App;
