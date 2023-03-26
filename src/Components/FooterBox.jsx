import React from 'react'
import Logo from '../assets/Images/logo.png';

const FooterBox = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '50px', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={Logo} alt="logo" style={{ width: '30px', height: '30px' }} />
            </div>
            <div style={{ flex: 0.5 }}>
                <p style={{fontSize: '17px', fontWeight: 600}}>{props.text}</p>
                <p style={{fontSize: '16px', fontWeight: 400}}>{props.textTwo}</p>
            </div>
        </div>
    )
}

export default FooterBox