import * as React from "react"
import SEO from "../components/seo"


import Layout from "../components/layout"
import HeroSection from "../components/HeroSection"


const IndexPage = () => (
  <Layout>
  <SEO title="Home" />
  <HeroSection/>
  </Layout>
)

export default IndexPage
