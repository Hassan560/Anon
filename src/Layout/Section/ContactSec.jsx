import { Grid } from "@mui/material";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ContactBox from "../../Components/ContactBox";
import Question from "../../Components/Question";
import laptopMan from '../../assets/Images/laptopMan.png'
import diamond from '../../assets/Images/diamond.png'
import FreeLogo from '../../assets/Images/Free.png'

import './ContactSec.css';
import '../../Mobile.css';

const ContactSec = () => {
  return (
    <div
      className="contact"
      id="DMCA"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "130px",
          gap: "25px",
        }}
      >
        <h1
          style={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "48px",
            margin: "0px",
          }}
        >
          Hello how can <span style={{ color: "#FC1C26" }}>we help?</span>
        </h1>
        <div
          style={{
            height: "70px",
            width: "900px",
            marginLeft: "21px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 34px",
            borderRadius: "3px",
            backgroundColor: "white",
            boxShadow: "0px 2px 20px rgba(0, 0, 0, 0.19)",
            // marginTop: "30px",
          }}
        >
          <AiOutlineSearch style={{ color: "#C0C0C0" }} />
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "18px",
              marginRight: "530px",
              color: "#C0C0C0",
            }}
          >
            <input type="text" placeholder="Ask any question..." style={{ outline: 'none', border: 'none' }} />
          </p>
          <button
            style={{
              backgroundColor: "#FC1C26",
              width: "124px",
              height: "53.74px",
              borderRadius: "2px",
              border: "none",
              color: "white",
              fontFamily: "Poppins",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </div>
        <p
          style={{
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "24px",
          }}
        >
          Or choose a catagory to find quickly your need
        </p>
      </div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 14 }}
        style={{ display: "flex", justifyContent: 'center', padding: '0px 120px' }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <ContactBox text="Freebie Services" icon={FreeLogo} />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <ContactBox text="Premium Services" icon={diamond} />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <ContactBox text="Freelance Services" icon={laptopMan} />
        </Grid>
      </Grid>
      <div className="contact_faq">
        <Question />
      </div>
    </div>
  );
};

export default ContactSec;
