import React from "react";

import { Box, Divider, Grid } from "@mui/material";

import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";
import SectionBox from "../../Components/SectionBox";
import { boxData } from "../../Data";

import "./SectionOne.css";
import '../../Mobile.css';

const SectionOne = () => {
  return (
    <Box className="sectionOne">
      <Grid container spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 7, md: 14 }}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <div className="sectionOne__input">
            <input type="text" placeholder="Search Your need" />
            <AiOutlineSearch />
          </div>
        </Grid>
        <Grid item xs={2} sm={4} md={7}>
          <div
            className="sectionOne_Name"
          >
            <span
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              Freebie{" "}
              <span
                style={{
                  backgroundColor: '#FC1C26',
                  position: "relative",
                  width: "30.97px",
                  height: "2.75px",
                }}
              >
              </span>
            </span>
            <span
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
              }}
            >
              Premium
            </span>
            <span
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
              }}
            >
              Freelance
            </span>
          </div>
        </Grid>
        <Grid item xs={2} sm={4} md={2}>
          <button className="btn1">
            Select Category <AiFillCaretDown />
          </button>
        </Grid>
      </Grid>
      <Divider
        className="divid"
      />
      <Grid
        container
        spacing={{ xs: 2, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 13 }}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {boxData.map((elem, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <SectionBox icon={elem.icon} text={elem.text} back={elem.back} inner={elem.innerIcon} />
          </Grid>
        ))}
      </Grid>
      <div
        style={{ marginTop: "70px", display: "flex", justifyContent: "center" }}
      >
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
          }}
        >
          See More
        </button>
      </div>
    </Box>
  );
};

export default SectionOne;
