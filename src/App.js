import { Route, Switch } from 'react-router';
import './App.scss';
import Navbar from './components/Navbar';
//Pages
import About from './pages/About';
import Contact from './pages/Contact';
import Exprience from './pages/Exprience';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';


function App() {
  return (
    <div className="App">
      {/*Fixed Sidebar showing Navbar  */}
      <div className="sidebar">
        <Navbar/>
      </div>

      <div className="main-content">
        <div className="content">
          {/*Creating routes for navbar*/}
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>

            <Route path="/about" exact>
              <About/>
            </Route>

            <Route path="/skills" exact>
              <Skills/>
            </Route>

            <Route path="/exprience" exact>
              <Exprience/>
            </Route>

            <Route path="/projects" exact>
              <Projects/>
            </Route>

            <Route path="/contact" exact>
              <Contact/>
            </Route>

          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
