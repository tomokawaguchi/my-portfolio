import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { PortfolioSecWrapper } from "../components/Style/portfolio-post";
import FeaturedProjects from "../components/FeaturedProjects";

export default class Portfolio extends Component {
  render() {
    const { data } = this.props;
    const post = data.markdownRemark;
    const {
      excerpt,
      title,
      subtitle,
      date,
      projectDesc,
      projectImage,
      featuredImage,
      aboutHeading,
      aboutDesc,
      resultDesc,
      resultHeading,
      projectLink,
    } = post.frontmatter;

    const bannerData = {
      bannerType: "single",
      title,
      projectLink,
      subtitle,
      date,
      projectDesc,
      featuredImage,
    };

    // These are for chunk of text to separate with "\n\n" and place the each of them in <p> tags
    const aboutParas = aboutDesc.split("\n\n");
    const resultParas = resultDesc.split("\n\n");

    return (
      <Layout bannerData={bannerData}>
        <Seo title={title} description={excerpt} />

        <PortfolioSecWrapper className="site-section portfolio-about-panel">
          <div className="inner-wrapper standard-padding">
            <h2>{aboutHeading}</h2>
            {aboutParas.map((para, index) => (
              <p key={index}>{para}</p>
            ))}

            <img src={projectImage} alt="" />
          </div>
        </PortfolioSecWrapper>

        <PortfolioSecWrapper className="site-section portfolio-result-panel alter-panel">
          <div className="inner-wrapper standard-padding">
            <h2>{resultHeading}</h2>
            {resultParas.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </PortfolioSecWrapper>

        <FeaturedProjects />
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        excerpt
        title
        subtitle
        date(formatString: "MMMM YYYY")
        projectDesc
        projectImage
        featuredImage
        aboutHeading
        aboutDesc
        resultDesc
        resultHeading
        projectLink
      }
    }
  }
`;
