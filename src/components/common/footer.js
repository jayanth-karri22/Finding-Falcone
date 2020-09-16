import React from 'react';
import "./footerstyles.css";

function Footer() {
    return (
        <div className="footer">
            <div></div>
            <p style={{fontSize:"14px"}}>&copy; 2020 geektrust.in. All rights reserved.</p>
            <a href="https://www.geektrust.in" className="geektrust-link"><p style={{fontSize:"14px"}}>GeekTrust Home</p></a>
        </div>
    )
}

export default Footer;