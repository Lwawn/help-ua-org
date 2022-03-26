import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Home } from "../components/home/home"
import { Donate } from "../components/donate/donate"
import { Contact } from "../components/contact/contact";
import { Work } from "../components/work/work";
import { Description } from "../components/description/description";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Home />
    <Description />
    <Work />
    <Contact />
    <Donate />

  </Layout>
)

export default IndexPage
