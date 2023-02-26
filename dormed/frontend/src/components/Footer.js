import "../../static/css/custom.css" 
import React from "react";
import dormedLogo from '../../static/images/dormed-logo.png'
import { Instagram, Twitter, Facebook } from "react-bootstrap-icons";


function Footer() {
    return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center bg-success py-3">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <img src={dormedLogo} height={48}></img>
      </a>
      <span className="mb-3 mb-md-0 text-white fs-4">© 2022 Dormed</span>
    </div>

    <ul className="nav col-md-4 justify-content-end pe-5 list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" href="#"><Instagram color="white" size={24} /></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><Twitter color="white" size={24} /></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><Facebook color="white" size={24} /></a></li>
    </ul>
  </footer>
    
  </div>
      );
    }

export default Footer;
