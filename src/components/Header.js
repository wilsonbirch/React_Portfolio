import React from "react";

function Header(props) {
  return (
    
    <nav className="navbar navbar-expand-sm " role="navigation">
  
      <a className="navbar-brand" href="#">Wilson Birch</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent" role="navigation">
        <ul className="navbar-nav ml-auto">
  
          
          <li className="nav-item active">
            <a className="nav-link" href="index.html">About <span className="sr-only">(current)</span></a>
          </li>
  
          <li className="nav-item">
            <a className="nav-link" href="portfolio.html">Portfolio</a>
          </li>
          
          <li className="nav-item">
              <a className="nav-link" href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
