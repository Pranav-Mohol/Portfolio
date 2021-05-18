import './App.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Navbar/>
      </div>

      <div className="main-content">
        <div className="content">
          <Home/>
        </div>
      </div>
    </div>
  );
}

export default App;
