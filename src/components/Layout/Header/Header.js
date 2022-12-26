import React from "react";
import "./Header.css";
import { ReactComponent as LogoHeaderDesktop } from "../../../assets/LOGO-header-DESKTOP.svg";
import { ReactComponent as LogoHeaderMobile } from "../../../assets/LOGO-header-MOBILE.svg";

const Header = () => {
  return (
    <header>
        <LogoHeaderDesktop id="Logo-Header-Desktop" />
        <LogoHeaderMobile id="Logo-Header-Mobile" />
        <nav>
          <a href="/">Accueil</a>
          <a href="/about">A Propos</a>
        </nav>
    </header>
  );
};

export default Header;
