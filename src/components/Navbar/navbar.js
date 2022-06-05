import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Sidebar from "../Sidebar/sidebar";

import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const location = useLocation();
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: faCog,
    },
  ];

  const [showSideBar, setShowSideBar] = useState(false);

  const closeSideBar = () => {
    setShowSideBar(false);
  };

  return (
    <>
      <div className="navbar container">
        <Link to="/" className="logo">
          F<span>oo</span>diesHub
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              className={location.pathname === link.path ? "active" : ""}
              to={link.path}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div onClick={() => setShowSideBar(true)} className="sidebar-btn">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSideBar && <Sidebar close={closeSideBar} links={links} />}
    </>
  );
}
