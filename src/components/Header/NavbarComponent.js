import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assests/logo.png";
import { getSearchCourse } from "../../redux/actions/Courses/getSearchCourseAction";
// import user from '../../assests/user.png'

const NavbarComponent = () => {
  const { courseList } = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState("");

  const submitSearchText = (e) => {
    e.preventDefault();
    if (searchText !== "") {
      dispatch(getSearchCourse(searchText));
      navigate('/search')
    }
    
  };

  // Category
  const uniqCategory = [];
  courseList.filter((course) => {
    if (!uniqCategory.includes(course.category.name)) {
      uniqCategory.push(course.category.name);
    }
  });
  return (
    <Navbar bg="light" expand="lg" className="navbar shadow">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" className="logo-navbar" />
        </Navbar.Brand>

        <form className="input-group wrapper-search" onSubmit={submitSearchText}>
          <input className="form-control border-end-0 border" type="search" value={searchText} placeholder="Search course or lecturer" onChange={(evt) => setSearchText(evt.target.value)} />
          <span className="input-group-append">
            <button className="btn btn-searching border-start-0 border ms-n5" type="button">
              <i className="fa fa-search" onClick={submitSearchText}></i>
            </button>
          </span>
        </form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar-right">
            <NavDropdown title="Category" id="basic-nav-dropdown">
              {uniqCategory.map((category, index) => (
                <NavDropdown.Item href={"/categories/" + category} key={index}>{category}</NavDropdown.Item>
                // <Link to={"/categories/" + category} key={index}>
                //   <p>{category}</p>
                // </Link>
              ))}
             
            </NavDropdown>
            <Nav.Link href="/">For Teacher</Nav.Link>
            <div className="garis"></div>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link className="nav-btn-signup" href="/register">
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
