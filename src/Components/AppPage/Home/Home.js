import React, { useState } from "react";
import "./Home.css";
import Header from "../../AppLayout/Header/Header";
import { Button, Input } from "antd";
import { SearchOutlined, CheckOutlined } from "@ant-design/icons";
import dotEt from "../../../Images/hahu_et.png";
import dotCom from "../../../Images/com.png";
import dotNet from "../../../Images/net.png";
import dotOrg from "../../../Images/org.png";
import hahuCloud from "../../../Images/hahucloud_ethiopia.svg";
import dashboard from "../../../Images/dashboard.svg";
import security from "../../../Images/security.svg";
import webServices from "../../../Images/web-programming.svg";
import Standard from "./PricingList/Standard/Standard";
import Professional from "./PricingList/Professional/Professional";
import Enterprise from "./PricingList/Enterprise/Enterprise";
import EnterprisePlus from "./PricingList/EnterprisePlus/EnterprisePlus";
import paymentOptions from "../../../Images/hahucloud_payment_options.png";
import money from "../../../Images/money-dollar-svgrepo-com.svg";
import shield from "../../../Images/shield-good-svgrepo-com.svg";
import server from "../../../Images/server-svgrepo-com.svg";
import thunder from "../../../Images/thunder-svgrepo-com.svg";
import application from "../../../Images/blackberry-work-svgrepo-com.svg";
import wordpress from "../../../Images/wordpress-svgrepo-com.svg";
import lifebuoy from "../../../Images/lifebuoy-svgrepo-com.svg";
import checkMark from "../../../Images/server-check-svgrepo-com.svg";
import techIn from "../../../Images/techin.png";
import purpose from "../../../Images/PurposeBlackEthiopia.png";
import sunPick from "../../../Images/sunpick.png";
import oromia from "../../../Images/otc.png";
import linkup from "../../../Images/linkup.png";
import ethiopia from "../../../Images/efccc.png";
import leadstar from "../../../Images/leadstar.png";
import abc from "../../../Images/abc.png";
import tekle from "../../../Images/teklehaymanot.png";
import moya from "../../../Images/moya.png";
import ashewa from "../../../Images/ashewa.png";
import ExpandableDiv from "./ExpandableDiv/ExpandableDiv";
import Footer from "../../AppLayout/Footer/Footer";

const { Search } = Input;

const suffix = (
  <SearchOutlined
    style={{
      fontSize: 16,
      color: "#fff",
    }}
  />
);

const Home = (props) => {
  const [theme, setTheme] = useState(false);
  const darkModeHandler = () => {
    props.isDarkMode();
    setTheme((prev) => !prev);
  };

  return (
    <div className="Home">
      <Header isDarkMode={darkModeHandler} />
      <div className="HomeBanner">
        <div className="TextBanner">
          <h1 style={{ paddingBottom: 0 }} className="TextBannerText">
            Ethiopian's <span style={{ color: "#40c605" }}>Premium</span>
            <br />
            Web Hosting Provider<span style={{ color: "#40c605" }}>.</span>
          </h1>
          <p
            style={{
              fontWeight: 640,
              fontSize: "17px",
              color: theme === "dark" ? "#E3F4F4" : "#5e7e8e",
            }}>
            We are using top servers for providing web hosting services in
            Ethiopia. Different hosting plans are available depending on the
            needs and requirements of yours.
          </p>
          <div style={{ display: "flex" }}>
            <h2
              style={{
                fontWeight: 700,
                fontSize: "22px",
                color: "#3c6beb",
              }}>
              Choose Your Domain Name First
            </h2>
            <h2
              style={{
                fontWeight: 700,
                fontSize: "28px",
                color: "#3c6beb",
              }}
              className="ServerPointer">
              👇
            </h2>
          </div>
          <div style={{ width: "67%", height: "60.8px" }}>
            <Search
              className="DomainSearch"
              placeholder="Search For Your Domain Here"
              allowClear
              enterButton={<>{suffix} Search</>}
              size="large"
              style={{ width: "100%" }}
              onSearch={() => {}}
            />
          </div>
          <div className="NetIconsClass">
            <img src={dotEt} alt="" className="NetIcons" />
            <img src={dotCom} alt="" className="NetIcons" />
            <img src={dotNet} alt="" className="NetIcons" />
            <img src={dotOrg} alt="" className="NetIcons" />
          </div>
        </div>
        <div className="SvgBanner">
          <div className="HeaderBannerSvg">
            <img src={hahuCloud} alt="" className="ServerWorkerSvg" />
          </div>
        </div>
      </div>
      <div
        className={`PricingList ${
          theme ? "PricingListDark" : "PricingListLight"
        }`}>
        <div
          className={`ServiceDescriptions ${
            theme ? "ServiceDescriptionsDark" : "ServiceDescriptionsLight"
          }`}>
          <div className="Simplicity">
            <img src={dashboard} alt="" className="DescriptionIcons" />
            <div className="DescriptionList">
              <h3
                style={{ marginTop: 0, color: theme ? "#E3F4F4" : "#091e42" }}>
                Simplicity
              </h3>
              <div
                style={{ color: "#42526e", marginBottom: 8, fontWeight: 600 }}>
                <CheckOutlined className="DescriptionTick" /> cPanel Control
                Panel
              </div>
              <div
                style={{ color: "#42526e", marginBottom: 8, fontWeight: 600 }}>
                <CheckOutlined className="DescriptionTick" /> User-Friendly
                Dashboard
              </div>
              <div
                style={{ color: "#42526e", marginBottom: 8, fontWeight: 600 }}>
                <CheckOutlined className="DescriptionTick" /> 200+ Free Web Apps
              </div>
              <div
                style={{ color: "#42526e", marginBottom: 8, fontWeight: 600 }}>
                <CheckOutlined className="DescriptionTick" /> Online File
                Manager
              </div>
              <div
                style={{ color: "#42526e", marginBottom: 8, fontWeight: 600 }}>
                <CheckOutlined className="DescriptionTick" /> Easy Domain
                Manager
              </div>
            </div>
          </div>
          <div className="Simplicity">
            <img src={security} alt="" className="DescriptionIcons" />
            <div className="DescriptionList">
              <h3
                style={{ marginTop: 0, color: theme ? "#E3F4F4" : "#091e42" }}>
                Safety
              </h3>
              <div
                style={{ color: "#42526e", marginBottom: 8, fontWeight: 600 }}>
                <CheckOutlined className="DescriptionTick" /> 24/7 Expert
                Support
              </div>
              <div
                style={{ color: "#42526e", marginBottom: 8, fontWeight: 600 }}>
                <CheckOutlined className="DescriptionTick" /> Automated Backups
                Dashboard
              </div>
              <div
                style={{ color: "#42526e", marginBottom: 8, fontWeight: 600 }}>
                <CheckOutlined className="DescriptionTick" /> Free SSL
                Certificate
              </div>
              <div
                style={{ color: "#42526e", marginBottom: 8, fontWeight: 600 }}>
                <CheckOutlined className="DescriptionTick" /> Brute Force
                Protection
              </div>
              <div
                style={{ color: "#42526e", marginBottom: 8, fontWeight: 600 }}>
                <CheckOutlined className="DescriptionTick" /> Refund Guarantee
              </div>
            </div>
          </div>
          <div className="Simplicity">
            <img src={webServices} alt="" className="DescriptionIcons" />
            <div className="DescriptionList">
              <h3
                style={{ color: theme ? "#E3F4F4" : "#091e42", marginTop: 0 }}>
                performance
              </h3>
              <div
                style={{ color: "#42526e", marginBottom: 8, fontWeight: 600 }}>
                <CheckOutlined className="DescriptionTick" /> 100% NVMe Storages
              </div>
              <div
                style={{ color: "#42526e", marginBottom: 8, fontWeight: 600 }}>
                <CheckOutlined className="DescriptionTick" /> Advanced Caching
                Dashboard
              </div>
              <div
                style={{ color: "#42526e", marginBottom: 8, fontWeight: 600 }}>
                <CheckOutlined className="DescriptionTick" /> Free CDN by
                Cloudflare
              </div>
              <div
                style={{ color: "#42526e", marginBottom: 8, fontWeight: 600 }}>
                <CheckOutlined className="DescriptionTick" /> PHP 5.4 and 8.1
                Support
              </div>
              <div
                style={{ color: "#42526e", marginBottom: 8, fontWeight: 600 }}>
                <CheckOutlined className="DescriptionTick" /> phpMyAdmin DB
                Control
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            fontWeight: 500,
            marginTop: 100,
            color: "#066cc5",
            background: "#0000ff21",
            borderRadius: "20px",
            alignSelf: "center",
            padding: "0px 12px",
          }}>
          Simple, Straightforward Pricing!
        </div>
        <div
          style={{
            fontWeight: 500,
            color: "#0b359c",
            alignSelf: "center",
            paddingTop: 4,
          }}>
          <h2 style={{ margin: 0, fontSize: 32 }}>
            ⚡️ Fastest Web Hosting in Ethiopia.
          </h2>
        </div>
        <div
          style={{
            fontWeight: 500,
            color: "#2bca50",
            alignSelf: "center",
            paddingTop: 25,
            letterSpacing: 1,
            fontSize: 16,
          }}>
          HAHUCLOUD IS ONE OF THE BEST ETHIOPIA'S WEB HOSTING PROVIDER.
        </div>
        <div
          style={{
            fontWeight: 500,
            color: "#5e7e8e",
            alignSelf: "center",
            paddingTop: 5,
            letterSpacing: 1,
            fontSize: 16,
          }}>
          Planning to Have Your Website? You're at The Right Place! <br />
          Check Our Affordable Web Hosting Packages and Go with The One That
          Suits Your Needs.
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "4%",
            marginRight: "4%",
            marginTop: "5%",
          }}>
          <Standard theme={theme} />
          <Professional theme={theme} />
          <Enterprise theme={theme} />
          <EnterprisePlus theme={theme} />
        </div>
      </div>
      <div className="PaymentMethods">
        <div
          style={{
            fontWeight: 500,
            marginTop: 20,
            color: "#066cc5",
            background: "#0000ff21",
            borderRadius: "20px",
            alignSelf: "center",
            padding: "0px 12px",
          }}>
          Convenient Payment Methods
        </div>
        <div
          style={{
            fontWeight: 500,
            color: "#0b359c",
            alignSelf: "center",
            paddingTop: 10,
          }}>
          <h2 style={{ margin: 0, fontSize: 20 }}>Payment Made Easy. 🙌</h2>
        </div>
        <div
          style={{
            fontWeight: 500,
            color: "#5e7e8e",
            alignSelf: "center",
            paddingTop: 20,
            letterSpacing: 1,
            fontSize: 16,
          }}>
          We made it easy for you to make payments on HahuCloud. It's Simple and
          Fast! <br />
          Buying Hosting and Domain has never been this much easy in Ethiopia.{" "}
          <br />
          Own Your dream domain in less than 3 Minutes!
        </div>
        <hr
          style={{
            width: "50%",
            border: "0.5px #0d3fe521 solid",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        />
        <img
          style={{ alignSelf: "center", width: "55%", height: 70 }}
          src={paymentOptions}
          alt=""
        />
      </div>
      <div className="HahuPros">
        <div
          style={{
            fontWeight: 600,
            color: "white",
            alignSelf: "center",
            paddingTop: 10,
          }}>
          <h2 style={{ margin: 0, fontSize: 32 }}>
            Professional Web Hosting for YOU{" "}
            <span style={{ color: "#37bc3a" }}>!</span> 😎
          </h2>
        </div>
        <div
          style={{
            fontWeight: 600,
            color: "white",
            alignSelf: "center",
            paddingTop: 20,
            letterSpacing: 1,
            fontSize: 16,
          }}>
          Join HahuCloud, Join the Pros community!
          <br />
          Extremely Fast, Secure and User-friendly website hosting for you, here
          in Ethiopia. 🇪🇹
        </div>
        <div
          style={{
            width: "42%",
            height: "60.8px",
            alignSelf: "center",
            marginTop: 40,
            letterSpacing: 1,
            fontSize: 17,
          }}>
          <Search
            className="DomainSearch"
            placeholder="Search For Your Domain Here"
            allowClear
            enterButton={<>{suffix} Search</>}
            size="large"
            style={{ width: "100%" }}
            onSearch={() => {}}
          />
        </div>
      </div>
      <div className="DescriptionCard">
        <div
          style={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "30px 30px 20px 30px",
            backgroundColor: theme ? "#010e28" : "white",
            borderRadius: 12,
            boxShadow: "0 5px 33px 0 rgba(1, 14, 40,.77)",
          }}>
          <img style={{ width: 70 }} src={money} alt="" />
          <div
            style={{
              fontWeight: 700,
              color: "#0f9aee",
              alignSelf: "center",
              paddingTop: 20,
              letterSpacing: 1,
              fontSize: 19,
            }}>
            Reasonable Price. Quality Service.
          </div>
          <div
            style={{
              fontWeight: 500,
              color: "#336786",
              alignSelf: "center",
              paddingTop: 20,
              letterSpacing: 1,
              fontSize: 14.5,
            }}>
            HahuCloud offers best quality web hosting at Reasonable Price When
            Compared to Other Companies.
          </div>
        </div>
        <div
          style={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "30px 30px 20px 30px",
            backgroundColor: theme ? "#010e28" : "white",
            borderRadius: 12,
            boxShadow: "0 5px 33px 0 rgba(1, 14, 40,.77)",
          }}>
          <img style={{ width: 70 }} src={shield} alt="" />
          <div
            style={{
              fontWeight: 700,
              color: "#0f9aee",
              alignSelf: "center",
              paddingTop: 20,
              letterSpacing: 1,
              fontSize: 19,
            }}>
            Ideal Protection
          </div>
          <div
            style={{
              fontWeight: 500,
              color: "#336786",
              alignSelf: "center",
              paddingTop: 20,
              letterSpacing: 1,
              fontSize: 14.5,
            }}>
            Your Data Is Fully Secured With Us As We Are Using Advanced
            Virtualization Platforms And Protected SSD Storage.
          </div>
        </div>
        <div
          style={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "30px 30px 20px 30px",
            backgroundColor: theme ? "#010e28" : "white",
            borderRadius: 12,
            boxShadow: "0 5px 33px 0 rgba(1, 14, 40,.77)",
          }}>
          <img style={{ width: 70 }} src={server} alt="" />
          <div
            style={{
              fontWeight: 700,
              color: "#0f9aee",
              alignSelf: "center",
              paddingTop: 20,
              letterSpacing: 1,
              fontSize: 19,
            }}>
            99.99% Uptime
          </div>
          <div
            style={{
              fontWeight: 500,
              color: "#336786",
              alignSelf: "center",
              paddingTop: 20,
              letterSpacing: 1,
              fontSize: 14.5,
            }}>
            Excellent Server Uptime to Ensure Your Website is Always Accessible
            on The World Wide Web With no Down Fall!
          </div>
        </div>
      </div>
      <div
        style={{
          fontWeight: 600,
          color: "#1983f6",
          alignSelf: "center",
          paddingTop: 20,
        }}>
        <h2 style={{ margin: 0, fontSize: 32 }}>HahuCloud's Main Features</h2>
      </div>
      <div
        style={{
          fontWeight: 500,
          color: "#5e7e8e",
          alignSelf: "center",
          textAlign: "center",
          paddingTop: 20,
          letterSpacing: 1,
          fontSize: 16,
        }}>
        Benefit from maximum availability, the best performance, and
        professional customer service.
        <br />
        Allow us the opportunity to exceed your expectations.
      </div>
      <div className="MainFeatures">
        <div
          style={{
            width: "32%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "30px 30px 20px 30px",
            borderRadius: 12,
          }}>
          <img style={{ width: 55 }} src={money} alt="" />
          <div
            style={{
              fontWeight: 700,
              color: theme ? "#E3F4F4" : "#091e42",
              alignSelf: "center",
              paddingTop: 20,
              letterSpacing: 1,
              fontSize: 19,
            }}>
            Reasonable Price. High Service.
          </div>
          <div
            style={{
              fontWeight: 500,
              color: "#336786",
              alignSelf: "center",
              paddingTop: 20,
              letterSpacing: 1,
              fontSize: 14.5,
            }}>
            We utilize top-of-the-range cloud technology, allowing us to keep
            costs down and provide 5-Star performance.
          </div>
        </div>
        <div
          style={{
            width: "32%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "30px 30px 20px 30px",
            borderRadius: 12,
          }}>
          <img style={{ width: 50 }} src={thunder} alt="" />
          <div
            style={{
              fontWeight: 700,
              color: theme ? "#E3F4F4" : "#091e42",
              alignSelf: "center",
              paddingTop: 20,
              letterSpacing: 1,
              fontSize: 19,
            }}>
            Amazing Speed
          </div>
          <div
            style={{
              fontWeight: 500,
              color: "#336786",
              alignSelf: "center",
              paddingTop: 20,
              letterSpacing: 1,
              fontSize: 14.5,
            }}>
            We provide you Free CDN Powered by Cloudflare which can help you to
            speed up your website like never before.
          </div>
        </div>
        <div
          style={{
            width: "32%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "30px 30px 20px 30px",
            borderRadius: 12,
          }}>
          <img style={{ width: 50 }} src={server} alt="" />
          <div
            style={{
              fontWeight: 700,
              color: theme ? "#E3F4F4" : "#091e42",
              alignSelf: "center",
              paddingTop: 20,
              letterSpacing: 1,
              fontSize: 19,
            }}>
            Protection and Security
          </div>
          <div
            style={{
              fontWeight: 500,
              color: "#336786",
              alignSelf: "center",
              paddingTop: 20,
              letterSpacing: 1,
              fontSize: 14.5,
            }}>
            With our amazing security features like Multi Factor Authentication,
            auto-enabled sFTP free secure hosting with Let's Encrypt.
          </div>
        </div>
      </div>
      <div className="MainFeatures">
        <div
          style={{
            width: "32%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "30px 30px 20px 30px",
            borderRadius: 12,
          }}>
          <img style={{ width: 55 }} src={application} alt="" />
          <div
            style={{
              fontWeight: 700,
              color: theme ? "#E3F4F4" : "#091e42",
              alignSelf: "center",
              paddingTop: 20,
              letterSpacing: 1,
              fontSize: 19,
            }}>
            Website Builder
          </div>
          <div
            style={{
              fontWeight: 500,
              color: "#336786",
              alignSelf: "center",
              paddingTop: 20,
              letterSpacing: 1,
              fontSize: 14.5,
            }}>
            We have the best Website Builder tool, Just Drag & Drop to build
            your own website with no coding skill.
          </div>
        </div>
        <div
          style={{
            width: "32%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "30px 30px 20px 30px",
            borderRadius: 12,
          }}>
          <img style={{ width: 50 }} src={wordpress} alt="" />
          <div
            style={{
              fontWeight: 700,
              color: theme ? "#E3F4F4" : "#091e42",
              alignSelf: "center",
              paddingTop: 20,
              letterSpacing: 1,
              fontSize: 19,
            }}>
            200+ Free Apps
          </div>
          <div
            style={{
              fontWeight: 500,
              color: "#336786",
              alignSelf: "center",
              paddingTop: 20,
              letterSpacing: 1,
              fontSize: 14.5,
            }}>
            Install Free Apps like wordpress, joomla and others from HahuCloud
            cPanel with few clicks for free
          </div>
        </div>
        <div
          style={{
            width: "32%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "30px 30px 20px 30px",
            borderRadius: 12,
          }}>
          <img style={{ width: 50 }} src={lifebuoy} alt="" />
          <div
            style={{
              fontWeight: 700,
              color: theme ? "#E3F4F4" : "#091e42",
              alignSelf: "center",
              paddingTop: 20,
              letterSpacing: 1,
              fontSize: 19,
            }}>
            Great Support
          </div>
          <div
            style={{
              fontWeight: 500,
              color: "#336786",
              alignSelf: "center",
              paddingTop: 20,
              letterSpacing: 1,
              fontSize: 14.5,
            }}>
            We are here anytime you need help 24/7/365 to assist you with any
            aspect of your hosting experience. (💬 Live Chat 9:15 AM - 5:00 PM)
          </div>
        </div>
      </div>
      <div
        className="GuaranteeClass"
        style={{ background: theme ? "#002B5B" : "#edf2f7" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "6%",
          }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontWeight: 800,
                color: "#1983f6",
                // alignSelf: "center",
                paddingLeft: 10,
              }}>
              <h2 style={{ padding: 0, margin: 0, fontSize: 38 }}>
                99.9% Uptime Guarantee.
              </h2>
            </div>
            <div
              style={{
                fontWeight: 800,
                color: "#1983f6",
                paddingLeft: 10,
                paddingTop: 10,
              }}>
              <h2 style={{ padding: 0, margin: 0, fontSize: 19 }}>
                DON'T YOU HATE DOWNTIME? WHO DOESN'T?
              </h2>
            </div>
            <div
              style={{
                fontWeight: 400,
                color: "#1983f6",
                paddingLeft: 10,
              }}>
              <h2 style={{ fontWeight: 500, margin: 0, fontSize: 19 }}>
                We Make Sure That Your Website is Always Up and Running.
              </h2>
            </div>
            <div
              style={{
                fontWeight: 400,
                color: theme ? "#E3F4F4" : "#336786",
                paddingLeft: 10,
                paddingTop: 10,
              }}>
              <h2 style={{ fontWeight: 700, margin: 0, fontSize: 18 }}>
                Transparent Uptime Reports
              </h2>
            </div>
            <div
              style={{
                fontWeight: 500,
                color: "#336786",
                alignSelf: "center",
                paddingLeft: 10,
                paddingTop: 10,
                letterSpacing: 1,
                fontSize: 14.5,
              }}>
              Our server status page is updated in real-time, providing
              immediate access to downtime or alerts from one central location.
            </div>
            <div
              style={{
                fontWeight: 500,
                color: "#336786",
                paddingLeft: 10,
                paddingTop: 15,
                letterSpacing: 1,
                fontSize: 14.5,
                display: "flex",
                alignItems: "center",
              }}>
              <div
                style={{
                  height: 12,
                  width: 12,
                  marginRight: 4,
                  borderRadius: "100%",
                  background: "#80BA27",
                }}></div>{" "}
              HahuCloud Server 1 - UK
            </div>
            <div
              style={{
                fontWeight: 500,
                color: "#336786",
                paddingLeft: 10,
                paddingTop: 10,
                letterSpacing: 1,
                fontSize: 14.5,
                display: "flex",
                alignItems: "center",
              }}>
              <div
                style={{
                  height: 12,
                  width: 12,
                  marginRight: 4,
                  borderRadius: "100%",
                  background: "#80BA27",
                }}></div>{" "}
              HahuCloud Server 1 - UK
            </div>
            <div
              style={{
                fontWeight: 500,
                color: "#336786",
                paddingLeft: 10,
                paddingTop: 10,
                letterSpacing: 1,
                fontSize: 14.5,
                display: "flex",
                alignItems: "center",
              }}>
              <div
                style={{
                  height: 12,
                  width: 12,
                  marginRight: 4,
                  borderRadius: "100%",
                  background: "#80BA27",
                }}></div>{" "}
              HahuCloud Server 1 - UK
            </div>
            <Button
              type="ghost"
              size="middle"
              style={{
                width: 180,
                marginLeft: 10,
                marginTop: 15,
                backgroundColor: "white",
                color: "#80BA27",
                fontSize: 15,
                fontWeight: 600,
                borderRadius: 20,
              }}>
              Check Server Status
            </Button>
          </div>
          <div style={{ width: "37%", height: "100%", marginLeft: 20 }}>
            <img
              style={{ width: "96%", height: "100%" }}
              src={checkMark}
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        style={{
          fontWeight: 600,
          color: "#1983f6",
          alignSelf: "center",
          paddingTop: 50,
        }}>
        <h2 style={{ margin: 0, fontSize: 32 }}>You're in Great Company</h2>
      </div>
      <div
        style={{
          fontWeight: 500,
          color: "#5e7e8e",
          alignSelf: "center",
          textAlign: "center",
          paddingTop: 20,
          letterSpacing: 1,
          fontSize: 16,
        }}>
        We're honored to provide a quality web hosting service all over
        Ethiopia. 🇪🇹
        <br />
        Below are just some of our clients.
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "7%",
          marginRight: "7%",
          marginTop: 50,
        }}>
        <img style={{ width: 143, height: 60 }} src={techIn} alt="" />
        <img style={{ width: 143, height: 60 }} src={purpose} alt="" />
        <img style={{ width: 113, height: 65 }} src={sunPick} alt="" />
        <img style={{ width: 143, height: 60 }} src={oromia} alt="" />
        <img
          style={{
            width: 143,
            height: 60,
            filter: "drop-shadow(1px 1px 0px black)",
          }}
          src={linkup}
          alt=""
        />
        <img style={{ width: 83, height: 80 }} src={ethiopia} alt="" />
        <img style={{ width: 83, height: 80 }} src={leadstar} alt="" />
        <img style={{ width: 83, height: 65 }} src={abc} alt="" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "32%",
          marginRight: "32%",
          marginTop: 30,
        }}>
        <img style={{ width: 203, height: 60 }} src={tekle} alt="" />
        <img style={{ width: 73, height: 80 }} src={moya} alt="" />
        <img style={{ width: 123, height: 60 }} src={ashewa} alt="" />
      </div>
      <div
        className="GuaranteeClass"
        style={{ background: theme ? "#002B5B" : "#edf2f7", marginTop: 80 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}>
          <div
            style={{
              fontWeight: 600,
              color: theme ? "#1983f6" : "black",
              alignSelf: "center",
              paddingTop: 50,
              paddingBottom: 40,
            }}>
            <h2 style={{ margin: 0, fontSize: 24 }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div
            className="ExpandabelDivClass"
            style={{ background: theme ? "#010e28" : "white" }}>
            <ExpandableDiv
              theme={theme}
              index={1}
              header={"What is Web Hosting?"}
              detail={
                "Web hosting is the process of renting space and bandwidth through a company so that your website will be online. It means that you can publish your website so that anybody in the world can visit your website on the Web."
              }
            />
          </div>
          <div
            className="ExpandabelDivClass"
            style={{ background: theme ? "#010e28" : "white" }}>
            <ExpandableDiv
              theme={theme}
              index={2}
              header={
                "If I have my site designed myself can I still host with you?"
              }
              detail={
                "Yes - Absolutely. We would love to host your site regardless of who designed it."
              }
            />
          </div>
          <div
            className="ExpandabelDivClass"
            style={{ background: theme ? "#010e28" : "white" }}>
            <ExpandableDiv
              theme={theme}
              index={3}
              header={"How long do I've to wait after I made a payment?"}
              detail={
                "If you pay with telebirr, Amole Wallet or with CBE Birr it will take less than 45 Seconds for your hosting & domain name to be active, but if you made the payment through bank it will take around 3-5 minutes."
              }
            />
          </div>
          <div
            className="ExpandabelDivClass"
            style={{ background: theme ? "#010e28" : "white" }}>
            <ExpandableDiv
              theme={theme}
              index={4}
              header={"How do I pay?"}
              detail={
                "We accept payments through telebirr, CBE Birr, Amole, Commercial Bank of Ethiopia, Dashen Bank, United Bank of Ethiopia and Bank of Abyssinia. Once you make the deposit and confirm your payment, your domain will be registered and your hosting account will be active and running within 5-10 minutes."
              }
            />
          </div>
        </div>
      </div>
      <div className="HelpContact">
        <div
          style={{
            color: "white",
            alignSelf: "center",
            paddingTop: 50,
            paddingBottom: 0,
          }}>
          <h1 style={{ fontWeight: 800, margin: 0, fontSize: 36 }}>
            Need Help? – Call Us!
          </h1>
        </div>
        <div
          style={{
            color: "white",
            alignSelf: "center",
            paddingTop: 50,
            paddingBottom: 40,
          }}>
          <h1 style={{ fontWeight: 800, margin: 0, fontSize: 36 }}>
            0933 75 3333
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
