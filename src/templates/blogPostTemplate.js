// import React from "react"
// import { Link, graphql } from "gatsby"

// import Layout from "@components/layout"
// import SEO from "@components/seo"

// const IndexPage = ({ data, location }) => (
//   <Layout>

//     <SEO 
//       title="Home"
//       url={location.href}
//     />

//     <section className="wrapper section">
//       {data.post.slug}
//     </section>

//   </Layout>
// )

// export default IndexPage

// export const query = graphql`
//   query getCaseStudy($slug: String!) {
//     post: contentfulCaseStudy(slug: { eq: $slug }) {
//       slug
//     }
//   }
// `