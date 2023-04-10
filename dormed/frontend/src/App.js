import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Hero from "./components/Hero";
import LanguageChanger from "./components/LanguageChanger";
import ColorThemeSwitcher from "./components/ThemeSwitcher";
import Regulamin from "./Regulamin";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import Program from "./Programs";
import Prices from "./Prices";
import Booking from "./Booking";
import News from "./News";
import Packages from "./Packages";

function App() {
  const { t } = useTranslation();

  return (
    <>
        <Hero />
        <Navbar collapseOnSelect expand="md" sticky="top">
          <Navbar.Toggle
            aria-controls="navbarScroll"
            data-bs-target="navbarScroll"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav>
              <Nav.Link as={Link} to="/" className="pulse">
                <FontAwesomeIcon icon={faHome} />
              </Nav.Link>
              <Nav.Link as={Link} to="/programs" className="pulse">
                {t("ZABIEGI")}
              </Nav.Link>
              <Nav.Link as={Link} to="/packages" className="pulse">
                {t("PAKIETY")}
              </Nav.Link>
              <Nav.Link as={Link} to="/prices" className="pulse">
                {t("CENY")}
              </Nav.Link>
              <Nav.Link as={Link} to="/booking" className="pulse">
                {t("REZERWACJA")}
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="pulse">
                {t("INFORMACJE")}
              </Nav.Link>
              <Nav.Link as={Link} to="/contacts" className="pulse">
                {t("KONTAKTY")}
              </Nav.Link>
              <Nav.Link as={Link} to="/news" className="pulse">
                {t("NEWS")}
              </Nav.Link>
              <LanguageChanger />
              <ColorThemeSwitcher />
              <Regulamin />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Program />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  );
}

export default App;
