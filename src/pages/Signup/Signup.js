import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
//import { Spinner } from "react-bootstrap";
import { API } from "../../api";

import "../../styles/Signup.css";
import Navbar from "../../components/Header/NavbarComponent";
import Footer from "../../components/Footer";
import { useDispatch } from "react-redux";
import { userSignupAction } from "../../redux/actions/User/userAuthAction";




function Signup() {
  const [inputedName, setInputedName] = useState("");
  const [inputedEmail, setInputedEmail] = useState("");
  const [inputedPassword, setInputedPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  //const initialValues = {fullname:"", email:"", password:""};
  //const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [reqLoading, setReqLoading] = useState();
  const [role, setRole] = useState(null);
  
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // const handleChange = (e) => {
  //     console.log(e.target);
  //     const {name, value} = e.target;
  //     setFormValues({...formValues, [name]: value });
  //     console.log(formValues);
  // };

  const nameHandler = (e) => {
    console.log(e.target.value);
    setInputedName(e.target.value);
  };

  const emailHandler = (e) => {
    console.log(e.target.value);
    setInputedEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    console.log(e.target.value);
    setInputedPassword(e.target.value);
  };

  const roleHandler = (e) => {
    console.log(e.target.value);
    setSelectedRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputedData = {
      fullName: inputedName,
      email: inputedEmail,
      password: inputedPassword,
      role: selectedRole,
    };

    setFormErrors(validate(inputedData));
    setIsSubmit(true);

    axios({
      method: "post",
      url: `${API}api/v1/user/register`,
      data: inputedData,
    })
      .then((response) => {
        console.log(response);
        // masukin token ke localStorage
        localStorage.setItem('token', response.data.result.token)
        dispatch(userSignupAction(response.data.result.user));
        // redirect ke dashboard
        // navigate("/registered");
      })
      .catch((error) => {
        console.log(error);
      });
    setInputedName("");
    setInputedEmail("");
    setInputedPassword("");
    setSelectedRole("");
    
  };

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      //console.log(inputedData);
    }
  }, [formErrors]);

  const validate = (values) => {
    console.log(values)
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullName) {
      errors.fullname = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password > 20) {
      errors.password = "Password cannot exceed than 20 characters";
    }
    return errors;
  };

  return (
    <>
      <Navbar />
      <div className="signup-hero">
        <div className="signup-page">
          <div className="signup">
            <form onSubmit={handleSubmit}>
              <div>
                <div className="signup-title">Start Learning!</div>
                <p className="signup-account">Create your account</p>
              </div>
              <div className="form">
                <div className="field">
                  <label>
                    Name<span>*</span>
                  </label>
                  <input type="text" name="fullname" placeholder="Enter your name" value={inputedName} onChange={nameHandler} />
                </div>
                <p>{formErrors.fullname}</p>
                <div className="field">
                  <label>
                    Email<span>*</span>
                  </label>
                  <input type="email" name="email" placeholder="Enter your email" value={inputedEmail} onChange={emailHandler} />
                </div>
                <p>{formErrors.email}</p>
                <div className="field">
                  <label>
                    Password<span>*</span>
                  </label>
                  <input type="password" name="password" placeholder="Enter your password" value={inputedPassword} onChange={passwordHandler} />
                </div>
                <p>{formErrors.password}</p>
                <div className="select-container">
                  <div className="select-role">
                    <select name="status" onChange={roleHandler} value={selectedRole}>
                      <option value="" disabled className="option" >
                        Select Role
                      </option>
                      <option className="option-t" value="teacher" >
                        Teacher
                      </option>
                      <option className="option-s" value="student" >
                        Student
                      </option>
                    </select>
                  </div>
                  <button className="btn-signup-form">Sign up</button>
                </div>
                <div className="signup-login">
                  Already have account?{" "}
                  <Link to="/login">
                    <span>Login</span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;

// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// //import { Spinner } from "react-bootstrap";

// import '../../styles/Signup.css';
// import Navbar from '../../components/Header/NavbarComponent';
// import Footer from '../../components/Footer';

// function Signup() {
//   const initialValues = { fullname: "", email: "", password: "" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const [reqLoading, setReqLoading] = useState();
//   const [role, setRole] = useState(null);

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     // console.log(e.target);
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//     // console.log(formValues);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   };

//   // axios({
//   //   method: "post",
//   //   url: "/",
//   //   data: {
//   //     fullname: "",
//   //     email: "",
//   //     password: "",
//   //   },
//   // })
//   //   .then((response) => {
//   //     setReqLoading(false);
//   //     // masukin token ke localStorage
//   //     window.localStorage.setItem("token", response.data.token);
//   //     // redirect ke dashboard
//   //     navigate("/");
//   //   })
//   //   .catch((error) => {
//   //     setReqLoading(false);
//   //   });

//   useEffect(() => {
//     // console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }
//   }, [formErrors]);

//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.fullname) {
//       errors.fullname = "Name is required!";
//     }
//     if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email format!";
//     }
//     if (!values.password) {
//       errors.password = "Password is required!";
//     } else if (values.password < 4) {
//       errors.password = "Password must be more than 4 characters";
//     } else if (values.password > 20) {
//       errors.password = "Password cannot exceed than 20 characters";
//     }
//     return errors;
//   };

//     return (
//         <>
//             <Navbar />
//             <div className='signup-hero'>
//                 <div className='signup-page'>
//                     <div className='signup'>
//                         <form onSubmit={handleSubmit}>
//                             <div>
//                                 <div className='signup-title'>Start Learning!</div>
//                                 <p className='signup-account'>Create your account</p>
//                             </div>
//                             <div className='form'>
//                                 <div className='field'>
//                                     <label>Name<span>*</span></label>
//                                     <input
//                                         type='text'
//                                         name='fullname'
//                                         placeholder='John Doe'
//                                         value={formValues.fullname}
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                                 <p>{ formErrors.fullname }</p>
//                                 <div className='field'>
//                                     <label>Email<span>*</span></label>
//                                     <input
//                                         type='email'
//                                         name='email'
//                                         placeholder='john@gmail.com'
//                                         value={formValues.email}
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                                 <p>{ formErrors.email }</p>
//                                 <div className='field'>
//                                     <label>Password<span>*</span></label>
//                                     <input
//                                         type='password'
//                                         name='password'
//                                         placeholder='******'
//                                         value={formValues.password}
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                                 <p>{ formErrors.password }</p>
//                                 <div className='select-container'>
//                                     <div className='select-role'>
//                                         <select
//                                             name="status"
//                                             onChange={(event) => setRole(event.target.value)}
//                                         >
//                                             <option value={null} className="option">
//                                             Select Role
//                                         </option>
//                                             <option className='option-t'value={1}>Teacher</option>
//                                             <option className='option-s'value={0}>Student</option>
//                                         </select>
//                                     </div>
//                                     <button className='btn-signup-form'>
//                                         Sign up
//                                     </button>
//                                 </div>
//                                 <div className="signup-login">
//                                     Already have account?{" "}
//                                     <Link to='/login'>
//                                         <span>Login</span>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// }

// export default Signup;
