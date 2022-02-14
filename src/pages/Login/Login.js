import { Formik, Form, Field } from "formik";
import { Button, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

import facebookIcon from "../../assests/facebook.svg";
import googleIcon from "../../assests/google.svg";
import githubIcon from "../../assests/github.svg";

import '../../styles/Login.css';
import Navbar from "../../components/Header/NavbarComponent";
import Footer from "../../components/Footer";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

export default function FormLogin() {
  const navigate = useNavigate()
  let [ reqLoading, setReqLoading ] = useState(false)

  axios({
      method: 'post',
      url: '/',
      data: {
          email: '',
          password: '',
      }
  })
  .then((response) => {
      setReqLoading(false)
      Swal.fire({
          icon: 'success',
          title: 'GOOD JOB!',
          text: response.data.message
      })
      // masukin token ke localStorage
      window.localStorage.setItem('token', response.data.token)
      // redirect ke dashboard
      navigate('/')
  })
  .catch((error) => {
      setReqLoading(false)
  })

  return (
    <>
      <Navbar />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          // <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="page-login d-flex justify-content-center align-items-center vh-100">
            <div className="form-login-hero">
              <div className="form-login">
                <div className="header-login">
                  <div className="welcome-login">Welcome back!</div>
                  <div className="yourAccount-login mb-5">Login to your account</div>
                </div>
                <Form>
                  <p className="email">
                    Email <span>*</span>
                  </p>
                  <div className="email-password-field mb-5">
                    <Field type="email" placeholder="john@doe.com" name="email" className="login-email" />
                  </div>
                  {errors.email && touched.email && <div className="text-danger">{errors.email}</div>}
                  <p className="password">
                    Password<span>*</span>
                  </p>
                  <div className="email-password-field">
                    <Field type="password" placeholder="********" name="password" className="login-password" />
                  </div>
                  {errors.password && touched.password && <div className="text-danger">{errors.password}</div>}

                  <div className="login-container">
                    <div className="login-left">
                      <p> Login with :</p>
                      <div className="icons-container">
                        <a href="#">
                          {" "}
                          <img src={facebookIcon} />{" "}
                        </a>
                        <a href="#">
                          {" "}
                          <img src={googleIcon} />{" "}
                        </a>
                        <a href="#">
                          {" "}
                          <img src={githubIcon} />{" "}
                        </a>
                      </div>
                    </div>
                    <div className="login-right">
                      <div className="forget-pass">Forgot Password?</div>
                      <div className="btn-login">
                        <Button type="submit" className="login-button color-#ffffff border-radius-1">
                          {/* {reqLoading ? <Spinner animation="border"/> : "Login"} */} Login
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="register-redirect">
                    New user?{" "}
                    <a href="/register">
                      <span>Create an account</span>
                    </a>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        )}
      </Formik>
      <Footer />
    </>
  );
}
