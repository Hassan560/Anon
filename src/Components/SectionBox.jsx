import React from "react";
import { Box } from "@mui/material";
// import {boxData} from '../Data';

const SectionBox = ({ icon, text, inner }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        // width: "350px",
        height: "228px",
        borderRadius: "20px",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <div style={{ position: 'relative', top: '37px', left: '28px' }}>
        <img src={inner} alt="inner" />
        <img
          src={icon}
          alt="data"
          style={{ width: "50px", position: "relative", top: "-24px", right: '88px' }}
        />
      </div>
      <p style={{ fontFamily: "DM Sans", fontWeight: 600, marginTop: "50px" }}>
        {text}
      </p>
    </div>
  );
};

export default SectionBox;
