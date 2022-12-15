import React from "react";
import Logo from "../../Assets/Logo.png";
import verification from "../../Assets/Verification.png";
import verifydescription from "../../Assets/Verification-desc.png";
import "./VerifyOtp.css";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";

export default function VerifyOtp() {

  const initialValues = {otp: ""};
  const [formValue, setFormValue] = useState(initialValues);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate()

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
  if(!values.otp) {
      errors.otp = "OTP is required!"
  }
  if(values.otp.length > 4){
    errors.otp = "Only 4 digits"
  }
  return errors;
}

useEffect(()=>{
  if(Object.keys(formError).length === 0 && isSubmit) {
      console.log("fy",formValue);
  }
}, [formError]);

const handleOTP = async () => {
  console.log("entered otp",JSON.parse(localStorage.getItem("userEmail")))
  let result = await fetch("https://app-virtuallearning-221207091853.azurewebsites.net/auth/validate-otp",{
    method: "PUT",

    headers: {
      "Content-Type": "application/JSON",
      "Accept": "application/JSON",
      "source": JSON.parse(localStorage.getItem("userEmail")),
      "otp": formValue.otp
    }
  });
  console.log(result.status);
  if(result.status === 200){
    navigate("/newpass")
  }
  else if(result.status === 400){
    alert("please enter valid otp")
  }
} 

const handleResend = async () => {
  let result = await fetch("https://app-virtuallearning-221207091853.azurewebsites.net/instructor/verify-email",{
    method: "PATCH",

    headers: {
      "Content-Type": "application/JSON",
      "Accept": "application/JSON",
      "emailId": JSON.parse(localStorage.getItem("userEmail"))
    }
  });
  console.log(result.status);
  if(result.status === 200){
    alert("otp sent....")
  }
}

  return (
    <div>
      <div className="registration">
        <div className="container">
          <div className="Verification-div">
            <div className="logo">
              <img src={Logo}></img>
            </div>

            <div className="verification">
              <img src={verification}></img>
            </div>
            <div className="verification-desc">
              <img src={verifydescription}></img>
            </div>
            <form id="divOuter" onSubmit={handleSubmit}>
              <div id="divInner">
                <input id="partitioned" className="verify-otp" type="number" name="otp" value={formValue.otp} onChange={handleChange} maxLength={4}/>
              </div>
              <div className="otpErrorMessage">{formError.otp}</div>
            </form>
            <span className="didnt-recieve">
              Didn’t receive a code?{" "}
              <span className="resend-button" onClick={handleResend}>Resend</span>
            </span>
            <button className="verify-button" form="divOuter" onClick={handleOTP}>Verify</button>
          </div>
        </div>
      </div>
    </div>
  );
}
