import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <Navbar>
        <Container>
          <Link to="/">
            <Navbar.Brand
              className={
                location.pathname === "/" ? "btn btn-success" : "btn btn-light"
              }>
              Home
            </Navbar.Brand>
          </Link>
          <Link to="/add">
            <Navbar.Brand
              className={
                location.pathname === "/add"
                  ? "btn btn-success"
                  : "btn btn-light"
              }>
              Add Contact
            </Navbar.Brand>
          </Link>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Login as user: mememe@me</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
