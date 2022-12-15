import React from "react";
import "./Addcourseheader.css";
import userimage from "../../Assets/profilePicture.png";
import publishtoweb from "../../Assets/Publishtoweb.png";

export default function Addcourseheader() {
  return (
    <div>
      <div className="AddCoursesheader">
        <p className="AddCoursesheader-text">Add Courses</p>
        <div className="AddCourseheader-div">
          <div className="Publishtoweb">
            <img src={publishtoweb}></img>
          </div>
          <div className="dashuser-div">
            <div className="user-img">
              <img src={userimage}></img>
            </div>
            <span className="user-name">Manjay Gupta</span>
          </div>
        </div>
      </div>
    </div>
  );
}
