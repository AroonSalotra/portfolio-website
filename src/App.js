import './App.css';
import Background from './Background';
import Intro from './Intro';
import Monitor from './Monitor';
import About from "./About"
import Navbar from './Navbar';
import "./Responsive.css"
import Work from './Work';
import ContactForm from './ContactForm';

import { BrowserRouter, Route, Switch } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      {/* <Monitor /> */}
      <About />
      {/* <Background /> */}
      <Work />
      <ContactForm />
    </div>
  );
}

export default App;
