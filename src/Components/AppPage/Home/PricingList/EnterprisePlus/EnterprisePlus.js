import React from "react";
import { CheckOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import cpTM from "../../../../../Images/cp.svg";
// import pyton from "../../../../../Images/pyton.svg";
import nodeJS from "../../../../../Images/nodejs.svg";
import { Button } from "antd";

const EnterprisePlus = (props) => {
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
          background: props.theme ? "#010e28" : "#010e28",
          color: "white",
        }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ fontSize: 20 }}>💎</div>
          <div
            style={{
              fontWeight: 800,
              fontSize: 20,
              background:
                "linear-gradient(to right, #f79533, #f37055, #a166ab)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            {" "}
            Enterprise PLUS
          </div>
        </div>

        <div>Best for Large Websites</div>
        <div>
          <span style={{ fontSize: 28, fontWeight: 700 }}>5,820 </span> Birr /
          year
        </div>
        <div style={{ fontWeight: 650 }}>485 Birr / Month</div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          padding: "30px 25px",
          background: props.theme ? "#ffc107" : "white",
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
          <CheckOutlined /> 250GB NVMe Storage
        </div>
        <div
          style={{
            color: "#42526e",
            marginBottom: 8,
            fontWeight: 700,
          }}>
          <CheckOutlined /> 4GB DDR4 RAM
        </div>
        <div
          style={{
            color: "#42526e",
            marginBottom: 8,
            fontWeight: 700,
          }}>
          <CheckOutlined /> 4 CPU Cores
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
          <CheckOutlined /> Host 15 Website
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
          <CheckOutlined /> Automated 6x Daily <br /> Backups (90 Days)
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

export default EnterprisePlus;
