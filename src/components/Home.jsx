import About from "./About"
import Contact from "./Contact"
import Home1 from "./Home1"
import Project from "./Project"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      
 <div>
       <nav    class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">U S </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="d-flex" id="navbarNavAltMarkup">
      <div class="navbar-nav">
         {/* <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">About</a>
         <a class="nav-link" href="#">Project</a>
        
        <a class="nav-link" href="#">Contact</a>  */}
        <Link to="/home" className="nav-link active" aria-current="page">Home</Link> 
       
        <Link to="/about" className="nav-link" >About</Link>
        <Link to="/project" className="nav-link" >Project</Link>
        <Link to="/contact" className="nav-link" >Contact</Link>
       
         
      </div>
    </div>
  </div>
</nav>
    </div>
      
    </div>
  )
}

export default Home
