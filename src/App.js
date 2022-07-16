import './App.css';
import Background from './Background';
import Intro from './Intro';
import Monitor from './Monitor';
import About from "./About"
import Sidebar from './Sidebar';
import "./Responsive.css"
import Work from './Work';


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Intro />
      {/* <Monitor /> */}
      <About />
      {/* <Background /> */}
      <Work />
    </div>
  );
}

export default App;
