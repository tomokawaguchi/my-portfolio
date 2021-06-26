import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { HOME_LINK } from "../../constants";
import { HeaderWrapper } from "./style";
import MenuItems from "../MenuItems";
import SocialItems from "../SocialItems";
import siteLogo from "../../resources/images/tk-logo-transparent.png";
import siteLogoWhite from "../../resources/images/tk-logo-bg.png";

const Header = ({ siteTitle }) => {
  const [menuActive, setMenu] = useState(false);
  const [scrollActive, setHeaderScroll] = useState(false);
  let currentSiteLogo = siteLogo;

  // If the menu is active then switch the site logo
  if (menuActive) currentSiteLogo = siteLogoWhite;

  const handleMenu = () => {
    setMenu((prev) => {
      const body = document.querySelector("body");

      if (prev) {
        body.classList.remove("active-menu");
      } else {
        body.classList.add("active-menu");
      }

      return !prev;
    });
  };

  useEffect(() => {
    const body = document.querySelector("body");
    const siteHeader = document.querySelector("#site-header");
    const headerHeight = siteHeader.offsetHeight;

    // Scroll listener to adjust header position
    window.addEventListener("scroll", function (e) {
      let scrollElement = e.target.scrollingElement;
      if (!scrollElement) scrollElement = e.target.documentElement;

      const scrollTop = scrollElement.scrollTop;

      if (scrollTop > headerHeight) {
        if (!scrollActive) {
          setHeaderScroll(true);
          body.style.cssText = `padding-top: ${headerHeight}px`;
        }
      } else {
        if (scrollActive) {
          setHeaderScroll(false);
          body.style.cssText = `padding-top: 0`;
        }
      }
    });
  }, [scrollActive]);

  return (
    <HeaderWrapper
      id="site-header"
      className="site-section"
      menuActive={menuActive}
      scrollActive={scrollActive}
    >
      <div className="inner-wrapper">
        <Link to={HOME_LINK} className="logo-wrapper">
          <img src={currentSiteLogo} alt={siteTitle} />
        </Link>

        <div className="right-wrapper">
          <MenuItems type={"header"} />
          <SocialItems />

          {/* <i class="custom-icon icon-sharp_arrow">&#xe803;</i> */}
        </div>

        <button className="hamburger-menu" onClick={() => handleMenu()}>
          <i className="custom-icon icon-menu">&#xe800;</i>
        </button>
      </div>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
