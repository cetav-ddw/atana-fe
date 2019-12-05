import React from "react"
import Greetings from "../../components/greetings/greetings"
import Footer from "../../components/footer/footer"
import "./footer.scss"

const HomeFooter = () => {
  return (
    <section className="contact">
      <div className="section__wrapper">
        <Greetings />
      </div>
      <Footer />
    </section>
  )
}

export default HomeFooter
