import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { ReactComponent as LogoHeaderDesktop } from "../../../assets/LOGO-header-DESKTOP.svg";
import { ReactComponent as LogoHeaderMobile } from "../../../assets/LOGO-header-MOBILE.svg";

const Header = () => {
  return (
    <header>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "activeRoute" : undefined)}
      >
        <LogoHeaderDesktop id="Logo-Header-Desktop" />
      </NavLink>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "activeRoute" : undefined)}
      >
        <LogoHeaderMobile id="Logo-Header-Mobile" />
      </NavLink>
      <nav>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "activeRoute" : undefined)}
        >
          Accueil
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "activeRoute" : undefined)}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
