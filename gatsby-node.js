/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Define the template for blog post
const blogPost = path.resolve("src/templates/blogTemplate.js");
const blogPost2 = path.resolve("src/templates/templateBlog.js");


/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
              backroad
            }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })

      createPage({
        path: post.frontmatter.backroad,
        component: blogPost2,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}


// const path = require("path");
// const { createFilePath } = require("gatsby-source-filesystem");
// const { fmImagesToRelative } = require("gatsby-remark-relative-images")

// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions;
//   const blogPostTemplate = path.resolve("src/templates/blogTemplate.js");
//   // const blogPostTemplate2 = path.resolve("src/templates/templateBlog.js");

//   const result = await graphql(`
//   {
//     allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
//       nodes {
//         id
//         fields {
//           slug
//         }
//       }
//     }
//   }
// `)

//   return graphql(`
//   {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] }
//       limit: 1000
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 250)
//           html
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             backroad
//           }
//         }
//       }
//     }
//   }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors);
//     }

//     result.data.allMarkdownFiles.edges.forEach(({ node }) => {
//       createPage({
//         path: node.fields.slug,
//         component: blogPostTemplate,
//         context: {}
//       });
//       // createPage({
//       //   path: node.frontmatter.backroad,
//       //   component: blogPostTemplate2,
//       //   context: {}
//       // });
//     });
//   });
// };

// exports.onCreateNode = args => {
//   const { actions, node } = args
//   if (node.internal.type === "MarkdownRemark") {
//     const { createNodeField } = actions
//     fmImagesToRelative(node)
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }
