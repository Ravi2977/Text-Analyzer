import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
function App() {
  return (
    <>
      <Navbar title = "Text-Changer" about = "About Text-Changer"/>
      <TextForm heading = "Enter your Text to Analyse"/>
    </>
  );
}

export default App;
