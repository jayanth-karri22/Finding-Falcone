import React from 'react';
import Falcone from '../../assets/images/Al-Falcone.png';
import "./headerstyles.css";

function Header() {
    return (
        <div className="header">
            <div className="headerLeft">
                <img src={Falcone} alt="Queen AiFalcone" className="falconImg"/>
                <h1 className="title-name">Finding Falcone</h1> 
            </div>
        
            <ul className="headerRight">
                <li className="listItem active">Story</li>
                <li className="listItem">Find Falcone</li>
            </ul>
        </div>
    )
}

export default Header;