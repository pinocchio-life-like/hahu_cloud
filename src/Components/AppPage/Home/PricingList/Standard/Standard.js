import React from "react";
import { CheckOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import cpTM from "../../../../../Images/cp.svg";
// import pyton from "../../../../../Images/pyton.svg";
import nodeJS from "../../../../../Images/nodejs.svg";
import { Button } from "antd";

const Standard = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          borderBottomLeftRadius: "none",
          borderBottomRightRadius: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "15px 30px",
          background: props.theme ? "#ffc107" : "#06f",
          color: "white",
        }}>
        <div style={{ fontWeight: 700, fontSize: 20 }}>🛵 Standard</div>
        <div>Great Choice for Personal Uses</div>
        <div>
          <span style={{ fontSize: 28, fontWeight: 700 }}>3,280</span> Birr /
          year
        </div>
        <div style={{ fontWeight: 650 }}>~273 Birr / Month</div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          padding: "30px 25px",
          background: props.theme ? "#010e28" : "white",
          borderTopLeftRadius: "none",
          borderTopRightRadius: "none",
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}>
        <div
          style={{
            color: "#42526e",
            marginBottom: 8,
            fontWeight: 700,
          }}>
          <CheckOutlined /> 60GB NVMe Storage
        </div>
        <div
          style={{
            color: "#42526e",
            marginBottom: 8,
            fontWeight: 700,
          }}>
          <CheckOutlined /> 2GB RAM
        </div>
        <div
          style={{
            color: "#42526e",
            marginBottom: 8,
            fontWeight: 700,
          }}>
          <CheckOutlined /> 2 CPU Cores
        </div>
        <div
          style={{
            color: "#42526e",
            marginBottom: 8,
            fontWeight: 700,
          }}>
          <CheckOutlined /> 500GB Bandwidth
        </div>
        <div
          style={{
            color: "#42526e",
            marginBottom: 8,
            fontWeight: 700,
          }}>
          <CheckOutlined /> 10 Databases
        </div>
        <div
          style={{
            color: "#42526e",
            marginBottom: 8,
            fontWeight: 700,
          }}>
          <CheckOutlined /> 10 Email Accounts
        </div>
        <div
          style={{
            color: "#42526e",
            marginBottom: 8,
            fontWeight: 700,
          }}>
          <CheckOutlined /> Unlimited Subdomains
        </div>
        <div
          style={{
            color: "#42526e",
            marginBottom: 8,
            fontWeight: 700,
          }}>
          <CheckOutlined /> Host 3 Website
        </div>
        <div
          style={{
            color: "#42526e",
            marginBottom: 8,
            fontWeight: 700,
          }}>
          <CheckOutlined /> 1 Free .COM Domain
        </div>
        <div
          style={{
            color: "#42526e",
            marginBottom: 20,
            fontWeight: 700,
          }}>
          <img src={cpTM} alt="" style={{ width: 17, height: 17 }} /> cPanel
          Control Panel
        </div>
        <hr style={{ width: "100%" }} />
        <div
          style={{
            color: "#42526e",
            marginBottom: 8,
            marginTop: 20,
            fontWeight: 700,
          }}>
          <CheckOutlined /> Free CDN
        </div>
        <div
          style={{
            color: "#42526e",
            marginBottom: 8,
            fontWeight: 700,
          }}>
          <CheckOutlined /> Free SSL Certificate
        </div>
        <div
          style={{
            color: "#42526e",
            marginBottom: 8,
            fontWeight: 700,
          }}>
          <CheckOutlined /> Automated Daily Backups <br /> (21 Days)
        </div>
        <div
          style={{
            color: "#42526e",
            marginBottom: 8,
            fontWeight: 700,
          }}>
          <CheckOutlined /> FTP / FTPs Access
        </div>
        <div
          style={{
            color: "#42526e",
            marginBottom: 8,
            fontWeight: 700,
          }}>
          <img src={nodeJS} alt="" style={{ width: 17, height: 17 }} /> Node.js
          Supported
        </div>
        <div
          style={{
            color: "#42526e",
            marginBottom: 8,
            fontWeight: 700,
          }}>
          <img src={nodeJS} alt="" style={{ width: 17, height: 17 }} /> Python
          Supported
        </div>
        <div
          style={{
            color: "#42526e",
            marginBottom: 8,
            fontWeight: 700,
          }}>
          <span
            style={{
              color: "#42526e",
              fontWeight: 600,
              fontSize: 12,
              marginRight: 5,
            }}>
            GB
          </span>
          Server in UK
        </div>
        <Button
          style={{ marginTop: 25, fontWeight: 700, height: 40 }}
          type="primary">
          <ShoppingCartOutlined style={{ width: 24, fontSize: 17 }} />
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default Standard;
