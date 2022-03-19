import * as React from "react"
import PropTypes from "prop-types"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header
    className={"header"}
    style={{
      background: `#000000`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        padding: `0.96rem`,
        margin: "auto",
      }}
    >
      <div className={"logo"}>#helpUA</div>
      <div className={"navbar"}>HELLO</div>
    </div>
    <div></div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
