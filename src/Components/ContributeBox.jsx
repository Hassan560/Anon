import React from "react";

const ContributeBox = (props) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "267px",
        height: "240px",
        borderRadius: "8.7px",
        textAlign: "center",
        marginTop: "40px",
        gap: 10
      }}
    >
      <div style={{ position: 'relative', top: '37px', left: '28px' }}>
        <img src={props.inner} alt="inner" />
        <img
          src={props.icon}
          alt="data"
          style={{ width: "50px", position: "relative", bottom: "24px", left: '-85px' }}
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

export default ContributeBox;
