import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
    <div>
        <Link to="/about/">About Me</Link>
        <Header headerText="Magnus Hillestad" />
        <p>Homepage to come...</p>
    </div>
)
