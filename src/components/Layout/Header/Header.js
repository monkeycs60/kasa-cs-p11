import React from "react";
import "./Header.css";
import { ReactComponent as LogoDesktop } from "../../../assets/LOGO.svg";
import { ReactComponent as LogoMobile } from "../../../assets/LOGO-mobile.svg";

const Header = () => {
  return (
    <header>
      <div>
        <LogoDesktop id="Logo-Desktop" />
        <LogoMobile id="Logo-Mobile" />
        <nav>
          <a href="/">Accueil</a>
          <a href="/about">À Propos</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
