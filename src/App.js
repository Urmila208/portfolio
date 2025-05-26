
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Home1 from './components/Home1';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
   <div>
   <Home/>
   
         <Routes>
    <Route path="/" element={<About />} />
<Route path="/home" element={<About/>} />
<Route path="/about" element={<Home1/>} />
<Route path="/project" element={<Project/>} />
<Route path="/contact" element={<Contact/>} />
      </Routes>
      
     
   </div>
    
  );
}

export default App;
