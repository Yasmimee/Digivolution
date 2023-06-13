
import './App.css'; 
import './App.css';
import Nav from './components/Navbar.js'
import About from './components/About.js';
import AnimatedNumbers from './components/numbers'
import Services from './components/Services'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Admin from './components/Admin';
import Work from './components/Work'
import {  Route, BrowserRouter as Router , Routes} from 'react-router-dom'
import Prices from './components/prices';
import Login from './components/login';
import Add from './components/add';

    function App() {
      return (
        <>
      
        <Routes>
        <Route  exact path="/admin"  element={<Login/>}/>
        <Route   path="/"  element={<HomePage />}/> 
          </Routes>
    
         
        </>
      );
    }
    function HomePage() {
      return (
        <>
          <Nav />
          <AnimatedNumbers />
          <About />
          <Services />
          <Clients />
          <Contact />
          <Work />
          <Prices />
          <Add/>
        </>
      );
    }

export default App;
