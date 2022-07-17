import './App.css';
import Background from './Background';
import Intro from './Intro';
import Monitor from './Monitor';
import About from "./About"
import Navbar from './Navbar';
import "./Responsive.css"
import Work from './Work';
import ContactForm from './ContactForm';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route exact path='/' element={<><Intro /><About /></>} />
        <Route exact path='/contact' element={<ContactForm />} />
      </Routes>

      {/* <Intro /> */}

      {/* <About /> */}

      {/* <Work /> */}

      {/* <ContactForm /> */}

    </BrowserRouter>
  );
}

export default App;
