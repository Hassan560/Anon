import React from 'react'

const FooterBoxThree = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingTop: '25px' }}>
            <img src={props.icon} alt="logo" />
            <div style={{ flex: 0.9 }}>
                <p style={{ fontSize: '16px', fontWeight: 500, color: '#FC1C26', margin: '0px' }}>{props.text}</p>
                <p style={{ fontSize: '17px', fontWeight: 600, margin: '2px 0px' }}>{props.textTwo}</p>
            </div>
        </div>
    )
}

export default FooterBoxThree