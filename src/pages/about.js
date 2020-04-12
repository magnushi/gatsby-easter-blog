import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div>
    <Link to="/">Home</Link>
    <Header headerText="About me" />
    <p>Co-founder of Sanity.io. Recovering Finance professional. Noob developer. Father of Pia and Daniel</p>
    <p>Linkedin     /magnushillestad</p>
    <p>Twitter      @MHillestad</p>
    
  </div>
)