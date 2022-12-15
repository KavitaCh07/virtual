
import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./Addcoursetabbar.css";

export default function Tabbar() {
  const navigate = useNavigate();

  return (
    <div className="tab-part">
      <div className="tabs-div-bar">
        <div className="tabs">
          <div className="tab"><NavLink  to="/home/addCourse/addvideo">Video Upload</NavLink></div>
          <div className="tab"><NavLink  to="/home/addCourse/questions">Question and Answer</NavLink></div>
          <div className="tab"><NavLink   to="/home/addCourse/certificate">Certificate Template</NavLink></div>
        </div>
      </div>
    </div>
  );

}