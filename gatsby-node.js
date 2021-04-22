const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      blogs: allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "post" } } } }
        }
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  console.log(result);
  result.data.blogs.edges.forEach((blog) => {
    console.log(blog.node.slug);
    createPage({
      path: `/blogs/${blog.node.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: blog.node.slug,
      },
    });
  });
};
