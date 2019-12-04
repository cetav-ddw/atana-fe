import React from "react"
import SEO from "../components/seo"
import ContainerHWW from "../sections/how-we-work/how-we-work"
import OurPackages from "../sections/our-packages/our-packages"
import Header from "../sections/Header/header"
import OurMission from "../sections/our-mission/our-mission"
import Footer from "../sections/footer-section/footer"
import "../styles/global.scss"

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Home" />
    <Header />
    <ContainerHWW />
    <OurPackages />
    <OurMission />
    <Footer />
  </React.Fragment>
)

export default IndexPage
