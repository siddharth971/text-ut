

import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar"
import TextForm from './components/TextForm';



function App(props) {
  const [mode, setMode] = useState("dark");
  const setToggle = () => {
    if (mode === "dark") {
      setMode("white");
    }
    else {
      setMode("dark");
    }
  }
  return (
    <>

      <Navbar className='my-0' title="blog" page="Text-Home" mode={mode} toggle={setToggle} />


      <div className='container my-3'>

        <TextForm heading='Enter text to analyze' />

      </div>
      <About />


    </>
  );
}


export default App;
