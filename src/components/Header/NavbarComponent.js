import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assests/logo.png";
// import user from '../../assests/user.png'

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar shadow">
      <Container fluid>
        <Navbar.Brand href="#">
          <Link to="/">
            <img src={logo} alt="logo" className="logo-navbar" />
          </Link>
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
            <Link to="/">
              <Nav.Link href="/">For Teacher</Nav.Link>
            </Link>
            <div className="garis"></div>
            <Link to="/login">
              <Nav.Link href="/login">Login</Nav.Link>
            </Link>
            <Link to="/register">
              <Nav.Link className="nav-btn-signup" href="/register">
                Sign Up
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
