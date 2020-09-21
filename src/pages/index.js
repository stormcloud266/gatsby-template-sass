import React from "react"
import { Link } from "gatsby"

import Layout from "@components/layout"
import SEO from "@components/seo"

const IndexPage = () => (
  <Layout>

    <SEO title="Home" />

    <section className="wrapper section">
      <Link to="/examples">Examples Page</Link>
    </section>

  </Layout>
)

export default IndexPage
