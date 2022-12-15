import React, { useState, useEffect } from "react";
import Logo from "../../Assets/Logo.png";
import forgot from "../../Assets/Forgotpassword.png";
import forgotdescription from "../../Assets/Forgotdescription.png";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./ForgotPassword.css";
// import { color } from "@mui/system";
// import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

export default function ForgotPassword() {

  const navigate = useNavigate();
  const initialValues = {email: ""};
  const [formValue, setFormValue] = useState(initialValues);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValue({...formValue, [name]: value});   
    setUserEmail(formValue.email);
}


const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validation(formValue));
    // console.log(formValue);
    setIsSubmit(true);
};

const validation = (values) => {
  let errors = {}
  const regex =  /[a-z][a-zA-Z0-9.-]{3,15}@[a-zA-Z0-9]{3,10}.(com|co|in)/
  if(values.email.length === 0){
    errors.email = "Email is required"
  }
  else if(!regex.test(values.email)){
    errors.email = "Please enter valid email"
  }
  return errors;
}

useEffect(()=>{
  console.log("entered useeffect")
  if(Object.keys(formError).length === 0 && isSubmit) {
    
      console.log("huiui",formValue);
  }
}, [formError]);

const handleForgotPassword = async() => {
  console.log("inside",formValue.email);
  let result = await fetch("https://app-virtuallearning-221207091853.azurewebsites.net/instructor/verify-email",{
    method: "PATCH",

    headers: {
      "Content-Type": "application/JSON",
      "Accept": "application/JSON",
       "emailId": formValue.email
    }
  });
  console.log(result.status);
  
  if(result.status === 200){
    const response = await result.json();
    console.warn(response);
  
    if(response.message === "success") {
      localStorage.setItem("userEmail", JSON.stringify(formValue.email));
      navigate("/verifyotp")
    }

  }
  
  else if(result.status === 400){
    alert("Please enter valid email");
  }

 
 
}

  return (
    <div>
      <div className="registration">
        <div className="container">
          <form action="" onSubmit={handleSubmit}>
          <div className="forgotpassword">
            <div className="logo">
              <img src={Logo}></img>
            </div>

            <div className="forgot">
              <img src={forgot}></img>
            </div>
            <div className="forgot-desc">
              <img src={forgotdescription}></img>
            </div>

            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "40ch", marginTop: "8%" },
              }}
              noValidate
              autoComplete="off"
              onSubmit={() => {
                navigate("/verifyotp");
              }}
            >
             <div style={{display:"flex",flexDirection:"column",marginLeft:"6%"}}>
               <TextField id="standard-basic" type="email" label="Enter Email ID" variant="standard" name="email" value={formValue.email} onChange={handleChange}
                sx={{
                  input: {
                    color: "rgb(7,45,91)",
                    fontFamily: "Avenir",
                    fontStyle: "normal",
                    fontWeight: "1000",
                    fontSize: "20px",
                    lineHeight: "27px",
                    letterSpacing: "0.4px",
                  },
                }}
              />
              <div className="errorMessage">{formError.email}</div></div>
            </Box>
            <button  onClick={handleForgotPassword}
              className="send-button"
              >Send</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
