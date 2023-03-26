import React, { useEffect, useState } from "react";

// components
import Nav from "./NavLinks";
import NavMobile from "./NavMobile";

// react scroll
import { Link } from "react-scroll";

// logo
// import Logo from "../../assets/Images/logo.png";
import image from "../../assets/Images/image.png";

// headercss
import "./Header.css";
import '../../Mobile.css';

const Header = () => {
  // changing navbar color state
  const [navbarColor, setNavbarColor] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <header className={navbarColor ? "head active" : "head"}>
      <div className="header_container">
        <Link
          to="Home"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className="transition-all duration-300"
        >
          <div style={{ display: "flex", alignItems: "center", }}>
            <img src={image} alt="img" />
          </div>
        </Link>
        <Nav />

        <button className="btn1">Explore</button>
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
