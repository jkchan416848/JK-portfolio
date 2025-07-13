import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Styles/navbar.css";
import Profile from "../assets/profile2.png";
import { Link, useLocation } from "react-router-dom";

function NavBarContainer() {
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [LogoColor, setLogoColor] = useState("var(--primary-color1)");
  const [showTip, setShowTip] = useState(false); // ✅ For the one-time tip
  const [isClosing, setIsClosing] = useState(false);

  const location = useLocation();
  const navbarRef = useRef(null);
  const alertTimer = useRef(null);

  // Custom Alert Notification Component
  const CustomAlert = ({ message, onClose }) => (
    <div className={`custom-alert ${isClosing ? "fade-out" : "drop-in"}`}>
      <div className="alert-content">
        <span>{message}</span>
        <button className="alert-close" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="progress-bar" />
    </div>
  );

  const handleLogoClick = () => {
    const newCount = (clickCount + 1) % 4;
    setClickCount(newCount);

    let newprimaryColor1 = "";
    switch (newCount) {
      case 1:
        newprimaryColor1 = "#168aad";
        break;
      case 2:
        newprimaryColor1 = "#BB86FC";
        break;
      case 3:
        newprimaryColor1 = "#74c69d";
        break;
      default:
        newprimaryColor1 = "#58fcfa";
        break;
    }
    document.documentElement.style.setProperty(
      "--primary-color1",
      newprimaryColor1
    );
    setLogoColor(newprimaryColor1);
  };

  // Show tip only once on first visit to "/"
  useEffect(() => {
    if (location.pathname === "/") {
      const hasSeenTip = sessionStorage.getItem("hasSeenTip");
      if (!hasSeenTip) {
        setShowTip(true);
        sessionStorage.setItem("hasSeenTip", "true");
        // Start closing after 5 seconds
        alertTimer.current = setTimeout(() => {
          handleCloseAlert();
        }, 5000);
      }
    }

    return () => {
      if (alertTimer.current) {
        clearTimeout(alertTimer.current);
      }
    };
  }, [location]);

  const handleCloseAlert = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowTip(false);
      setIsClosing(false);
    }, 700); // Matches animation duration
  };

  useEffect(() => {
    const path = location.pathname;
    const currentLink = navLinks.find((link) => link.url === path)?.text || "";
    setActiveLink(currentLink);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (
        expanded &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [location, expanded]);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    setExpanded(false);
  };

  const navLinks = [
    { text: "Home", url: "/" },
    { text: "Skills", url: "/skills" },
    { text: "Projects", url: "/project" },
    { text: "About", url: "/about" },
    { text: "Contact", url: "/contact" },
  ];

  return (
    <>
      {/* ✅ Tip Alert */}
      {/* Custom Alert Notification */}
      {showTip && (
        <CustomAlert
          message="! Click the navbar image to change the theme color"
          onClose={handleCloseAlert}
        />
      )}

      {/* ✅ Navbar */}
      <div
        ref={navbarRef}
        className={`main-navbar-container position-sticky top-0 ${
          scrolled ? "scrolled" : ""
        }`}>
        <Navbar
          expanded={expanded}
          onToggle={(isExpanded) => setExpanded(isExpanded)}
          expand="md"
          variant="dark">
          <Container>
            <Navbar.Brand className="d-flex align-items-center">
              <img
                title="Click me"
                onClick={handleLogoClick}
                alt="Jk"
                src={Profile}
                width="60"
                height="45"
                className="d-inline-block align-top brand-logo"
                style={{ cursor: "pointer" }}
              />
              <span className="brand-span ms-2">
                <span style={{ color: LogoColor }}>Jk </span> Portfolio
              </span>
            </Navbar.Brand>
            <Navbar.Toggle
              className="custom-toggler"
              aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto fw-bolder">
                {navLinks.map(({ text, url }) => (
                  <Nav.Link
                    key={text}
                    as={Link}
                    to={url}
                    className={`nav-link-item ${
                      activeLink === text ? "active" : ""
                    }`}
                    onClick={() => handleNavLinkClick(text)}>
                    {text}
                    <span className="nav-link-hover"></span>
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavBarContainer;
