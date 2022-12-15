import React, { useState } from "react";
import sidebarlogo from "../../Assets/Sidebar-VLlogo.png";
import dashboardicon from "../../Assets/dashboard_icon.png";
import dashboardiconblack from "../../Assets/dashboard_black_24dp 1.png";
import addvideoiconblack from "../../Assets/add video_icon.png";
import addvideoicon from "../../Assets/addvideosicon.png";
import studentlisticonblack from "../../Assets/studentlist_icon.png";
import studentlisticon from "../../Assets/studentlisticon.png";
import { useNavigate } from "react-router";
import "./Dashsidebar.css";

export default function Dashsidebar() {
  const [dashclick, setdashClick] = useState(false);
  const [addvideoclick, setaddvideoclick] = useState(false);
  const [studentclick, setstudentclick] = useState(false);
  const navigate = useNavigate();
  function handledash() {
    setdashClick(!dashclick);
    navigate("/home");
    setaddvideoclick(false);
    setstudentclick(false);
  }
  function handleAddvideos() {
    setaddvideoclick(!addvideoclick);

    setdashClick(false);
    setstudentclick(false);
    navigate("/home/addCourse/addvideo");
  }
  function handlestudentclick() {
    setstudentclick(!studentclick);
    setaddvideoclick(false);
    setdashClick(false);
  }

  return (
    <div className="Dashsidebar">
      <img className="sidebarlogo" src={sidebarlogo}></img>
      <div className="sidebar-buttons">
        <div
          className="dashboard-sidebutton"
          onClick={() => {
            handledash();
          }}
          style={{ backgroundColor: dashclick ? "#092963" : "white" }}
        >
          <img src={dashclick ? dashboardicon : dashboardiconblack}></img>
          <span
            className="sidebutton-text"
            style={{ color: dashclick ? "white" : "#232323" }}
          >
            Dashboard
          </span>
        </div>
        <div
          className="Addcourses-sidebutton"
          onClick={() => {
            handleAddvideos();
          }}
          style={{ backgroundColor: addvideoclick ? "#092963" : "white" }}
        >
          <img src={addvideoclick ? addvideoicon : addvideoiconblack}></img>
          <span
            className="sidebutton-text"
            style={{ color: addvideoclick ? "white" : "#232323" }}
          >
            AddCourses
          </span>
        </div>
        <div
          className="StudentsList-sidebutton"
          onClick={() => {
            handlestudentclick();
          }}
          style={{ backgroundColor: studentclick ? "#092963" : "white" }}
        >
          <img
            src={studentclick ? studentlisticon : studentlisticonblack}
          ></img>
          <span
            className="sidebutton-text"
            style={{ color: studentclick ? "white" : "#232323" }}
          >
            StudentLists
          </span>
        </div>
      </div>
    </div>
  );
}
