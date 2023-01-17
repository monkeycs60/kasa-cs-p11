import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { ReactComponent as LogoHeaderDesktop } from "../../../assets/LOGO-header-DESKTOP.svg";
import { ReactComponent as LogoHeaderMobile } from "../../../assets/LOGO-header-MOBILE.svg";

const classNameResolver = ({ isActive }) => {
  return isActive ? "activeRoute" : undefined;
};

const Header = () => {
  return (
    <header>
      <NavLink to={"/"} className={classNameResolver}>
        <LogoHeaderDesktop id="Logo-Header-Desktop" />
      </NavLink>
      <NavLink to={"/"} className={classNameResolver}>
        <LogoHeaderMobile id="Logo-Header-Mobile" />
      </NavLink>
      <nav>
        <NavLink to={"/"} className={classNameResolver}>
          Accueil
        </NavLink>
        <NavLink to={"/about"} className={classNameResolver}>
          A Propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
