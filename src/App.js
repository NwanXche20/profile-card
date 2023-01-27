import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/home";
import ProfileCard from "./components/profile";
import Register from "./components/register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile-card" element={<ProfileCard />} />
    </Routes>
  );
};

export default App;
