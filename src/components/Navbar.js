import Logo from '../img/logo.jpg'
import logo from "../img/logoA.gif"

function Nav() {
  return (
  <>

<nav class="menu-container">



  <a href="#" className="menu-logo">
    <img src={logo} alt="Digivolution" id='logo'/>
  </a>

  <div className="menu">
    <ul>
      <li>
        <a href="#about">
          About
        </a>
      </li>
      <li>
        <a href="#services">
          Services
        </a>
      </li>
      <li>
        <a href="#clients">
          Clients
        </a>
      </li>
      <li>
        <a href="#work">
          Work
        </a>
      </li>
      <li>
        <a href="#prices">
          Prices
        </a>
      </li>
      <li>
        <a href="#contact">
          Contact Us
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <button className='css-button-arrow--sky'>
        <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
         Download profile
        </a></button>
      </li>
    </ul>
  </div>
</nav>
     <div className="bg">
                    <div className="bg-img">
                        <h1 className="bg-text"> 
                         Making Content   <br></br>Creation  Easier
                          </h1>
                    </div>

      
                 </div>
  
                 </>
)};

export default Nav     


