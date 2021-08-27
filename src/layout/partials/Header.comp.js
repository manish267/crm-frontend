import React from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import logo from "./../../assets/img/logo.png";
import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {
  const history = useHistory();

  const logMeOut = () => {
    history.push("/");
  };

  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="md" style={{zIndex:5}}>
      <Navbar.Brand>
        <img src={logo} alt="logo" width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/* <Link to="/dashboard">
                        Dashboard
                    </Link>

                    <Link to="/tickets">
                        Tickets
                    </Link>

                    <Link to="">
                        Logout
                    </Link> */}

          <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/tickets">
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>
          <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
