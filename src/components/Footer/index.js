import React from "react";

import { FooterWrapper } from "./style";
import MenuItems from "../MenuItems";

const Footer = () => {
  return (
    <FooterWrapper className="site-section">
      <div className="inner-wrapper">
        <div className="copyright">© {new Date().getFullYear()} Tomoko Kawaguchi</div>

        <MenuItems type={"footer"} />
      </div>
    </FooterWrapper>
  );
};

export default Footer;
