import React from "react";
import {
  MobileOutlined,
  PhoneOutlined,
  SendOutlined,
  MailOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import "./Footer.css";
import facebook from "../../../Images/facebook-1-svgrepo-com.svg";
import telegram from "../../../Images/telegram-svgrepo-com.svg";
import instagram from "../../../Images/instagram-svgrepo-com.svg";
import twitter from "../../../Images/twitter-svgrepo-com.svg";
import linkedin from "../../../Images/linkedin-svgrepo-com.svg";
import paymentOptions from "../../../Images/hahucloud_payment_options.png";
const Footer = () => {
  return (
    <div className="Footer">
      <div
        style={{
          padding: "4% 8%",
          display: "flex",
          justifyContent: "space-between",
        }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "white", fontWeight: 700, marginBottom: 15 }}>
            Services
          </div>
          <div
            style={{
              color: "#8dadc1",
              fontWeight: 600,
              fontSize: 14,
              paddingBottom: 5,
            }}>
            Ethiopian Web Hosting
          </div>
          <div
            style={{
              color: "#8dadc1",
              fontWeight: 600,
              fontSize: 14,
              paddingBottom: 5,
            }}>
            General Purpose Servers
          </div>
          <div
            style={{
              color: "#8dadc1",
              fontWeight: 600,
              fontSize: 14,
              paddingBottom: 5,
            }}>
            Ethiopian Web Design
          </div>
          <div
            style={{
              color: "#8dadc1",
              fontWeight: 600,
              fontSize: 14,
              paddingBottom: 5,
            }}>
            SSL Certificates
          </div>
          <div
            style={{
              color: "#8dadc1",
              fontWeight: 600,
              fontSize: 14,
              paddingBottom: 5,
            }}>
            Domain Registration
          </div>
          <div
            style={{
              color: "#8dadc1",
              fontWeight: 600,
              fontSize: 14,
              paddingBottom: 5,
            }}>
            Domain Transfer
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "white", fontWeight: 700, marginBottom: 15 }}>
            Company
          </div>
          <div
            style={{
              color: "#8dadc1",
              fontWeight: 600,
              fontSize: 14,
              paddingBottom: 5,
            }}>
            About us
          </div>
          <div
            style={{
              color: "#8dadc1",
              fontWeight: 600,
              fontSize: 14,
              paddingBottom: 5,
            }}>
            FAQ
          </div>
          <div
            style={{
              color: "#8dadc1",
              fontWeight: 600,
              fontSize: 14,
              paddingBottom: 5,
            }}>
            VAT
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "white", fontWeight: 700, marginBottom: 15 }}>
            Policy
          </div>
          <div
            style={{
              color: "#8dadc1",
              fontWeight: 600,
              fontSize: 14,
              paddingBottom: 5,
            }}>
            Privacy Policy
          </div>
          <div
            style={{
              color: "#8dadc1",
              fontWeight: 600,
              fontSize: 14,
              paddingBottom: 5,
            }}>
            Cookie Policy
          </div>
          <div
            style={{
              color: "#8dadc1",
              fontWeight: 600,
              fontSize: 14,
              paddingBottom: 5,
            }}>
            Refund Policy
          </div>
          <div
            style={{
              color: "#8dadc1",
              fontWeight: 600,
              fontSize: 14,
              paddingBottom: 5,
            }}>
            Terms of Service
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "white", fontWeight: 700, marginBottom: 15 }}>
            Other links
          </div>
          <div
            style={{
              color: "#8dadc1",
              fontWeight: 600,
              fontSize: 14,
              paddingBottom: 5,
            }}>
            Server Status ⚡️
          </div>
          <div
            style={{
              color: "#8dadc1",
              fontWeight: 600,
              fontSize: 14,
              paddingBottom: 5,
            }}>
            Announcements
          </div>
          <div
            style={{
              color: "#8dadc1",
              fontWeight: 600,
              fontSize: 14,
              paddingBottom: 5,
            }}>
            Knowledgebase
          </div>
          <div
            style={{
              color: "#8dadc1",
              fontWeight: 600,
              fontSize: 14,
              paddingBottom: 5,
            }}>
            .et Domain Name
          </div>
          <div
            style={{
              color: "#8dadc1",
              fontWeight: 600,
              fontSize: 14,
              paddingBottom: 5,
            }}>
            hahu.io SMS Gateway
          </div>
          <div
            style={{
              color: "#8dadc1",
              fontWeight: 600,
              fontSize: 14,
              paddingBottom: 5,
            }}>
            Tender Alert iChereta
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "white", fontWeight: 700, marginBottom: 10 }}>
            <MobileOutlined /> +251 940 63 6550
          </div>
          <div style={{ color: "white", fontWeight: 700, marginBottom: 10 }}>
            <PhoneOutlined /> +251 939 43 9998
          </div>
          <div style={{ color: "white", fontWeight: 700, marginBottom: 10 }}>
            <SendOutlined /> @pinocchio_life_like
          </div>
          <div style={{ color: "white", fontWeight: 700, marginBottom: 10 }}>
            <MailOutlined /> icbr19fl@gmail.com
          </div>
          <div style={{ color: "white", fontWeight: 700, marginBottom: 10 }}>
            <HomeOutlined /> Kilinto, 13 Kutir Cell
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <img
          style={{ width: 29, height: 29, marginLeft: 5 }}
          src={facebook}
          alt=""
        />
        <img
          style={{ width: 26, height: 26, marginLeft: 5 }}
          src={telegram}
          alt=""
        />
        <img
          style={{ width: 34, height: 34, marginLeft: 5 }}
          src={instagram}
          alt=""
        />
        <img
          style={{ width: 32, height: 32, marginLeft: 5 }}
          src={twitter}
          alt=""
        />
        <img
          style={{ width: 32, height: 32, marginLeft: 5 }}
          src={linkedin}
          alt=""
        />
      </div>
      <hr
        style={{ width: "84%", border: "0.6px solid #f1f1f1", marginTop: 15 }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignSelf: "center",
          margin: "0 8%",
        }}>
        <div style={{ fontSize: 13, color: "#8dadc1" }}>
          © 2017-2023 HahuCloud™ — Ethiopia's Web Hosting.
        </div>
        <img style={{ width: "17%", height: 20 }} src={paymentOptions} alt="" />
      </div>
    </div>
  );
};

export default Footer;
