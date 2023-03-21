import React from "react";
import Home from "./Home";
import Hero from "./components/Hero";
import ColorThemeSwitcher from "./components/ThemeSwitcher";
import LanguageChanger from "./components/LanguageChanger";
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
import { Trans, useTranslation } from "react-i18next";
import Packages from "./Packages";



function App() {

const {t} = useTranslation();
  return (
    <>
      <Hero />
      <Navbar
        collapseOnSelect
        expand="md"
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
            <Nav>
              <Nav.Link href="/programs" className="pulse"><Trans i18nKey = "ZABIEGI">ZABIEGI</Trans></Nav.Link>
              <Nav.Link href="/programs" className="pulse"><Trans i18nKey="REHABILITACIA">REHABILITACIA</Trans></Nav.Link>
              <Nav.Link href="/packages" className="pulse"><Trans i18nKey="PAKIETY">PAKIETY</Trans></Nav.Link> 
              <Nav.Link href="/prices" className="pulse"><Trans i18nKey="CENY">CENY</Trans></Nav.Link>
              <Nav.Link href="/booking" className="pulse"><Trans i18nKey="REZERWACIJA">REZERWACIJA</Trans></Nav.Link>
              <Nav.Link href="/about" className="pulse"><Trans i18nKey = "INFORMACJE">INFORMACJE</Trans></Nav.Link>
              <Nav.Link href="/contacts" className="pulse"><Trans i18nKey = "KONTAKTY">KONTAKTY</Trans></Nav.Link>
              <Nav.Link href="/news" className="pulse"><Trans i18nKey = "AKTUALNOŚCI">AKTUALNOŚCI</Trans></Nav.Link>
            <LanguageChanger/>
            <ColorThemeSwitcher />
            <Regulamin/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/programs" element={<Program />}></Route>
        <Route path="/prices" element={<Prices />}></Route>
        <Route path="/packages" element={<Packages />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/contacts" element={<News />}></Route>
      </Routes>
    </>
  );
}

export default App;
