import React, { Fragment } from "react";
import { Link } from "gatsby";
import Header from "../Header";

import { BannerWrapper, SingleBannerWrapper } from "./style";
import profileImg from "../../resources/images/profile-image.png";
import portfolioBanner from "../../resources/images/portfolio-banner.png";

const Banner = ({ bannerData }) => {
  const { bannerType } = bannerData;

  return (
    <BannerWrapper>
      <Header />

      <section id="banner-section" className="site-section">
        <div className="inner-wrapper">
          <div className="col col-1">
            <div className="col-inner">
              {bannerType !== "single" ? (
                <DefaultBanner bannerData={bannerData} />
              ) : (
                <SingleBanner bannerData={bannerData} />
              )}
            </div>
          </div>

          {/* Depending on the banner type, showcase the mobile frame or profile pic */}
          <div className="col col-2">
            <div className="col-inner">
              {bannerType === "single" ? (
                <SingleFeaturedImage bannerData={bannerData} />
              ) : bannerType === "mobile" ? (
                <img
                  className="portfolio-banner"
                  src={portfolioBanner}
                  alt="Tomoko Kawaguchi's portfolio"
                />
              ) : (
                <img
                  className="profile-image"
                  src={profileImg}
                  alt="Tomoko Kawaguchi's profile"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </BannerWrapper>
  );
};

// For the default banner
const DefaultBanner = ({ bannerData: { title, subtitle, summaryText } }) => (
  <Fragment>
    <h1>{title}</h1>
    <span id="title-text">{subtitle}</span>
    <p>{summaryText}</p>
  </Fragment>
);

// For the single portfolio banner
const SingleBanner = ({
  bannerData: { title, projectLink, subtitle, date, projectDesc },
}) => {
  const isGithub = /github/.test(projectLink);

  return (
    <SingleBannerWrapper>
      {/* For the breadcrumb */}
      <div className="breadcrumb-wrapper">
        <ul>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="portfolio">{title}</li>
        </ul>
      </div>

      {/* For the title */}
      <div className="header-wrapper">
        <h1>{title}</h1>

        <a
          className="icon-tooltip-wrapper"
          href={projectLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>
            {isGithub ? (
              <i className="custom-icon github">&#xe807;</i>
            ) : (
              <i className="custom-icon web-arrow">&#xe801;</i>
            )}
          </span>

          {isGithub ? (
            <span className="tooltip-span">
              Visit <br />
              github repo
            </span>
          ) : (
            <span className="tooltip-span">
              Visit <br /> website
            </span>
          )}
        </a>
      </div>

      {/* For the project type */}
      <div className="project-type">
        <span>{subtitle}</span>
        <span>{date}</span>
      </div>

      <p>{projectDesc}</p>
    </SingleBannerWrapper>
  );
};

// For the single portfolio featured image
const SingleFeaturedImage = ({ bannerData: { featuredImage, title } }) => (
  <img className="portfolio-banner" src={featuredImage} alt={title} />
);

export default Banner;
