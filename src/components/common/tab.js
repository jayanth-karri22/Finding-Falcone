import React from "react";
import { Link } from "react-router-dom";

function Tab({activeTab,linkto,children,tab}) {
  return (
    <li className={`list-item ${activeTab===tab ? activeTab:""}`}>
      <Link
        to={linkto}
        className="links"
      >
        {children}
      </Link>
    </li>
  );
}

export default Tab;
