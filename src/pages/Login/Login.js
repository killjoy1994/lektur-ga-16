import { Formik, Form, Field } from "formik";
import { Button, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { API } from '../../api';

import facebookIcon from "../../assests/facebook.svg";
import googleIcon from "../../assests/google.svg";

import '../../styles/Login.css';
import Navbar from "../../components/Header/NavbarComponent";
import Footer from "../../components/Footer";
import { userSigninAction } from "../../redux/actions/User/userAuthAction";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid format email").required("Required"),
  password: Yup.string()
    .required("Required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

export default function FormLogin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const doLogin = (values) => {
    const data = {
      email: values.email,
      password: values.password,
    }

    axios({
      method: 'post',
      url: `${API}api/v1/user/login`,
      data: data,
    })
    .then((response) => {
      console.log(response);
      // masukin token ke localStorage
      localStorage.setItem('token', response.data.result.token)
      dispatch(userSigninAction(response.data.result.user));
      // redirect ke dashboard
      navigate('/')
    })
    .catch((error) => {
      console.log(error);
    })
  };

  
  return (
    <>
      <Navbar />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={doLogin}
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
                      <div className="register-redirect">
                        New user?{" "}
                        <a href="/register">
                          <span>Create an account</span>
                        </a>
                      </div>
                      <p>or</p>
                      <p> Login with :</p>
                      <div className="icons-container">
                        <a href='https://lektur-apps.herokuapp.com/api/v1/user/facebook'>
                          {" "}
                          <img src={facebookIcon} />{" "}
                        </a>
                        <a href="https://lektur-apps.herokuapp.com/api/v1/user/google">
                          {" "}
                          <img src={googleIcon} />{" "}
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