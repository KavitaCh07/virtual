import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import VerifyOtp from "./Components/VerifyOtp/VerifyOtp";
import NewPasswordPage from "./Pages/newPasswordPage/newPassword";
import AdminLogin from "./Pages/AdminLogin/AdminLogin";
import Dashboard from "./Pages/Home/Home";
import Home from "./Pages/Home/Home";
import DeleteModal from './Components/modal/deleteModal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/forgotpassword" exact element={<ForgotPassword />} />
          <Route path="/verifyotp" element={<VerifyOtp />}></Route>
          <Route path="/" exact element={<AdminLogin />}></Route>
          <Route path="/newpass" exact element={<NewPasswordPage />}></Route>
          <Route path="/deleteModal" exact element={<DeleteModal />}></Route>
          <Route path="/Home/*" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
