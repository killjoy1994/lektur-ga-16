// import { useState } from "react";
// import { Formik, Form, Field } from 'formik';
// import { Button, Spinner } from "react-bootstrap";
// import *as Yup from 'yup';
// import { Link, useHistory } from "react-router-dom";
// import { useDispatch } from 'react-redux';

// import { postSignup } from "../../redux/actions/userActions";
// import Navbar from '../../components/Header/Navbar';
// import Footer from '../../components/Footer';

// const SignupSchema = Yup.object().shape({
//     fullname: Yup.string().fullname('Invalid name').required('Required'),
//     email: Yup.string().email('Invalid email').required('Required'),
//     password: Yup.string().required('Required')
//         .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
//         "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
//     ),
// });

// export default function Signup () {
//     const [reqLoading] = useState(false)
//     const dispatch = useDispatch()
//     const history = useHistory();

//     const [role, setRole] = useState(null);
//     const [signupData, setSignupData] = useState({
//         fullname: "",
//         email: "",
//         password: "",
//     });

//     const handleSignUp = (e) => {
//         setSignupData({
//           ...signupData,
//           [e.target.name]: e.target.value,
//         });
//     };

//     const submitTeacher = () => {
//         dispatch(postSignup(role, signupData));
//         history.push('/login')
//     };


//     return (
//         <>
//             <Navbar />
//             <Formik
//             initialValues={{
//                 fullname: '',
//                 email: '',
//                 password: '',
//             }}
//             validationSchema={SignupSchema}
//             onSubmit={values => {
//                 console.log(values);
//             }}
//             >
//                 {({ errors, touched }) => (
//                     <div className="signup-page">
//                         <div className="signup">
//                             <div>
//                                 <div className="signup-title">Start Learning!</div>
//                                 <p className="signup-account">Create your account</p>
//                             </div>
//                             <Form className='form'>
//                                 <div>
//                                     Name<span>*</span>
//                                 </div>
//                                 <div className="email-password-username-field">
//                                     <Field 
//                                         type='text'
//                                         placeholder='John Doe'
//                                         name='fullname'
//                                         className='signup-fullname'
//                                         onChange={(e) => handleSignUp(e)}
//                                     />
//                                 </div>
//                                 {errors.fullname && touched.fullname ? (
//                                 <div>{errors.fullname}</div>
//                                 ) : null}
//                                 <div>
//                                     Email<span>*</span>
//                                 </div>
//                                 <div className="email-password-username-field">
//                                     <Field 
//                                         type='email'
//                                         placeholder='john@gmail.com'
//                                         name='email'
//                                         className='signup-email'
//                                         onChange={(e) => handleSignUp(e)}
//                                     />
//                                 </div>
//                                 {errors.email && touched.email ? (
//                                 <div>{errors.email}</div>
//                                 ) : null}
//                                 <div>
//                                     Password<span>*</span>
//                                 </div>
//                                 <div className="email-password-username-field">
//                                     <Field 
//                                         type='password'
//                                         placeholder='********'
//                                         name='password'
//                                         className='signup-password'
//                                         onChange={(e) => handleSignUp(e)}
//                                     />
//                                 </div>
//                                 {errors.password && touched.password ? (
//                                 <div>{errors.password}</div>
//                                 ) : null}
//                             </Form>
//                             <div className="form-select">
//                                 <select
//                                     name='status'
//                                     onChange={(event) => setRole(event.target.value)}
//                                 >
//                                     <option value={null} className="option">
//                                         Select Role
//                                     </option>
//                                     <option value={1}>Teacher</option>
//                                     <option value={2}>Student</option>
//                                 </select>
//                             </div>
//                             <br />
//                             <div className="btn">
//                                 <Button
//                                     className="btn-signup"
//                                     onClick={submitTeacher}
//                                     disabled={
//                                         !role ||
//                                         !signupData.fullname ||
//                                         !signupData.email ||
//                                         !signupData.password 
//                                     }
//                                 >
//                                     {reqLoading ? <Spinner animation='border'/> : "Sign up"}
//                                 </Button>
//                             </div>
//                             <div className="signup-login">
//                                 Already have account?{" "}
//                                 <Link to='/login'>
//                                     <span>Login</span>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </Formik>
//             <Footer />
//         </>
//     );
// }