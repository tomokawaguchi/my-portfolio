import React, { Component, Fragment } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PortfolioPanel from "../components/PortfolioPanel";
import { PaginationWrapper, IsActive } from "../components/Style/portfolio-list";
import { resources } from "../resources/index";

export default class PortfolioList extends Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const { numPages, currentPage } = this.props.pageContext;
    const portfolioData = resources.bannerTexts["portfolio"];

    return (
      <Layout bannerData={portfolioData}>
        <Seo title={`Portfolio`} description={`A diverse range of development projects`} />

        <section className="site-section">
          <div className="inner-wrapper standard-padding">
            <PortfolioPanel portfolios={posts} />

            <PaginationWrapper id="pagination-wrapper">
              {currentPage > 4 && (
                <li className="skip-link pagination-item">
                  <Link to={`/portfolio`}>First</Link>
                </li>
              )}

              {Array.from({ length: numPages }, (_, i) => (
                <li key={i} className="pagination-item">
                  {i + 1 > currentPage - 4 && i + 1 < currentPage && (
                    <Fragment>
                      {i + 1 === 1 ? (
                        <Link to={`/portfolio`} className="portfolio-text">
                          {i + 1}
                        </Link>
                      ) : (
                        <Link to={`/portfolio/${i + 1}`} className="portfolio-text">
                          {i + 1}
                        </Link>
                      )}
                    </Fragment>
                  )}

                  {i + 1 === currentPage && (
                    <IsActive active={true} className="portfolio-text active">
                      {i + 1}
                    </IsActive>
                  )}

                  {i + 1 < currentPage + 4 && i + 1 > currentPage && (
                    <Link to={`/portfolio/${i + 1}`} className="portfolio-text">
                      {i + 1}
                    </Link>
                  )}
                </li>
              ))}

              {currentPage < numPages - 3 && (
                <li id="last-page-link" className="skip-link pagination-item">
                  <Link to={`/portfolio/${numPages}`}>Last</Link>
                </li>
              )}
            </PaginationWrapper>
          </div>
        </section>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip, filter: { fileAbsolutePath: { regex: "/portfolio/" } }) {
      edges {
        node {
          id
          frontmatter {
            thumbnailImage
            projectType
            title
            slug
          }
        }
      }
    }
  }
`;
