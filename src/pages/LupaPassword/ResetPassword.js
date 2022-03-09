import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import { API } from "../../api";
import "../../styles/ResetPassword.css";


function ResetPassword() {
    const [inputtedNewPassword, setInputtedNewPassword] = useState("");
    const [inputtedConfirmPassword, setInputtedConfirmPassword] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const navigate = useNavigate();

    const newPasswordHandler = (e) => {
        console.log(e.target.value);
        setInputtedNewPassword(e.target.value);
    };

    const confirmPasswordHandler = (e) => {
        console.log(e.target.value);
        setInputtedConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputData = {
            newPassword: inputtedNewPassword,
            confirmPassword: inputtedConfirmPassword,
        };

        setFormErrors(validati(inputData));
        setIsSubmit(true);

        axios({
            method: "post",
            url: `${API}api/v1/user/reset-password`,
            data: inputData,
        })
        .then((response) => {
            //console.log(response);
        
        localStorage.setItem('token', response.data.result.token)
        localStorage.setItem('user', JSON.stringify(response.data.result.user))
        navigate("/login");
        })
        .catch((err) => {
            console.log(err);
        });
        setInputtedNewPassword("");
        setInputtedConfirmPassword("");
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            //console.log(inputData);
        }
    }, [formErrors]);

    const validati = (values) => {
        console.log(values)
        const errors = {};
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password > 20) {
            errors.password = "Password cannot exceed than 20 characters";
        } else if (!regex.test(values.password)) {
            errors.password = "must contain 6 characters, one uppercase, one lowercase, one number and one special case character";
        }
        if (!values.confirm_password) {
            errors.confirm_password = "Password is required!";
        } else if (values.confirm_password < 4) {
            errors.confirm_password = "Password must be more than 4 characters";
        } else if (values.confirm_password > 20) {
            errors.confirm_password = "Password cannot exceed than 20 characters";
        } else if (!regex.test(values.confirm_password)) {
            errors.password = "must contain 6 characters, one uppercase, one lowercase, one number and one special case character";
        }
        return errors;
    }

    return (
        <div className="hero-reset">
            <div className="page-reset">
                <div className="reset">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className="reset-title">Reset Password</div>
                        </div>
                        <div className="form">
                            <div className="field">
                                <label>
                                    New Password
                                </label>
                                <input type="password" name="password" placeholder="New password" value={inputtedNewPassword} onChange={newPasswordHandler}/>    
                            </div>
                            <p>{formErrors.password}</p> 

                            <div className="field">
                                <label>
                                    Confirm Password
                                </label>
                                <input type="password" name="confirm_password" placeholder="Confirm password" value={inputtedConfirmPassword} onChange={confirmPasswordHandler}/>    
                            </div>
                            <p>{formErrors.confirm_password}</p>

                            <a href="/login">RESET MY PASSWORD</a>
                        </div>
                    </form>    
                </div>    
            </div>    
        </div>
    );
}

export default ResetPassword;