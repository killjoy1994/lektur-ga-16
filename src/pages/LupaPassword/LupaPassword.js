import React, { useState } from 'react';
import axios from 'axios';



import '../../styles/lupaPassword.css';


const LupaPassword = () => {
    const[email, setEmail] = useState("");
    const[error, setError] = useState("");
    const[alert, setAlert] = useState("");

    const changeEmail = (e) => {
        setEmail(e.target.value);
        setError('')
    }

    const send = () => {
        if(!email) {
            setError("Email is required!")
        } else {
            axios.post('https://lektur-apps.herokuapp.com/api/v1/user/forgot-password', {email: email })
            .then(res => {
                setEmail('')
                setAlert('Please check your email')
                setTimeout(() => {
                    setAlert('')
                }, 1000)
            })
        }
    };

    return (
        <>
            <div className='page-forgot'>
                <div className='container'>
                    <div className='col-md-4'>
                        <div className='card'>
                            <div className='title'>Forgot Password?</div>
                                {
                                    alert && (
                                        <div className='alert alert-primary'>
                                            <p>{alert}</p>
                                        </div>
                                    )
                                }
                                {
                                    error && (
                                        <div className='alert alert-primary'>
                                            <p>{error}</p>
                                        </div>
                                    )
                                }
                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label>Email</label>
                                        <input type="text" placeholder='Enter your email..' className='form-control' value={email} onChange={changeEmail} />
                                    </div>
                                    <button className='btn-forgot' onClick={send}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
        </>
    );
};

export default LupaPassword;