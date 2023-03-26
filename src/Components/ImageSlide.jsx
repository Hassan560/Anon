import React from "react";

import ImageSlider, { Slide } from "react-auto-image-slider";

import SectionLogo from "../assets/Images/rocket.png";
import manLogo from "../assets/Images/man.png";

const ImageSlide = () => {
  return (
    <div>
      <ImageSlider effectDelay={200} autoPlayDelay={2000}>
        <Slide>
          <img
            alt="SectionLogo"
            src={SectionLogo}
            style={{
              position: "absolute",
              width: "873.91px",
              height: "873.91px",
              right: "60px",
            }}
          />
        </Slide>
        <Slide>
          <img
            alt="manLogo"
            src={manLogo}
            style={{
              position: "absolute",
              width: "873.91px",
              height: "873.91px",
              right: "60px",
            }}
          />
        </Slide>
      </ImageSlider>
    </div>
  );
};

export default ImageSlide;
