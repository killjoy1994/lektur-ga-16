import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assests/logo.png";
import { getSearchCourse } from "../../redux/actions/Courses/getSearchCourseAction";
import user from "../../assests/logOut.png";

const NavbarComponent = () => {
  const { courseList } = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const submitSearchText = (e) => {
    e.preventDefault();
    if (searchText !== "") {
      dispatch(getSearchCourse(searchText));
      navigate("/search");
    }
  };

  // Category
  const uniqCategory = [];
  courseList.filter((course) => {
    if (!uniqCategory.includes(course.category.name)) {
      uniqCategory.push(course.category.name);
    }
  });

  const profil = {
    name: "Jhon Doe",
    image: "https://res.cloudinary.com/ddvobptro/image/upload/v1642494701/siluet_wni7t4.png",
  };
  const token = "jnjnj";
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
                <NavDropdown.Item href={"/categories/" + category} key={index}>
                  {category}
                </NavDropdown.Item>
                
              ))}
            </NavDropdown>
            {token !== "" ? (
              <>
                {/* IsLogin */}
                <div className="garis"></div>
                <img className="shadow" src={profil.image} alt="image-user" height="40px" width="40px" style={{ borderRadius: "50%" }} />
                <NavDropdown title={profil.name} id="basic-nav-dropdown">
                  <NavDropdown.Item href="/student-dashboard">Dashboard</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <button className="nav-btn-logout ms-2" type="button">
                    <img src={user} alt="logOut" className="me-2" />
                    Log Out
                  </button>
                </NavDropdown>
               
              </>
            ) : (
              <>
                {/* NotLogin */}
                <Nav.Link href="/">For Teacher</Nav.Link>
                <div className="garis"></div>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link className="nav-btn-signup" href="/register">
                  Sign Up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
