import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import { GlobalStyle } from "../Global/style";
import Theme from "../../theme";
import Banner from "../Banner";
import Footer from "../Footer";
import { RootWrapper } from "./style";

const Layout = ({ children, bannerData, is404 }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Theme>
      <GlobalStyle />
      <RootWrapper>
        {/* For the banner (includes header) */}
        {!is404 && (
          <Banner
            siteTitle={data.site.siteMetadata?.title || `Title`}
            bannerData={bannerData}
          />
        )}

        {/* For the main section */}
        <main>{children}</main>

        {/* For the footer */}
        <div className="footer-wrapper">
          <Footer />
        </div>
      </RootWrapper>
    </Theme>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
