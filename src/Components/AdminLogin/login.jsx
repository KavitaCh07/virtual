import React, { useState, useEffect } from "react";
import './login.css';
import vl from '../../Assets/virtuallearn.png';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const initialValues = {userName: "", password: "" };
    const [formValue, setFormValue] = useState(initialValues);
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [username, setUsername] = useState("");
    const [passWord, setPassword] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValue({...formValue, [name]: value});
        setUsername(formValue.userName)
        setPassword(formValue.password)
          
    }
  

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(validate(formValue));
        // console.log(formValue);
        setIsSubmit(true);
    };

    const validate = (values) => {
        const errors = {}
        if(!values.userName) {
            errors.userName = "User Name is required!"
        }
        if(!values.password) {
            errors.password = "Password is required!"
        }
        return errors;
    }

    useEffect(()=>{
        if(Object.keys(formError).length === 0 && isSubmit) {
            console.log("fy",formValue);
        }
    }, [formError]);

    const handleLogin = async () => {
        let item = {username, passWord}
        console.warn("ddddd",formValue.userName,formValue.password)
        let result = await fetch("https://app-virtuallearning-221207091853.azurewebsites.net/auth/login",{
            method: "POST",
           
            headers: {
                "Content-Type": "application/JSON",
                "Accept": "application/JSON",
                "username": formValue.userName,
                "password":formValue.password
            }
        });
        result = await result.json();
        console.warn(result);
        if (result) {
            localStorage.setItem("user", JSON.stringify(result));
            localStorage.setItem("userName", JSON.stringify(formValue.userName))
            localStorage.setItem("Password", JSON.stringify(formValue.password))
            
        const token = JSON.parse(localStorage.getItem("user"));
        const tokenID = token.token;
        const profileURL = token.profileUrl;

            navigate("/home");
          } 
          else {
            alert("Please enter the correct details");
          }
    }



        // console.log("tokenid",tokenID);
        // console.log("profileURL",profileURL);
    return (
        <div>
            <div className="login-container">
                <div className="vl-logo"><img src={vl} className='logo-img' alt="" /></div>
                <div className="login-form">
                    <form action="" className="form-log" onSubmit={handleSubmit}>
                        <div className="form-input">
                            <Box
                                className="form-box"
                                component="form"
                                sx={{ '& > :not(style)': { m: 1, width: '38ch', borderColor: "red" }, }} noValidate autoComplete="off">
                                <TextField id="standard-basic" type="text" name="userName" value={formValue.userName} onChange={handleChange}
                                    InputProps={{
                                        style: {
                                            color: "#072D5B",
                                            fontFamily: "Avenir, sans-serif",
                                            fontSize: "20px",
                                            letterSpacing: "0.4px",
                                            // paddingLeft: "0.5rem",
                                            lineHeight: "27.32PX",
                                            fontWeight: "600",
                                        }
                                    }} label="User Name" 
                                    InputLabelProps={{ style: { 
                                        color: "#7A7A7A",
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        fontFamily: "Avenir, sans-serif",
                                        fontStyle: 'Roman',
                                        lineHeight: "21.86px",
                                        letterSpacing: "0.4px"
                                         } }} variant="standard" />
                                         <div className="errorMessage">{formError.userName}</div>

                                <TextField id="standard-basic" name="password" value={formValue.password} onChange={handleChange}
                                InputProps={{
                                    style: {
                                        color: "#072D5B",
                                        fontFamily: "Avenir, sans-serif",
                                        fontSize: "20px",
                                        letterSpacing: "0.4px",
                                        // paddingLeft: "0.5rem",
                                        lineHeight: "27.32PX",
                                        fontWeight: "600",
                                        borderBottom: "red !important",
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
                                }} label="Password" variant="standard" />
                                <div className="errorMessage">{formError.password}</div>
                            </Box>
                        </div>
                        <div className="fogrot-password">
                            <Link to="/forgotpassword">Forgot Password?</Link>
                        </div>

                        <button className="login-btn"><span className="login-text" onClick={handleLogin}>Login</span></button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;