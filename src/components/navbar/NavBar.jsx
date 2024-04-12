import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link> */}
          <Nav.Link href="/">Games List</Nav.Link>
          <Nav.Link href="/slotmachine">Slot Machine</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
