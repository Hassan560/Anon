import React from 'react'
import { AiOutlineRight } from 'react-icons/ai';

const FooterBoxTwo = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingTop: '10px' }}>
            <AiOutlineRight />
            <div style={{ flex: 0.9 }}>
                <p style={{ fontSize: '16px', fontWeight: 500 }}>{props.text}</p>
            </div>
        </div>
    )
}

export default FooterBoxTwo