/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';
import { Navbar } from './components/Navbar';
import PropType from 'prop-types';

function App() {
  return (
    <>
    <Navbar  title="Hello" page="gallery"></Navbar>
    </>
  );
}

Navbar.prototype = {
  title: PropType.string.isRequired,
  page: PropType.number.isRequired
}

export default App;
