import './App.css';
import "./index.css";
import Debug from './Debug';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Navbar from './Navbar';

import Intro from './Intro';
function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      {/* <Work /> */}
      {/* <Debug /> */}
    </div>

  );
}

export default App;
