import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbarr() {
  return (
    <Navbar style={{ fontSize: "1.3rem" }} bg="light" expand="lg">
      <Container className="pl">
        <Link style={{ textDecoration: "none" }} to="/">
          Home
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Link className="pl pr" style={{ textDecoration: "none" }} to="/about">
            About US
          </Link>
          <Link style={{ textDecoration: "none" }} to="/contact">
            Contact US
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
