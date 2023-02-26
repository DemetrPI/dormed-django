import React from "react";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import Program from "./Programs";
import Prices from "./Prices";
import Booking from "./Booking";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Regulamin from "./Regulamin";
import { Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHome} from '@fortawesome/free-solid-svg-icons'



function App() {
  return (
 
    <div>
  
      <Navbar collapseOnSelect expand = "sm" bg="success" variant="dark" sticky="top">
        <Container>
        <Navbar.Toggle aria-controls="navbarScroll" data-bs-target = "navbarScroll"/>
            <Navbar.Collapse id = "navbarScroll">
          <Navbar.Brand href="/"><FontAwesomeIcon icon={faHome} /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/programs">Programs</Nav.Link>
            <Nav.Link href="/prices">Prices</Nav.Link>
            <Nav.Link href="/booking">Booking</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contacts">Contacts</Nav.Link>
          </Nav>
            <Regulamin/>
            </Navbar.Collapse>
        </Container>
      </Navbar>   
        <Routes> 
         <Route path="/" element={<Home />}></Route>
         <Route path="/programs" element={<Program />}></Route>
         <Route path="/prices" element={<Prices />}></Route>
         <Route path="/booking" element={<Booking />}></Route>
         <Route path="/about" element={<About />}></Route>
         <Route path="/contacts" element={<Contacts />}></Route>
       </Routes> 
    </div>
 
  );
}

export default App;
