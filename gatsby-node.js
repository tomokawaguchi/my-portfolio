const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }, filter: { fileAbsolutePath: { regex: "/portfolio/" } }) {
          edges {
            node {
              id
              frontmatter {
                aboutDesc
                aboutHeading
                date(formatString: "MMMM YYYY")
                excerpt
                featuredImage
                projectDesc
                projectImage
                projectType
                resultDesc
                resultHeading
                slug
                subtitle
                templateKey
                thumbnailImage
                title
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = result.data.allMarkdownRemark.edges;

  // Create portfolio
  posts.forEach((post, postIndex) => {
    const previous = postIndex === 0 ? null : posts[postIndex - 1].node;
    const next = postIndex === posts.length - 1 ? null : posts[postIndex + 1].node;

    createPage({
      path: `/portfolio/${post.node.frontmatter.slug}`,
      component: path.resolve("./src/templates/portfolio-post.js"),
      context: {
        slug: post.node.frontmatter.slug,
        previous,
        next,
      },
    });
  });

  // Create Portfolio Archive
  const postsPerPage = 6;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/portfolio` : `/portfolio/${i + 1}`,
      component: path.resolve("./src/templates/portfolio-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
