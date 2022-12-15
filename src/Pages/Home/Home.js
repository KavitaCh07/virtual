import React from "react";
import "./Home.css";

import Dashhome from "../../Components/Dashhome/Dashhome";
import { Routes, Route} from "react-router";

import Dashsidebar from "../../Components/Dashsidebar/Dashsidebar";
import AddCourses from "../../Components/AddCourses/AddCourses";

export default function Home() {
  return (
    <div>
      <div className="Home">
        <Dashsidebar />
        <div className="Homebody">
          <Routes>
            <Route path="/*" element={<Dashhome />}></Route>
            <Route path="/addCourse/*" element={<AddCourses />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
