import React from "react";
import './NewPassword.css';
import vl from '../../Assets/virtuallearn.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

const NewPassword = () => {

    const initialValues = {password: "", confirmPassword: "" };
    const [formValue, setFormValue] = useState(initialValues);
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValue({...formValue, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(validate(formValue));
        // console.log(formValue);
        setIsSubmit(true);
    };

    const validate = (values) => {
        const errors = {}
        const regex = /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        if(values.password === ""){
            errors.password = "Please enter Password"
        }
        else if(!regex.test(values.password)){
            errors.password = "Password should be strong"
        }
        // else if(values.confirmPassword === values.password){
        //     errors.confirmPassword = "Password matched"
        // }
        else if(values.confirmPassword !== values.password){
            errors.confirmPassword = "Password didn't matched"
        }
        
        return errors;
    }

    useEffect(()=>{
        if(Object.keys(formError).length === 0 && isSubmit) {
            console.log(formValue);
        }
    }, [formError]);

    const token = JSON.parse(localStorage.getItem("user"))
    const tokenId = token.token;
    console.log("token", token)

    const handleResetPassword = async () => {
        const result = await fetch("https://app-virtuallearning-221207091853.azurewebsites.net/auth/reset-password",{
            method: "PATCH",

            headers: {
                "Content-Type": "application/JSON",
                "Accept": "application/JSON",
                "Authorization": `Bearer ${tokenId}`,
                "password": formValue.password,
                "oldPassword": JSON.parse(localStorage.getItem("Password"))
            }
        });
        console.log(result.status);
        if(result.status === 200){
            localStorage.setItem("Password", JSON.stringify(formValue.password))
            navigate("/")
        }
    }

    return (
        <div>
            <div className="pass-container">
                <div className="img"><img src={vl} alt="" className='vl-logo' /></div>
                <div className="create-new-pass">Create New Password</div>
                <div className="pass-char">Your password must have at least <br /> 6 or more characters</div>
                <div className="pass-set-form">
                    <form action="" className="form-log" onSubmit={handleSubmit}>
                        <div className="pass-form-input">
                            <Box
                                className="form-box"
                                component="form"
                                sx={{ '& > :not(style)': { m: 1, width: '38ch', borderColor: "red" }, }} noValidate autoComplete="off">
                                <TextField id="standard-basic" name="password" value={formValue.password} onChange={handleChange}
                                    InputProps={{
                                        style: {
                                            color: "#072D5B",
                                            fontFamily: "Avenir, sans-serif",
                                            fontSize: "20px",
                                            letterSpacing: "0.4px",
                                            // paddingLeft: "0.5rem",
                                            lineHeight: "43.71px",
                                            fontWeight: "600",
                                        }
                                    }} type="password" label="New Password"
                                    InputLabelProps={{
                                        style: {
                                            color: "#7A7A7A",
                                            fontSize: "16px",
                                            fontWeight: "400",
                                            fontFamily: "Avenir, sans-serif",
                                            fontStyle: 'Roman, sans-serif',
                                            lineHeight: "21.86px",
                                            letterSpacing: "0.4px"
                                        }
                                    }} variant="standard"/>
                                    <div className="errorMessage">{formError.password}</div>

                                <TextField id="standard-basic" name="confirmPassword" value={formValue.confirmPassword} onChange={handleChange}
                                    InputProps={{
                                        style: {
                                            color: "#072D5B",
                                            fontFamily: "Avenir, sans-serif",
                                            fontSize: "20px",
                                            letterSpacing: "0.4px",
                                            // paddingLeft: "0.5rem",
                                            lineHeight: "43.71px",
                                            fontWeight: "600",
                                        }
                                    }} type="password" InputLabelProps={{
                                        style: {
                                            color: "#7A7A7A",
                                            fontSize: "16px",
                                            fontWeight: "400",
                                            fontFamily: "Avenir, sans-serif",
                                            fontStyle: 'Roman',
                                            lineHeight: "21.86px",
                                            letterSpacing: "0.4px"
                                        }
                                    }} label="Confirm Password" variant="standard" />
                                    <div className="errorMessage">{formError.confirmPassword}</div>
                            </Box>
                        </div>

                        <button className="reset-btn"><span className="reset-pass-text" onClick={handleResetPassword}>Reset Password</span></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewPassword;