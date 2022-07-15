import './App.css';
import Background from './Background';
import Intro from './Intro';
import Monitor from './Monitor';
import About from "./About"
import Sidebar from './Sidebar';
import "./Responsive.css"


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Intro />
      {/* <Monitor /> */}
      <About />
      {/* <Background /> */}
    </div>
  );
}

export default App;
