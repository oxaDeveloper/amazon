import React, { useState } from "react";
import "./HeaderBottom.css";
import { Link } from "react-router-dom";
import { CloseOutlined, Menu } from "@material-ui/icons/";
import { SidebarData } from "./SidebarData";

function HeaderBottom() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="headerBottom">
      <div className="headerBottom__container">
        <Link className="menu-bars" to="#">
          <Menu onClick={showSidebar} className="headerBottom__icon" />
          <p onClick={showSidebar} className="headerBottom__title">
            All
          </p>
        </Link>
        <p className="headerBottom__title">Today's Deals</p>
        <p className="headerBottom__title">Customer Service</p>
        <p className="headerBottom__title">Registry</p>
        <p className="headerBottom__title">Gift Cards</p>
        <p className="headerBottom__title">Sell</p>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <h1 className="nav-user">
              <small className="nav-anm">A</small>mazon{" "}
              <small className="nav-anm">N</small>avbar
            </h1>
            <Link to="#" className="menu-bars">
              <CloseOutlined className="nav-icon" onClick={showSidebar} />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                  {item.icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default HeaderBottom;
