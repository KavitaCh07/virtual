import React from "react";
import { Routes,Route } from "react-router";

import Dashheader from "../Dashheader/Dashheader";
import Dashbody from "../Dashbody/Dashbody";
import RecentCourses from "../RecentCourses/RecentCourses";

export default function Dashhome() {
  
  return (
    <div>
      <Dashheader />
      <Routes>
        <Route path="/" element={<Dashbody />}></Route>
        <Route path="/recentlyadded" element={<RecentCourses />}></Route>
      </Routes>
    </div>
  );
}
