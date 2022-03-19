import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to our new non profit organization website.</p>
    <p>Currently under construction</p>
    <StaticImage
      src="../images/field.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Ukraine field"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
