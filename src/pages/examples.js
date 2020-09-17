import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import StaticQuery from "../components/staticQuery"

const IndexPage = ({ data, location }) => (
  <Layout>

    <SEO 
      title="Home"
      description="My example description"
      url={location.href}
      imageUrl={'https://url.to/image.png'}
    />

    <BackgroundImage
      Tag="section"
      className="mt-10 section"
      fluid={[
        `linear-gradient(rgba(255,255,255, 0.9), rgba(255,255,255, 0.9))`,
        data.image.childImageSharp.fluid
      ]}
    >
      <div className="flex flex--2 wrapper">
        <Img fluid={data.image.childImageSharp.fluid}></Img>
        <StaticQuery />
      </div>
    </BackgroundImage>

  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    image: file(relativePath: { eq: "frank-mckenna.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`