import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from "./components/Navbar"
import TextForm from './components/TextForm';


function App(props) {
  const [alert, setAlert] = useState("this is sample error");
 

  return (
    <>

      <Navbar className='my-0' alert={setAlert} title="blog" page="Text-Home" />
      <Alert alert={alert} />
      <div className='container my-3'>

        <TextForm heading='Enter text to analyze' />

      </div>
      <About />
    </>


  );
}


export default App;
