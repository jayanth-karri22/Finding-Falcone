import React from "react";
import "./index.css";
import Banner from "../../assets/images/Main-Banner.png";
import { Link } from "react-router-dom";

function Story() {
  return (
    <div className="homepage-container">
      <div className="content">
        <p className="text">
          In the planet of Lengaburu...in the distant distant galaxy of Tara B.
          After the recent war with neighbouring planet Falicornia, King Shan
          has exiled the Queen of Falicornia for 15 years.
          <br />
          <br />
          Queen Al Falcone is now in hiding. But if King Shan can find her
          before the years are up, she will be exiled for another 15 years....
          <br />
          <br />
          King Shan has received intelligence that Al Falcone is in hiding in
          one of these 6 planets - DonLon, Enchai, Jebing, Sapir, Lerbin &
          Pingasor. However he has limited resources at his disposal & can send
          his army to only 4 of these planets.
        </p>
      </div>
      <img src={Banner} alt="Queen Ai Flacone" style={{ width: "100%" }}></img>
      <Link to="findfalcone">
        <button className="btn-findfalcone">
          HELP KING SHAH FIND AL FALCONE
        </button>
      </Link>
    </div>
  );
}


export default Story;
