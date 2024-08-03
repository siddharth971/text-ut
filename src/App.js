

import './App.css';
import Navbar from "./components/Navbar"
import TextForm from './components/TextForm';



function App(props) {
  return (
    <>
      <Navbar className='my-0' title={22} page={1} />
      <div className='container'>

        <div className='container my-3'>

          <TextForm heading='Enter text to analyze' />
          <button className="btn btn-primary"> to UpperCase</button>
        </div>
      </div>

    </>
  );
}


export default App;
