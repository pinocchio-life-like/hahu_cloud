import React, { useState } from "react";
import "./ExpandableDiv.css";
const ExpandableDiv = (props) => {
  const theme = props.theme;
  const indexBool = props.index === 1 ? true : false;
  const [expanded, setExpanded] = useState(indexBool);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="expandable">
      <div className="expandable-header" onClick={toggleExpand}>
        <div
          style={{
            height: 20,
            width: 20,
            marginRight: 20,
            borderRadius: "100%",
            background: "#80BA27",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}>
          {props.index}
        </div>{" "}
        <div style={{ color: theme ? "#E3F4F4" : "#336786", fontSize: 18 }}>
          {props.header}
        </div>
      </div>
      <div
        style={{ color: "#336786", fontSize: 17 }}
        className={`expandable-content ${expanded ? "expanded" : ""}`}>
        <hr
          style={{
            border: "1px solid #f1f1f1",
            width: "100%",
            marginBottom: 20,
          }}
        />
        {props.detail}
      </div>
    </div>
  );
};

export default ExpandableDiv;
