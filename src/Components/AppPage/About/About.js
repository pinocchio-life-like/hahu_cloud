import React from "react";
import Header from "../../AppLayout/Header/Header";

const About = (props) => {
  const darkModeHandler = () => {
    props.isDarkMode();
  };
  return (
    <div className="About">
      <Header isDarkMode={darkModeHandler} />
    </div>
  );
};

export default About;
