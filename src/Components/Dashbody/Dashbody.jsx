import React from 'react';
import { useState } from 'react';
import './Dashbody.css';
import { useNavigate } from 'react-router';
import recentlyaddedvideo1 from "../../Assets/recentlyvideosmall1.png";
import recentlyaddedvideo2 from "../../Assets/recentlyaddedsmall2.png";
import deleteicon from "../../Assets/deletesmall.png";
import playsmallicon from "../../Assets/playsmallicon.png";
import tick from "../../Assets/tick.png";
import totalstudents from "../../Assets/Totalstudents_icon.png";
import Overallresult from "../../Assets/Overallresult_icon.png";
import totalcourses from "../../Assets/Totalcourses_icon.png";
import Totalstudenttable from '../Totalstudenttable/Totalstudenttable';

export default function Dashbody() {
    const navigate = useNavigate();

    const [value, onChange] = useState("");
    const [time, onChangeTime] = useState("");

    const date = new Date();

    setInterval(function () {
        today();
    }, 1000);

    setInterval(function () {
        todayTime();
    }, 1000);


    const today = () => {
        onChange(
            `${date.toLocaleString("en-us", {
                weekday: "short",
            })} ${date.getDate()}, ${date.toLocaleString("en-us", {
                month: "short",
            })} ${date.getFullYear()} `
        );
    };

    const todayTime = () => {
        onChangeTime(
            ` ${date.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                // second: "numeric",
                hour12: true,
            })}`
        );
    };

  return (
    <div>
        <div className="dashboard-today-details">
        <div className="Today-details">
          <span className="Today">Today</span>
          <span className="today-time">{value}| {time}</span>
        </div>
        <div className="recentlyaddedsummary">
          <div className="recently-added-header-div">
            <span className="recently-added-text">Recently Courses Added</span>
            <div className='viewAll' onClick={() => {navigate("/home/recentlyadded");}}>View all</div>
          </div>
          <div className="recentlyaddedsummaryvideos-div">
            <div className="recentlyaddedsummaryvideodetails-div">
              <div className="recentlyaddedvideo">
                <img src={recentlyaddedvideo1}></img>
                <img src={playsmallicon} className="playsmallbutton"></img>
              </div>
              <span className="recentlyaddedvideoname">
                Poster Design Tutorial
              </span>
              <img src={tick}></img>
            </div>
            <div className="recentlyaddeddelete-icon">
              <img src={deleteicon}></img>
            </div>
          </div>
          <div className="recentlyaddedsummaryprogressvideos-div">
            <div className="recentlyaddedsummaryprogressvideodetails-div">
              <div className="recentlyaddedprogressvideo">
                <img src={recentlyaddedvideo2}></img>
              </div>
              <div className="recentlyaddedprogressdiv">
                <span className="recentlyaddedvideoprogressname">
                  Graphic Design Part-1
                </span>
                <div className="recentlyaddedvideoprogressbar">
                  <div className="recentlyaddedvideoprogressbarongoing"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Totaldetails-div">
        <div className="dashTotalStudents-div">
          <div className="dashTotalstudents">
            <span className="totalstudents-text">Total Students</span>
            <span className="totalstudents-count">1500</span>
          </div>
          <div className="totalstudents-icon">
            <img src={totalstudents}></img>
          </div>
        </div>
        <div className="dashOverallresults-div">
          <div className="dashOverallresults">
            <span className="Overallresults-text">Overall Result</span>
            <span className="Overallresults-count">75%</span>
          </div>
          <div className="Overallresults-icon">
            <img src={Overallresult}></img>
          </div>
        </div>
        <div className="dashTotalCourses-div">
          <div className="dashTotalCourses">
            <span className="totalCourses-text">Total Courses</span>
            <span className="totalCourses-count">500</span>
          </div>
          <div className="totalCourses-icon">
            <img src={totalcourses}></img>
          </div>
        </div>
      </div>
      <Totalstudenttable />
    </div>
  )
}
