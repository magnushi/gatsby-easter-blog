import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
    <div>
        <Link to="/">Home</Link>
        <Header headerText="404 - error" />
    </div>
)