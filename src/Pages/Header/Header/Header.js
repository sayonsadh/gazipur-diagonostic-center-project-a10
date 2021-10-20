import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">Gazipur diagonostic center</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/doctors">
              Doctors
            </Nav.Link>
            <Nav.Link as={HashLink} to="/branches">
              Branch
            </Nav.Link>

            {user?.email ? (
              <Button onClick={logOut} className="me-2" variant="danger">
                LogOut
              </Button>
            ) : (
              <div className="d-flex">
                <Nav.Link as={HashLink} to="/login">
                  Login
                </Nav.Link>{" "}
                <Nav.Link as={HashLink} to="/signin">
                  Sign up
                </Nav.Link>
              </div>
            )}

            <Navbar.Text>
              Signed in as:{" "}
              <a href="#login">{user?.displayName || user?.email}</a>
            </Navbar.Text>
          </Navbar.Collapse>
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
