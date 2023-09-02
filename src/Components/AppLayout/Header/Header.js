import React, { useState } from "react";
import "./Header.css";
import svgImage from "../../../Images/hahucloud-logo.svg";
import svgEthiopia from "../../../Images/hahucloud_ethiopian_flag.svg";
import { Switch } from "antd";
import { Link, useNavigate } from "react-router-dom";
const Header = (props) => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const darkModeHandler = () => {
    props.isDarkMode();
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={`Header ${isDarkMode ? "HeaderDark" : "HeaderLight"}`}>
      <div className="HeaderLogo">
        <img
          src={svgImage}
          alt=""
          className="SvgHahuLogo"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="LogoSeparate"></div>
        <img src={svgEthiopia} alt="" className="SvgFlagLogo" />
      </div>
      <div className="HeaderMenuList">
        <div
          onClick={() => {
            <Link to="" />;
          }}
          className="HeaderListText">
          WEBHOSTING
        </div>
        <div
          onClick={() => {
            <Link to="" />;
          }}
          className="HeaderListText">
          WORDPRESS
        </div>
        <div
          onClick={() => {
            <Link to="" />;
          }}
          className="HeaderListText">
          VPS
        </div>
        <div
          onClick={() => {
            <Link to="" />;
          }}
          className="HeaderListText">
          DOMAIN
        </div>
        <div
          onClick={() => {
            <Link to="" />;
          }}
          className="HeaderListText">
          SMS
        </div>
        <div
          onClick={() => {
            <Link to="" />;
          }}
          className="HeaderListText">
          FAQ
        </div>
        <div
          onClick={() => {
            navigate("/about");
          }}
          className="HeaderListText">
          ABOUT US
        </div>
        <div
          onClick={() => {
            navigate("/login");
          }}
          className="HeaderListText LoginButtonClass">
          LOGIN
        </div>
        <div className="DarkModeSetDiv">
          <button
            className="DarkModeSetButton"
            onClick={() => darkModeHandler()}>
            {/* {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} */}
            <Switch
              defaultChecked={false}
              checkedChildren="Dark"
              unCheckedChildren="Light"
              //   defaultChecked
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
