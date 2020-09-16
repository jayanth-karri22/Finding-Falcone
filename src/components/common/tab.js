import React from "react";
import { Link } from "react-router-dom";

function Tab({activeTab,linkto,children,tab}) {
  return (
    <li className={`list-item ${activeTab===tab ? activeTab:""}`}>
      <Link
        to={linkto}
        style={{ textDecoration: "none", color: "rgb(200,200,200)" }}
      >
        {children}
      </Link>
    </li>
  );
}

export default Tab;
