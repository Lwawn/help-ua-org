import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Home } from "../components/home/home"
import { Donate } from "../components/donate/donate"
import { Contact } from "../components/contact/contact";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Home />
    <Contact />
    <Donate />
  </Layout>
)

export default IndexPage
