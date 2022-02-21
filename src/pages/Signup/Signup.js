import {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
//import { Spinner } from "react-bootstrap";
import { API } from '../../api';

import '../../styles/Signup.css';
import Navbar from '../../components/Header/NavbarComponent';
import Footer from '../../components/Footer';

function Signup() {
    const [ inputedName, setInputedName ] = useState("");
    const [ inputedEmail, setInputedEmail ] = useState("");
    const [ inputedPassword, setInputedPassword ] = useState("");
    const [ selectedRole, setSelectedRole ] = useState("");
    //const initialValues = {fullname:"", email:"", password:""};
    //const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [reqLoading, setReqLoading] = useState();
    const [role, setRole] = useState(null);

    const navigate = useNavigate();


    // const handleChange = (e) => {
    //     console.log(e.target);
    //     const {name, value} = e.target;
    //     setFormValues({...formValues, [name]: value });
    //     console.log(formValues);
    // };

    const nameHandler = (e) => {
        console.log(e.target.value);
        setInputedName(e.target.value)
    }

    const emailHandler = (e) => {
        console.log(e.target.value);
        setInputedEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        console.log(e.target.value);
        setInputedPassword(e.target.value)
    }

    const roleHandler = (e) => {
        console.log(e.target.value);
        setSelectedRole(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputedData = {
            fullName: inputedName,
            email: inputedEmail,
            password: inputedPassword,
            role: selectedRole
        }
        axios({
            method:'post',
            url: `${API}/api/v1/user/register`,
            data: inputedData
        })
        .then((response) => {
            console.log(response);
            // masukin token ke localStorage
            window.localStorage.setItem('token', response.data.token)
            // redirect ke dashboard
            navigate('/')
        })
        .catch((error) => {
            console.log(error);
        })
        setInputedName("");
        setInputedEmail("");
        setInputedPassword("");
        setSelectedRole("");
        setFormErrors(validate(inputedData));
        setIsSubmit(true);
    };


    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.fullname) {
            errors.fullname = "Name is required!";
        }
        if(!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if(!values.password) {
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
            <div className='signup-hero'>
                <div className='signup-page'>
                    <div className='signup'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className='signup-title'>Start Learning!</div>
                                <p className='signup-account'>Create your account</p>
                            </div>
                            <div className='form'>
                                <div className='field'>
                                    <label>Name<span>*</span></label>
                                    <input 
                                        type='text' 
                                        name='fullname' 
                                        placeholder='Enter your name' 
                                        value={inputedName}
                                        onChange={nameHandler}
                                        required
                                    />
                                </div>
                                <p>{ formErrors.fullname }</p>
                                <div className='field'>
                                    <label>Email<span>*</span></label>
                                    <input 
                                        type='email' 
                                        name='email' 
                                        placeholder='Enter your email' 
                                        value={inputedEmail}
                                        onChange={emailHandler}
                                        required
                                    />
                                </div>
                                <p>{ formErrors.email }</p>
                                <div className='field'>
                                    <label>Password<span>*</span></label>
                                    <input 
                                        type='password' 
                                        name='password' 
                                        placeholder='Enter your password' 
                                        value={inputedPassword}
                                        onChange={passwordHandler}
                                    />
                                </div>
                                <p>{ formErrors.password }</p>
                                <div className='select-container'>
                                    <div className='select-role'>
                                        <select
                                            name="status"
                                            onChange={roleHandler}
                                        
                                        >
                                            <option value={null} className="option" selected={selectedRole === ""}>
                                            Select Role
                                        </option>
                                            <option className='option-t'value='teacher' selected={selectedRole === "teacher"}>Teacher</option>
                                            <option className='option-s'value='student'selected={selectedRole === "student"}>Student</option>
                                        </select>
                                    </div>
                                    <button className='btn-signup-form'>
                                        Sign up
                                    </button>
                                </div>
                                <div className="signup-login">
                                    Already have account?{" "}
                                    <Link to='/login'>
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