import React from "react";

import { Link } from "react-router-dom";

const Nav= () => {

  return(
        <div className="navbar">
        
           <ul className="nav-links">
              <Link to="/">ShoppingCart</Link>
              <Link to="/about">About</Link>
              <Link to="/main">Main</Link>
              <Link to="/Contact">Contact</Link>
             
           </ul>
        </div>
  );

}
export default Nav;