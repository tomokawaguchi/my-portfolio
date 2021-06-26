import React from "react";
import PortfolioPanel from "../PortfolioPanel";
import { FeaturedWrapper } from "./style";
import { FetchFeatured } from "../hooks/use-query";

const FeaturedProjects = () => {
  const { edges } = FetchFeatured();

  return (
    <FeaturedWrapper className="site-section">
      <div className="inner-wrapper standard-padding">
        <div className="title-wrapper">
          <span className="decoration" />
          <h2>Some of my latest work</h2>
          <span className="decoration" />
        </div>

        <PortfolioPanel portfolios={edges} />
      </div>
    </FeaturedWrapper>
  );
};

export default FeaturedProjects;
