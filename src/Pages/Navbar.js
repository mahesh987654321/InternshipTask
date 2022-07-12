import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Navbarr() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to="/">Home</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Link to="/about">About US</Link>
          <Link to="/contact">Contact US</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
