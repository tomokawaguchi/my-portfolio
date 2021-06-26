import React from "react";
import { Link } from "gatsby";
import { PortfolioList } from "./style";

const PortfolioPanel = ({ portfolios }) => {
  return (
    <PortfolioList>
      {portfolios.map(({ node }) => {
        const { thumbnailImage, title, projectType, slug } = node.frontmatter;

        return (
          <article key={node.id} className="portfolio-item">
            <Link className="portfolio-inner" to={`/portfolio/${slug}`}>
              <div className="thumbnail-wrapper">
                <img src={thumbnailImage} alt={title} />
              </div>

              <div className="text-icon-wrapper">
                <div className="text-wrapper">
                  <h3>{title}</h3>
                  <span>{projectType}</span>
                </div>

                <i className="custom-icon icon-wave_arrow-right">&#xe804;</i>
              </div>
            </Link>
          </article>
        );
      })}
    </PortfolioList>
  );
};

export default PortfolioPanel;
