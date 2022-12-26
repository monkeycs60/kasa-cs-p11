import React from "react";
import "./Footer.css";
import { ReactComponent as LogoFooterDesktop } from "../../../assets/LOGO-footer-DESKTOP.svg";
import { ReactComponent as LogoFooterMobile } from "../../../assets/LOGO-footer-MOBILE.svg";

const Footer = () => {
  return (
    <footer>
      <LogoFooterDesktop id="Logo-Footer-Desktop" />
      <LogoFooterMobile id="Logo-Footer-Mobile" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
