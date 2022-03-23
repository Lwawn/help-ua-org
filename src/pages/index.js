import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Home } from "../components/home/home"
import { Donate } from "../components/donate/donate"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Home />

    <Donate />
  </Layout>
)

export default IndexPage
