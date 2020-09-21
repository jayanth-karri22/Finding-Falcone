import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

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

Tab.propTypes = {
  activeTab:PropTypes.string,
  tab:PropTypes.string,
  linkto:PropTypes.string.isRequired,
  children:PropTypes.string.isRequired
}

export default Tab;
