

import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar"
import TextForm from './components/TextForm';



function App(props) {
  return (
    <>
     
        <Navbar className='my-0' title="blog" page="Text-Home" />
        <div className='container'>

          <div className='container my-3'>

            <TextForm heading='Enter text to analyze' />

          </div>
          <About />
        </div>
     
    </>
  );
}


export default App;
