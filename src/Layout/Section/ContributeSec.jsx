import { Grid } from "@mui/material";
import React from "react";
import ContributeBox from "../../Components/ContributeBox";
import { contributeDataBack, contributeData } from "../../Data";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import BlueBack from "../../assets/Images/RectangleBlue.png";
import RedBack from "../../assets/Images/redBack.png";
import ManLogo from "../../assets/Images/GroupMan.png";
import './ContributeSec.css';
import '../../Mobile.css';

// const blueBackground = {
//     width: "100%",
//     height: "635px",
//     margin: "1px 0px",
// }


const ContributeSec = () => {
    return (
        <div
            className="contribute"
            id="Contribute"
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginTop: "130px",
                }}
            >
                <p
                    style={{
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        fontSize: "24px",
                    }}
                >
                    Are you want contribute?
                </p>
                <h1
                    style={{
                        fontFamily: "Poppins",
                        fontWeight: 600,
                        fontSize: "48px",
                        margin: "0px",
                    }}
                >
                    Submit your <span style={{ color: "#FC1C26" }}>own freebie</span>
                </h1>
            </div>
            <Grid
                container
                spacing={{ xs: 2, md: 1 }}
                columns={{ xs: 4, sm: 8, md: 20 }}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: 'wrap',
                    marginTop: "20px",
                }}
            >
                {contributeData.map((elem, index) => (
                    <Grid item xs={2} sm={4} md={4} style={{ display: 'flex', flexWrap: 'wrap' }} key={index}>
                        <ContributeBox icon={elem.icon} text={elem.text} inner={elem.innerIcon} />
                    </Grid>
                ))}
            </Grid>

            <div
                style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
            >
                <BsArrowLeftCircle style={{ fontSize: "30px", padding: "0px 10px" }} />
                <BsArrowRightCircle style={{ fontSize: "30px", padding: "0px 10px" }} />
            </div>
            <div
                style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}
            >
                <button
                    style={{
                        backgroundColor: "#FC1C26",
                        width: "274px",
                        height: "50.74px",
                        borderRadius: "9px",
                        border: "none",
                        color: "white",
                        fontFamily: "Poppins",
                        fontSize: "18px",
                        cursor: "pointer",
                    }}
                >
                    Submit your file
                </button>
            </div>
            <div style={{ marginTop: "100px", display: "flex" }}>
                <img src={RedBack} alt="redBack" className="redBack" />
                <div>
                    <img
                        src={BlueBack}
                        alt="blueBack"
                        className="blueBack"
                    // style={blueBackground}
                    />
                    <div
                        // style={{
                        //     position: "absolute",
                        //     top: "850px",
                        //     left: "750px",
                        //     display: "flex",
                        //     justifyContent: 'space-between',
                        //     gap: "60px",
                        // }}
                        className="contributeBox"
                    >
                        <Grid
                            container
                            spacing={{ xs: 2, md: 6 }}
                            columns={{ xs: 8, sm: 4, md: 12 }}
                            style={{ display: 'flex', gap: 70 }}
                        >
                            {contributeDataBack.map((elem, index) => (
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <ContributeBox icon={elem.icon} text={elem.text} inner={elem.innerIcon} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>
            </div>
            <img
                src={ManLogo}
                alt="manlogo"
                className="manLogo"
            // style={{ position: "absolute", left: "20px", top: "530px" }}
            />
        </div>
    );
};

export default ContributeSec;
