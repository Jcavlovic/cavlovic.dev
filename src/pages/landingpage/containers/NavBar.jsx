import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import coolnamelocation from "../../../static/images/cavlovic.gif";
import { socialmedia } from "../../../static/links/links.jsx";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="./"></Navbar.Brand>
      <a href="./">
        <img src={coolnamelocation} alt="CoolNameGIF" className="coolnamegif" />
      </a>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
            <NavDropdown.Item href="./projects">R.A.P.T.O.R.</NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item-finished">
              Finished
            </NavDropdown.Item>
            <NavDropdown.Item>None</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="./aboutme">About</Nav.Link>
          <SocialMediaIcons />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const SocialMediaIcons = () => {
  return (
    <div className="socialmediaicons">
      {socialmedia.map((social, index) => (
        <a href={social.page} key={index}>
          <img src={social.src} alt={social.alt} />
        </a>
      ))}
    </div>
  );
};

export default NavBar;
