import logo from './logo.svg';
import './App.css';
// In main.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom';
import Home from './components/Home';
import Home1 from './components/Home1';
import About from './components/About';
function App() {
  return (
    <div className="App">
      <Home/> 
     {/* <Home1/> */}
     {/* <About/> */}
    </div>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     {/* more routes */}
    //   </Routes>
    // </Router>
  );
}

export default App;
