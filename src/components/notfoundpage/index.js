import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../common/header";
import Footer from "../common/footer";
import NotFoundImg from "../../assets/images/404.jpg";

function NotFoundPage() {
  return (
    <Fragment>
      <Header />
      <div style={{ height: "80vh" }}>
        <img src={NotFoundImg} style={{width:"50%"}} alt="Page not found"/>
        <p style={{ textAlign: "center" }}>
          <Link to="/">Go to Homepage</Link>
        </p>
      </div>
      <Footer />
    </Fragment>
  );
}

export default NotFoundPage;
