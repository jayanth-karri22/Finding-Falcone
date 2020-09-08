import React, {Fragment} from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import Story from "./story";

function HomePage() {
  return (
    <Fragment>
      <Header />
      <Story />
      <Footer />
    </Fragment>
  );
}

export default HomePage;