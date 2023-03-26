import React, { useState } from "react";

const ContactBox = (props) => {
  const [col, setCol] = useState(null)
  return (
    <div
      onMouseEnter={() => setCol('red')}
      onMouseLeave={() => setCol('white')}
      style={{
        backgroundColor: "white",
        height: "209px",
        textAlign: "center",
        marginTop: "40px",
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.16)',
        cursor: 'pointer',
        border: `1px solid ${col}`
      }}
    >
      <div
        style={{
          position: "relative",
          top: "30px",
          width: "110px",
          height: "105px",
          margin: "0px auto",
        }}
      >
        <img
          src={props.icon}
          alt="data"
          style={{ width: "80px", position: "relative", top: "20px" }}
        />
      </div>
      <p
        style={{
          fontFamily: "DM Sans",
          fontWeight: 600,
          marginTop: "50px",
          fontSize: "18px",
        }}
      >
        {props.text}
      </p>
    </div>
  );
};

export default ContactBox;
