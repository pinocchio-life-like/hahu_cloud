import React from "react";
import { CheckOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import cpTM from "../../../../../Images/cp.svg";
// import pyton from "../../../../../Images/pyton.svg";
import nodeJS from "../../../../../Images/nodejs.svg";
import { Button } from "antd";

const Enterprise = (props) => {
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
        <div
          style={{
            marginTop: -25,
            marginBottom: 2,
            background: props.theme ? "#010e28" : "#ffc107",
            alignSelf: "end",
            display: "flex",
            alignItems: "center",
            padding: "0 8px 2px 8px",
            borderRadius: 12,
            color: props.theme ? "white" : "black",
            fontWeight: 600,
            fontSize: 14,
          }}>
          Recommended
        </div>
        <div style={{ fontWeight: 700, fontSize: 20 }}>🚀 Enterprise</div>
        <div>Best for Business</div>
        <div>
          <span style={{ fontSize: 28, fontWeight: 700 }}>4,920 </span> Birr /
          year
        </div>
        <div style={{ fontWeight: 650 }}>410 Birr / Month</div>
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
          <CheckOutlined /> 125GB NVMe Storage
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
          <CheckOutlined /> Unlimited Bandwidth
        </div>
        <div
          style={{
            color: "#42526e",
            marginBottom: 8,
            fontWeight: 700,
          }}>
          <CheckOutlined /> Unlimited Database
        </div>
        <div
          style={{
            color: "#42526e",
            marginBottom: 8,
            fontWeight: 700,
          }}>
          <CheckOutlined /> Unlimited Email Accounts
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
          <CheckOutlined /> Host 13 Website
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
            DB
          </span>
          Server in Germany
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

export default Enterprise;
