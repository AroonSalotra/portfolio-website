import './App.css';
import "./index.css";
import { useState } from 'react';
import { send } from 'emailjs-com';
import Debug from './Debug';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Navbar from './Navbar';
import Contact from './Contact';

import Intro from './Intro';
function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Work />
      <Contact />
      {/* <Debug /> */}
    </div>

  );
}

export default App;
