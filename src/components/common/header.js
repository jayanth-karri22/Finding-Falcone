import React from "react";
import Tab from "./tab";
import Falcone from "../../assets/images/Al-Falcone.png";
import "./headerstyles.css";

function Header({ activeTab }) {
  return (
    <div className="header">
      <div className="header-left">
        <img src={Falcone} alt="Queen AiFalcone" className="falcon-img" />
        <h1 className="title-name">Finding Falcone</h1>
      </div>
      <ul className="header-right">
        <Tab activeTab={activeTab} linkto="/" tab="story">Story</Tab>
        <Tab activeTab={activeTab} linkto="/findfalcone" tab="findfalcone">Find Falcone</Tab>
      </ul>
    </div>
  );
}

export default Header;
