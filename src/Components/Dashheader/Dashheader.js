import React from "react";
import userimage from "../../Assets/profilePicture.png";
export default function Dashheader() {
  return (
    <div>
      <div className="Dash-header">
        <p className="dashboard-text">Dashboard</p>
        <div className="dashuser-div">
          <div className="user-img">
            <img src={userimage}></img>
          </div>
          <span className="user-name">Manjay Gupta</span>
        </div>
      </div>
    </div>
  );
}
