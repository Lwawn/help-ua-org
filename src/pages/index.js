import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Home } from "../components/home/home";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Home />
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
