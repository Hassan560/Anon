import React from "react";

import logo1 from "../../assets/Images/logo1.png";
import AboutLogo from "../../assets/Images/aboutLogo.png";
import SMLogo from "../../assets/Images/XMLID.png";

import { CiFacebook } from "react-icons/ci";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiOutlineInstagram, AiOutlinePlus } from "react-icons/ai";

import "./SectionTwo.css";
import '../../Mobile.css';

const SectionTwo = () => {
  return (
    <>
      <div className="sectionTwo" id="About">
        <div className="text"
        >
          {/* style={{ width: "410px", marginTop: "140px" }}  */}
          <div style={{ display: "flex", alignItems: "center" }} >
            <img src={logo1} alt="logo1" style={{ width: "60px" }} />
            <h3
              style={{
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "36px",
                margin: "0px",
                paddingLeft: "10px",
                paddingTop: "12px",
              }}
            >
              About Anon Detect
            </h3>
          </div>
          <p
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "175.6%",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            dictum egestas enim. Proin ex sem, volutpat et sapien id, ultrices e
            <br />
            <br />
            porttitor malesuada quis vel magna. Praesent nec volutpat diam.
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p
              style={{
                fontFamily: "Poppins",
                color: "#2544B8",
                fontSize: "18px",
                fontWeight: 500,
              }}
            >
              Join with us
            </p>
            <div style={{ marginLeft: "10px" }}>
              <CiFacebook size={25} />
              <AiOutlineInstagram size={25} />
              <TiSocialLinkedinCircular size={25} />
            </div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <button
              style={{
                backgroundColor: "#FC1C26",
                width: "172px",
                height: "50.74px",
                borderRadius: "31.29px",
                border: "none",
                color: "white",
                fontFamily: "Poppins",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              See More
            </button>
          </div>
        </div>
        <div className="aboutlogo">
          <img
            src={AboutLogo}
            alt="AboutLogo"
          />
        </div>
      </div>
      <div className="sectionTwo1">
        <div style={{ width: "430px", marginBottom: "20px" }}>
          <div
            className="sectionTwo1_Line"
          ></div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={logo1} alt="logo1" style={{ width: "60px" }} />
            <h3
              style={{
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "36px",
                margin: "0px",
                paddingLeft: "10px",
                paddingTop: "12px",
              }}
            >
              How this site works
            </h3>
          </div>
          <p
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "175.6%",
              marginLeft: "20px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            dictum egestas enim. Proin ex sem, volutpat et sapien id, ultrices e
            <br />
            <br />
            porttitor malesuada quis vel magna. Praesent nec volutpat diam.
          </p>
          <div
            style={{
              border: "1px solid black",
              height: "40px",
              width: "351px",
              marginLeft: "21px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0px 14px",
              borderRadius: "4px",
            }}
          >
            <img
              src={SMLogo}
              alt="smlogo"
              style={{ width: "15px", height: "15px" }}
            />
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "18px",
                marginRight: "90px",
              }}
            >
              Getting Started Guide
            </p>
            <AiOutlinePlus />
          </div>
        </div>
        <div className="sectionTwo1_left">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={logo1} alt="logo1" style={{ width: "60px" }} />
            <h3
              style={{
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "36px",
                margin: "0px",
                paddingLeft: "10px",
                paddingTop: "12px",
              }}
            >
              Our Terms & Conditins
            </h3>
          </div>
          <p
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "175.6%",
              marginLeft: "10px",
            }}
          >
            Our Privacy Policy Creator includes several <br /> compliance
            verification tools to help you effectively <br /> protect your
            customers privacy.
            <br />
            <br />
            While limiting your liability, all while adhering to the <br /> most
            notable state and federal privacy laws and 3rd <br /> party
            initiatives, including.
          </p>
          <p
            style={{
              fontFamily: "Poppins",
              color: "#2544B8",
              fontSize: "18px",
              fontWeight: 500,
              marginLeft: "10px",
            }}
          >
            Check Our Private Policy
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
