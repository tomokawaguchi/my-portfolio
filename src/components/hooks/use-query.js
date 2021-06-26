import { useStaticQuery, graphql } from "gatsby";

export const FetchFeatured = () => {
  const result = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { isFeatured: { eq: true } } }) {
        edges {
          node {
            id
            frontmatter {
              isFeatured
              slug
              thumbnailImage
              title
              projectType
            }
          }
        }
      }
    }
  `);
  return result.allMarkdownRemark;
};
