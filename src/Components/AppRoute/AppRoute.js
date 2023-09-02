import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../AppPage/Home/Home";
import About from "../AppPage/About/About";
import Login from "../AppPage/Login/Login";

const AppRoute = (props) => {
  const darkModeHandler = () => {
    props.isDarkMode();
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home isDarkMode={darkModeHandler} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AppRoute;
