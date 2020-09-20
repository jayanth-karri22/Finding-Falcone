import React from "react";
import { Link } from "react-router-dom";
import Header from "../common/header";
import Footer from "../common/footer";
import NotFoundImg from "../../assets/images/404.jpg"

function NotFoundPage() {
  return (
    <div>
         
      <img src={NotFoundImg} />
      <p style={{ textAlign: "center" }}>
        <Link to="/">Go to Homepage</Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
