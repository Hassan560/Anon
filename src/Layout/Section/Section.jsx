import React from "react";

import SectionLogo from "../../assets/Images/rocket.png";
import Logo from "../../assets/Images/logo1.png";
import polygon from "../../assets/Images/Polygon.png";
import polygon2 from "../../assets/Images/Polygon2.png";
import VectorLogo from "../../assets/Images/Vector.png";
import GroupLogo from "../../assets/Images/Group.png";
import EllipseLogo from "../../assets/Images/Ellipse.png";
import StarLogo from "../../assets/Images/star.png";
import DotLogo from "../../assets/Images/Untitled.png";
import { AiOutlineSearch } from "react-icons/ai";

import "./Section.css";
import "../../Mobile.css";

const Section = () => {
  return (
    <div>
      <div className="section">
        <img
          src={GroupLogo}
          alt="GroupLogo"
          style={{
            position: "relative",
            left: "50px",
            right: "55px",
            top: "26px",
          }}
        />
        <img
          src={EllipseLogo}
          alt="GroupLogo"
          className="ellipse"
        />
        <img
          src={DotLogo}
          alt="dotLogo"
          className="dot"
        />
      </div>
      <img
        src={VectorLogo}
        alt="VectorLogo"
        style={{ position: "relative", left: "137px", top: "165px" }}
      />
      <div className="section_Two">
        <div className="section__left">
          <img
            src={Logo}
            alt="Logo"
            style={{
              position: "relative",
              width: "70.3px",
              top: "40px",
              left: "322px",
            }}
          />
          <p>Anything You Like Is Free</p>
          <img
            src={polygon2}
            alt="polygon"
            style={{ position: "relative", left: "532px", top: "-50px", width: '15px' }}
          />
          <h3>
            Exciting <span>Contents</span>{" "}
          </h3>
          <img
            src={polygon}
            alt="polygon"
            style={{ position: "relative", left: "-72px", width: '15px' }}
          />
          <span>
            Our mission is to help people save <br /> money online
          </span>
          <div className="section__input">
            <input type="text" placeholder="Search Your need" />
            <AiOutlineSearch className="inputIcon" />
          </div>
          <img
            src={polygon}
            alt="polygon"
            style={{ position: "relative", left: "448px", top: "-60px", width: '15px' }}
          />
          <img
            src={StarLogo}
            alt="starLogo"
            style={{ position: "relative", left: "43px", top: "33px", width: '43px' }}
          />
          <div
            style={{ margin: "46px 16px", display: "flex", alignItems: "center" }}
          >
            <p
              style={{ width: "48px", backgroundColor: "red", height: "2px" }}
            ></p>
            <p
              style={{
                fontFamily: "DM Sans",
                fontSize: "18px",
                marginLeft: "2px",
              }}
            >
              Join Us Our Community
            </p>
          </div>
        </div>
        <div className="section__right">
          <img src={SectionLogo} alt="SectionLogo" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default Section;
