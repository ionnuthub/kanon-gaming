import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Navbar.Brand as={Link} to="/">
        Games List
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* <Nav.Link as={Link} to="/">Games List</Nav.Link> */}
          <Nav.Link as={Link} to="/slot-machine">
            Slot Machine
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
