import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App(props) {
  const [alert, setAlert] = useState("this is sample error");

  return (
    <Router>
      <Navbar className='my-0' alert={setAlert} title="Home" page="TextForm" />
      <div className='container my-3'>
        <Routes>
          <Route path="/alert" element={<Alert alert={alert} />} />
          <Route path="/textform" element={<TextForm heading='Enter text to analyze' />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading='Enter text to analyze' />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
