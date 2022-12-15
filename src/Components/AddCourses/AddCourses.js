import React from "react";
import { Route, Routes } from "react-router";
import Addcoursecertificate from "../Addcoursecertificate/Addcoursecertificate";
import Addcourseheader from "../Addcourseheader/Addcourseheader";
import Addcoursequestion from "../AddcourseQ&A/Addcoursequestion";
import Addcoursetabbar from "../AddCoursetabbar/Addcoursetabbar";
import Addcoursevideo from "../Addcoursevideoupload/Addcoursevideo";
import "./AddCourses.css";

export default function AddCourses() {
  return (
    <div className="AddCourses">
      <Addcourseheader />
      <Addcoursetabbar />
      <Routes>

        <Route path="/addvideo" element={<Addcoursevideo />}></Route>

        <Route path="/questions" element={<Addcoursequestion />}></Route>

        <Route path="/certificate" element={<Addcoursecertificate />}></Route>

      </Routes>
    </div>
  );
}
