import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Signin";
import SignUp from "./components/Signup";
import Tabel from "./components/Tabel";
import Calendar from "./components/Calendar";
import UserProfile from "./components/userprofile";
import Logout from "./components/Logout";
import Form from "./components/Form";
import Ecommerce from "./components/Ecommerce";
import Task from "./components/task";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Tabel" element={<Tabel />} />
          <Route path="/Calendar" element={<Calendar />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Ecommerce" element={<Ecommerce />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
