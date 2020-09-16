// exports.createPages = async function ({ actions, graphql }) {

//   const { data } = await graphql(`
//     query {
//       posts: allBlogPosts {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `)

//   const posts = data.posts.edges

//   posts.forEach(edge => {

//     const slug = edge.node.slug

//     actions.createPage({
//       path: `blog-posts/${slug}`,
//       component: require.resolve(`./src/templates/blogPostTemplate.js`),
//       context: { slug: slug },
//     })
//   })

// }
