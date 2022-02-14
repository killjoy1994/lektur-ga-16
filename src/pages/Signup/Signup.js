import {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
//import { Spinner } from "react-bootstrap";

import '../../styles/Signup.css';
import Navbar from '../../components/Header/NavbarComponent';
import Footer from '../../components/Footer';

function Signup() {
    const initialValues = {fullname:"", email:"", password:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [reqLoading, setReqLoading] = useState();
    const [role, setRole] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        console.log(e.target);
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value });
        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    axios({
        method: 'post',
        url: '/',
        data: {
            fullname: '',
            email: '',
            password: '',
        }
    })
    .then((response) => {
        setReqLoading(false)
        // masukin token ke localStorage
        window.localStorage.setItem('token', response.data.token)
        // redirect ke dashboard
        navigate('/')
    })
    .catch((error) => {
        setReqLoading(false)
    })

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

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
                                        placeholder='John Doe' 
                                        value={formValues.fullname}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p>{ formErrors.fullname }</p>
                                <div className='field'>
                                    <label>Email<span>*</span></label>
                                    <input 
                                        type='email' 
                                        name='email' 
                                        placeholder='john@gmail.com' 
                                        value={formValues.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p>{ formErrors.email }</p>
                                <div className='field'>
                                    <label>Password<span>*</span></label>
                                    <input 
                                        type='password' 
                                        name='password' 
                                        placeholder='******' 
                                        value={formValues.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p>{ formErrors.password }</p>
                                <div className='select-container'>
                                    <div className='select-role'>
                                        <select
                                            name="status"
                                            onChange={(event) => setRole(event.target.value)}
                                        >
                                            <option value={null} className="option">
                                            Select Role
                                        </option>
                                            <option className='option-t'value={1}>Teacher</option>
                                            <option className='option-s'value={0}>Student</option>
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