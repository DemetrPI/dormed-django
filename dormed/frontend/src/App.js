import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Hero from "./components/Hero";
import LanguageChanger from "./components/LanguageChanger";
import ColorThemeSwitcher from "./components/ThemeSwitcher";
import Regulamin from "./Regulamin";
import { Container } from "reactstrap";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import Program from "./Programs";
import Prices from "./Prices";
import Booking from "./Booking";
import News from "./News";
import Packages from "./Packages";
import { useState } from "react";

function App() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const handleSelect = () => {
    setExpanded(false);
  };

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <>
      <Container fluid>
        <Hero />
        <Navbar
          collapseOnSelect
          expand="md"
          sticky="top"
          expanded={expanded}
        >
          <Navbar.Toggle
            aria-controls="navbarScroll"
            data-bs-target="navbarScroll"
            onClick={() => setExpanded((prevState) => !prevState)}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="flex-wrap justify-content-center"
              onSelect={handleSelect}
            >
              <Nav.Link as={Link} to="/" className="pulse" onClick={handleLinkClick}>
                <FontAwesomeIcon icon={faHome} />
              </Nav.Link>
              <Nav.Link as={Link} to="/programs" className="pulse" onClick={handleLinkClick}>
                {t("ZABIEGI")}
              </Nav.Link>
              <Nav.Link as={Link} to="/packages" className="pulse" onClick={handleLinkClick}>
                {t("PAKIETY")}
              </Nav.Link>
              <Nav.Link as={Link} to="/prices" className="pulse" onClick={handleLinkClick}>
                {t("CENY")}
              </Nav.Link>
              <Nav.Link as={Link} to="/booking" className="pulse" onClick={handleLinkClick}>
                {t("REZERWACJA")}
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="pulse" onClick={handleLinkClick}>
                {t("INFORMACJE")}
              </Nav.Link>
              <Nav.Link as={Link} to="/contacts" className="pulse" onClick={handleLinkClick}>
                {t("KONTAKTY")}
              </Nav.Link>
              <Nav.Link as={Link} to="/news" className="pulse" onClick={handleLinkClick}>
                {t("NEWS")}
              </Nav.Link>
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                <LanguageChanger />
                <ColorThemeSwitcher />
                <Regulamin />
              </div>
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
      </Container>
    </>
  );
}

export default App;

