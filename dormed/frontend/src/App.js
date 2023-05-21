import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { Container } from "reactstrap";
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
  const [expanded, setExpanded] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const location = useLocation();
  
  const handleSelect = () => {
    setExpanded(false);
  };

  const handleThemeChange = () => {
    setExpanded(false);
  };

  const handleLanguageChange = () => {
    setExpanded(false);
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const handleClickUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Container fluid>
        <Hero />
        <Navbar collapseOnSelect expand="md" sticky="top" expanded={expanded}>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            data-bs-target="navbarScroll"
            onClick={() => setExpanded((prevState) => !prevState)}
            autoclose = "outside"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="flex-wrap justify-content-center"
              onSelect={handleSelect}
            >
              <Nav.Link
                as={Link}
                to="/"
                className={`pulse ${
                  location.pathname === "/" ? "menuSelected" : ""
                }`}
                onClick={handleSelect}
              >
                <FontAwesomeIcon icon={faHome} />
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/packages"
                className={`pulse ${
                  location.pathname === "/packages" ? "menuSelected" : ""
                }`}
                onClick={handleSelect}
              >
                {t("PAKIETY")}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/programs"
                className={`pulse ${
                  location.pathname === "/programs" ? "menuSelected" : ""
                }`}
                onClick={handleSelect}
              >
                {t("ZABIEGI")}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/prices"
                className={`pulse ${
                  location.pathname === "/prices" ? "menuSelected" : ""
                }`}
                onClick={handleSelect}
              >
                {t("CENY")}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/booking"
                className={`pulse ${
                  location.pathname === "/booking" ? "menuSelected" : ""
                }`}
                onClick={handleSelect}
              >
                {t("REZERWACJA")}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className={`pulse ${
                  location.pathname === "/about" ? "menuSelected" : ""
                }`}
                onClick={handleSelect}
              >
                {t("INFORMACJE")}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contacts"
                className={`pulse ${
                  location.pathname === "/contacts" ? "menuSelected" : ""
                }`}
                onClick={handleSelect}
              >
                {t("KONTAKTY")}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/news"
                className={`pulse ${
                  location.pathname === "/news" ? "menuSelected" : ""
                }`}
                onClick={handleSelect}
              >
                {t("NEWS")}
              </Nav.Link>
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                <Nav.Item>
                  <LanguageChanger onChange = {handleLanguageChange}/>
                </Nav.Item>
                <Nav.Item>
                  <ColorThemeSwitcher onChange = {handleThemeChange}/>
                </Nav.Item>
                <Regulamin />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/programs" element={<Program />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <button
          className="scrollTop text-center"
          onClick={handleClickUp}
          style={{ display: showScroll ? "flex" : "none" }}
        >
          <FontAwesomeIcon icon={faArrowCircleUp} />
        </button>
      </Container>
    </>
  );
}

export default App;
