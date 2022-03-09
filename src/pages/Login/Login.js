import { Formik, Form, Field } from "formik";
import { Button, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authentication } from "../../config/configFirebase";
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

import { API } from "../../api";

import facebookIcon from "../../assests/facebook.svg";
import googleIcon from "../../assests/google.svg";

import "../../styles/Login.css";
import Navbar from "../../components/Header/NavbarComponent";
import Footer from "../../components/Footer";
import { userSigninAction } from "../../redux/actions/User/userAuthAction";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid format email").required("Email is required!"),
  password: Yup.string()
    .required("Password is required!")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      "must contain 6 characters, one uppercase, one lowercase, one number and one special case character"
    ),
});

export default function FormLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const doLogin = (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };

    axios({
      method: "post",
      url: `${API}api/v1/user/login`,
      data: data,
    })
      .then((response) => {
        // console.log(response);
        Swal.fire({
          icon: "success",
          title: "Login success!",
          showConfirmButton: false,
          timer: 1500,
        });
        // masukin token ke localStorage
        localStorage.setItem("token", response.data.result.token);
        dispatch(userSigninAction(response.data.result.user));
        // redirect ke dashboard
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: "Please, check your email and password again",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  const handleLogin = async (provider) => {
    const result = await signInWithPopup(authentication, provider);
    if (result.user !== "") navigate("/");
    localStorage.setItem("loginGoogle", result);
  };

  const handleOnClick = async (provider) => {
    const result = await signInWithPopup(authentication, provider);
    if (result.user !== "") navigate("/");
    localStorage.setItem("loginFacebook", result);
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
                  <div className="email-password-field">
                    <Field type="email" placeholder="Email" name="email" className="login-email" />
                  </div>
                  {errors.email && touched.email && <div className="text-danger">{errors.email}</div>}
                  <p className="password mt-5">
                    Password<span>*</span>
                  </p>
                  <div className="email-password-field">
                    <Field type="password" placeholder="Password" name="password" className="login-password" />
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
                        <div className="icons-google">
                          <button className="icons-google" onClick={() => handleLogin(new GoogleAuthProvider())}>
                            <img src={googleIcon} alt="google icon" />
                          </button>
                        </div>
                        <div className="icons-facebook">
                          <button
                            style={{ position: "relative" }}
                            className="icons-facebook"
                            onClick={() => handleOnClick(new FacebookAuthProvider())}
                          >
                            <img
                              src={facebookIcon}
                              style={{
                                position: "absolute",
                                left: "3px",
                                top: "-1px",
                              }}
                              alt="facebook icon"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="login-right">
                      <div className="forget-pass">
                        <Link to="/lupa-password">Forgot Password?</Link>
                      </div>
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
