import React from "react";
import Home from "./Home";
import Hero from "./components/Hero";
import ColorThemeSwitcher from "./components/ThemeSwitcher";
import DropdownLanguages from "./components/DropdownLanguages";
import About from "./About";
import Contacts from "./Contacts";
import Program from "./Programs";
import Prices from "./Prices";
import Booking from "./Booking";
import News from "./News";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Regulamin from "./Regulamin";
import { Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";



function App() {
  return (
    <div>
      <Hero />
      <Navbar
        collapseOnSelect
        expand="sm"
        sticky="top"
      >
        <Container>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            data-bs-target="navbarScroll"
          />
          <Navbar.Collapse id="navbarScroll">
            <Navbar.Brand href="/" className="pulse">
              <FontAwesomeIcon icon={faHome} />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/programs" className="pulse">ZABIEGI</Nav.Link>
              {/* TODO */}
              <Nav.Link href="/programs" className="pulse">REHABILITACIA</Nav.Link>
              <Nav.Link href="/programs" className="pulse">PAKIETY</Nav.Link> 
              <Nav.Link href="/prices" className="pulse">CENY</Nav.Link>
              <Nav.Link href="/booking" className="pulse">REZERWACIJA</Nav.Link>
              <Nav.Link href="/about" className="pulse">INFORMACJE</Nav.Link>
              <Nav.Link href="/contacts" className="pulse">KONTAKT</Nav.Link>
              <Nav.Link href="/news" className="pulse">AKTUALNOŚCI</Nav.Link>

             
            </Nav>
            <DropdownLanguages/>
            <ColorThemeSwitcher />
            <Regulamin />
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
        <Route path="/contacts" element={<News />}></Route>
      </Routes>
    </div>
  );
}

export default App;
