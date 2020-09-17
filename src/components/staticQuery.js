import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const StaticQuery = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>This is an example of a static query from a component.</p>
    </div>
  )
}

export default StaticQuery