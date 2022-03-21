import * as React from "react"
import PropTypes from "prop-types"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header-block">
      <div className="logo">#helpUA</div>
        <div className="navbar">
            <p>About</p>
            <p>Our Twitter</p>
            <p>Contact us</p>
        </div>
        <div className="btn-donate">Help Ukraine</div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
