import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../assests/logo.png";
// import user from '../../assests/user.png'

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar shadow">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" className="logo-navbar" />
        </Navbar.Brand>

          <form className="input-group wrapper-search">
            <input className="form-control border-end-0 border" type="search" placeholder="Search course or lecturer" style={{ width: "10px" }} />
            <span className="input-group-append">
              <button className="btn btn-searching border-start-0 border ms-n5" type="button">
                <i className="fa fa-search"></i>
              </button>
            </span>
          </form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto navbar-right">
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Business</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Technology</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Graphic Design</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">For Teacher</Nav.Link>
            <div className="garis"></div>
            <Nav.Link href="#link">Login</Nav.Link>
            <Nav.Link className="nav-btn-signup" href="#link">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
