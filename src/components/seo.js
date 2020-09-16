import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({
  title = `My Starter`,
  description = `This is a description`,
  url = `site.com`,
  imageUrl = `image.com`,
  article,
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />

    {/***********  twitter cards ***********/}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={imageUrl} />

    {/***********  open graph ***********/}
    <meta property="og:url" content={url} />
    <meta property="og:type" content={article ? "article" : "website"} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={imageUrl} />
  </Helmet>
)

export default SEO
