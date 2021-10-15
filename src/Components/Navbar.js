import React from 'react';
import { NavLink } from "react-router-dom";
import "./Home";
import "./Pokemon"
import "././Comparison/ComPokemon";
import "./navbar.css"

function Navbar() {
    const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
    
     <div className={click ? "main-container" : ""} onClick={()=>Close()} />
      <nav className="navbar" onClick={(e)=>e.stopPropagation()}>
        <div className="nav-container">
         

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to={"/"}                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to={"/comp"}        
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Comparator
              </NavLink>
            </li>
         
          
          
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
}


export default Navbar;