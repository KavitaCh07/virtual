import React from 'react'
import './certificate.css';
import trophy from '../../Assets/tophy.png';
// import blueFooter from '../../Assets/certificateBorder.png';
import certificateLogo from '../../Assets/certificateLogo.png';
import CertificateModal from '../certificateModal/certificateModal';
import { useState, useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { AddCertificate } from '../../redux/recentCourseSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Addcoursecertificate() {
  const certiNum = nanoid();
  const [certificateid,setcertificateid] = useState("")
  const initialValues = { certificateTitle: "", studentName: "", courseTitle: "", joinedDate: "", completedDate: "",certificateID: certiNum};
  const [formValue, setFormValue] = useState(initialValues);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormError(validate(formValue));
    // console.log(formValue);
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {}
    var dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if (!values.certificateTitle) {
      errors.certificateTitle = "Certificate Title is required!"
    }
    if (!values.studentName) {
      errors.studentName = "Student Name is required!"
    }
    if (!values.courseTitle) {
      errors.courseTitle = "Course Title is required!"
    }
    if (!values.joinedDate) {
      errors.joinedDate = "Date is required!"
    }
    else if(!dateRegex.test(values.joinedDate)){
      errors.joinedDate = "Date format should be dd/mm/yyy"
    }
    if (!values.completedDate) {
      errors.completedDate = "Date is required!"
    }
    else if(!dateRegex.test(values.completedDate)){
      errors.completedDate = "Date format should be dd/mm/yyy"
    }
    return errors;
  }

  useEffect(()=>{
    if(Object.keys(formError).length === 0 && isSubmit) {
        console.log(formValue);
    }
}, [formError]);

useEffect(()=>{
  setcertificateid(certiNum);
},[])

console.log("cert",certificateid);

  
  const dispatch = useDispatch();
  const [certificatePreviewModal, setCertificatePreviewModal] = useState(false);
  const certificateData = useSelector(AddCertificate);
  console.log("certi data",certificateData);

  return (
    <div className='certicate-container'>
      {certificatePreviewModal && <CertificateModal setCertificatePreviewModal={setCertificatePreviewModal} />}
      <div className="certificate-box">

        {/* <div className="certificate-form-container"> */}
        <form action="" id='certificateForm' className='certificate-form' onSubmit={handleSubmit}>
          <div className='label-input'>
            <label htmlFor="" className='form-label'>Certification title</label>
            <input type="text" name="certificateTitle" value={formValue.certificateTitle} onChange={handleChange} placeholder='Enter title' className='input-field' id="" />
            <div className="errorMessage">{formError.certificateTitle}</div>
          </div>

          <div className='label-input'>
            <label htmlFor="" className='form-label'>Student name</label>
            <input type="text" name="studentName" value={formValue.studentName} onChange={handleChange} placeholder='Enter Name' className='input-field' id="" />
            <div className="errorMessage">{formError.studentName}</div>
          </div>

          <div className='label-input'>
            <label htmlFor="" className='form-label'>Courses title</label>
            <input type="text" name="courseTitle" value={formValue.courseTitle} onChange={handleChange} placeholder='Enter Courses title' className='input-field' id="" />
            <div className="errorMessage">{formError.courseTitle}</div>
          </div>

          <div className="form-2-fields">
            <div className="input-time">
              <div className="first-field">
                <label htmlFor="" className='form-label'>Joined&nbsp;date</label>
                <input type="text" name='joinedDate' value={formValue.joinedDate} onChange={handleChange}   placeholder='dd/mm/yyyy' className='first-input-field' />
                <div className="errorMessage">{formError.joinedDate}</div>
              </div>
              <div className="second-field">
                <label htmlFor="" className='form-label'>Completed&nbsp;Date</label>
                <input type="text" name='completedDate' value={formValue.completedDate} onChange={handleChange} placeholder='dd/mm/yyyy' className='first-input-field' />
                <div className="errorMessage">{formError.completedDate}</div>
              </div>
              <div className="time form-label">00h:00m</div>
            </div>
          </div>

          <div className='certificate-label'>
            <label htmlFor="" className='form-label' key={certificateid}>Certificate No.{certificateid}</label>
            {/* <input type="text" name="" placeholder='Enter Name' className='input-field' id="" /> */}
          </div>

        </form>
        {/* </div> */}

        <div className="trophy-img"><img src={trophy} className='trophy-photo' alt="" /></div>
        <div className="certificate-footer">
          <div className="blue-footer"><img src={certificateLogo} alt="" /></div>
        </div>
      </div>

      <div className="two-buttons">
        <button className='preview-button' type='submit' onClick={() => { setCertificatePreviewModal(true); }}><span className='preview-text'>Preview</span></button>
        <button className='certificate-save-button' form="certificateForm"><span className='certificate-save-text'  onClick={() => { dispatch(AddCertificate(formValue,certiNum)) }}>save</span></button>
      </div>

    </div>
  )
}
