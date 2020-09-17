import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="section"></div>
    <div className="section"></div>
    <div className="section"></div>
    <div className="section"></div>
    <div className="section"></div>
    <div className="section"></div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
