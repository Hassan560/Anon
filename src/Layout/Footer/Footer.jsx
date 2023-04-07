import { Grid } from '@mui/material';
import React from 'react'
import BlueLogo from '../../assets/Images/blueBackground.png';
import Building from '../../assets/Images/Building.png';
import FooterBox from '../../Components/FooterBox';
import FooterBoxTwo from '../../Components/FooterBoxTwo';
import { TfiEmail } from 'react-icons/tfi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { TiSocialTwitter } from 'react-icons/ti';
import { AiFillFacebook } from 'react-icons/ai';
import FooterBoxThree from '../../Components/FooterBoxThree';
import Logo from '../../assets/Images/footerLogo.png';
import LogoOne from '../../assets/Images/footerlogo1.png';
import LogoTwo from '../../assets/Images/footerLogo2.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='foter' id="Contact">
            <img src={BlueLogo} alt="blueLogo" width='100%' />
            <div className='footerOne'>
                <h1>Sign Up For Out Newsletter</h1>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div
                    style={{
                        height: "70px",
                        width: "510px",
                        marginLeft: "21px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0px 5px",
                        borderRadius: "3px",
                        backgroundColor: "white",
                        boxShadow: "0px 2px 20px rgba(0, 0, 0, 0.19)",
                        marginTop: '30px'
                    }}
                >
                    <p
                        style={{
                            fontFamily: "Poppins",
                            fontSize: "18px",
                            marginLeft: '35px',
                            // marginRight: "302px",
                            color: "#C0C0C0",
                        }}
                    >
                        <input type="text" placeholder='Enter your Email' style={{
                            border: 'none',
                            outline: 'none',
                            fontSize: '18px'
                        }} />
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
                            // marginLeft: '248px'
                        }}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div style={{ position: 'relative', top: '-290px', backgroundColor: '#2A2B2E', width: '100%', height: '500px' }}>
                <div
                    style={{
                        position: 'absolute',
                        top: '500px',
                        backgroundColor: '#FC1C26',
                        width: '100%',
                        color: 'white',
                        fontSize: "12px",
                        height: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >All Right Reserved Anon Detect </div>
                <img src={Building} alt="buildingLogo" style={{ width: '100%', opacity: 0.1, height: '100%' }} />

                <Grid container
                    spacing={{ xs: 2, md: 2 }}
                    columns={{ xs: 4, sm: 8, md: 20 }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        position: 'relative',
                        top: '-400px',
                        color: 'white',
                        fontFamily: 'Poppins'
                    }}>
                    <Grid item xs={2} sm={4} md={4}>
                        <FooterBox text="All Freebies" textTwo="100% Verified" />
                        <FooterBox text="200k+" textTwo="Members" />
                        <FooterBox text="30000+" textTwo="Total Downloads" />
                        <FooterBox text="50000+" textTwo="Have item" />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <FooterBoxTwo text="Freebie Publications" />
                        <FooterBoxTwo text="Premium Products" />
                        <FooterBoxTwo text="Freelance Services" />
                        <FooterBoxTwo text="Privacy Policy" />
                        <button style={{
                            backgroundColor: "#FC1C26",
                            width: "172px",
                            height: "40.74px",
                            borderRadius: "1.81px",
                            border: "none",
                            color: "white",
                            fontFamily: "Poppins",
                            fontSize: "15px",
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            paddingRight: '40px',
                            cursor: 'pointer'
                        }}>
                            <TfiEmail />
                            Join Us 1.5M
                        </button>
                        <button style={{
                            paddingRight: '60px',
                            marginTop: '15px',
                            backgroundColor: "#F6610C",
                            width: "172px",
                            height: "40.74px",
                            borderRadius: "1.81px",
                            border: "none",
                            color: "white",
                            fontFamily: "Poppins",
                            fontSize: "15px",
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}>
                            <AiOutlineInstagram />
                            Follow Us
                        </button>

                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <FooterBoxTwo text="Offer Your Item" />
                        <FooterBoxTwo text="News" />
                        <FooterBoxTwo text="About Anon Detect" />
                        <FooterBoxTwo text="Contact Us" />
                        <button style={{
                            backgroundColor: "#4099FF",
                            width: "172px",
                            height: "40.74px",
                            borderRadius: "1.81px",
                            border: "none",
                            color: "white",
                            fontFamily: "Poppins",
                            fontSize: "15px",
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            paddingRight: '35px',
                            cursor: 'pointer'
                        }}>
                            <TiSocialTwitter />
                            Follow Us 68K
                        </button>
                        <button style={{
                            paddingRight: '40px',
                            marginTop: '15px',
                            backgroundColor: "#3B5998",
                            width: "172px",
                            height: "40.74px",
                            borderRadius: "1.81px",
                            border: "none",
                            color: "white",
                            fontFamily: "Poppins",
                            fontSize: "15px",
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}>
                            <AiFillFacebook />
                            Like Us 300K
                        </button>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <FooterBoxThree icon={Logo} text="Feb 2, 2021" textTwo="How to make lorem ipsum diet do lorem amet." />
                        <FooterBoxThree icon={LogoOne} text="Feb 2, 2021" textTwo="How to make lorem ipsum diet do lorem amet." />
                        <FooterBoxThree icon={LogoTwo} text="Feb 2, 2021" textTwo="How to make lorem ipsum diet do lorem amet." />
                    </Grid>

                </Grid>
            </div >
        </div>
    )
}

export default Footer