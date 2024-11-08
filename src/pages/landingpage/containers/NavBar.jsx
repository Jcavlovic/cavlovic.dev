import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import coolNameGIF from "../../../static/images/cavlovic.gif";
import { socialMediaLinks } from "../../../static/links/links";

const NavigationBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="./" />
      <a href="./">
        <img src={coolNameGIF} alt="Cool Name GIF" className="cool-name-gif" />
      </a>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <SocialMediaLinks />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="./">Home</Nav.Link>
          <NavDropdown
            title="Projects"
            id="projects-dropdown"
            show={showDropdown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavDropdown.Item className="dropdown-item-inprogress">
              In-Progress
            </NavDropdown.Item>
            <NavDropdown.Item href="./projects">cavlovic.dev</NavDropdown.Item>
            <NavDropdown.Item href="./projects">RAPTORv3</NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item-finished">
              Finished
            </NavDropdown.Item>
            <NavDropdown.Item>None</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="./aboutme">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const SocialMediaLinks = () => {
  return (
    <div className="social-media-links">
      {socialMediaLinks.map((socialLink, index) => (
        <a href={socialLink.page} key={index}>
          <img src={socialLink.src} alt={socialLink.alt} />
        </a>
      ))}
    </div>
  );
};

export default NavigationBar;
