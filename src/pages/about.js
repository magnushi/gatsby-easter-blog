import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => (
  <Container>
    <h1>About Me</h1>
    <p>Whats to know...</p>
    <User
      username="Magnus Hillestad [not me. actual image to come working on my gatsby skills]"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="CEO and Co-founder of Sanity.io. Recovering Private Equity professional. Noob developer. Love principles. Father of Pia and Daniel. Living in Piedmont, CA, USA"
    />
  </Container>
)