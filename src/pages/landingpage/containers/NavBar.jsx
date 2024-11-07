import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";

const pages = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  {
    name: "Projects",
    submenu: [
      { name: "Project 1", link: "/project1" },
      { name: "Project 2", link: "/project2" },
    ],
  },
  { name: "Contact", link: "/contact" },
];

const MenuBarNew = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Your Brand</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {pages.map((page, index) =>
            page.submenu ? (
              <Dropdown key={index} as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link}>{page.name}</Dropdown.Toggle>
                <Dropdown.Menu>
                  {page.submenu.map((subpage, subindex) => (
                    <Dropdown.Item key={subindex} href={subpage.link}>
                      {subpage.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Nav.Link key={index} href={page.link}>
                {page.name}
              </Nav.Link>
            )
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MenuBarNew;
