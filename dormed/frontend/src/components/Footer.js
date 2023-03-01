import "../../static/css/custom.css" 
import React from "react";
import dormedLogo from '../../static/images/dormed-logo.png'
import { Instagram, Twitter, Facebook } from "react-bootstrap-icons";


function Footer() {
    return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
    <div>
      <img src={dormedLogo} height={48}></img>
      <span className="mb-3 mb-md-0 fs-4 ms-2">© 2022 Dormed</span>
    </div>

    <ul className="nav col-md-4 justify-content-end pe-5 list-unstyled d-flex">
      <li className="ms-3"><a href="#"><Instagram  size={24} /></a></li>
      <li className="ms-3"><a href="#"><Twitter  size={24} /></a></li>
      <li className="ms-3"><a href="#"><Facebook  size={24} /></a></li>
    </ul>
  </footer>
    
  </div>
      );
    }

export default Footer;
