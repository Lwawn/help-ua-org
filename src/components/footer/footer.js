import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./footer.css"

const Footer = () => (
  <div className="footer-block">
    <div className="logo">#helpUA</div>
    <div className="social">
      <div className="inst-icon">
        <Link to="https://www.instagram.com/helpua2/" target="_blank">
          <StaticImage
            src="../../images/social/inst.svg"
            width={22}
            height={22}
            alt="Instagram"
          />
        </Link>
      </div>
      <div>
        <Link to="https://twitter.com/helpua2" target="_blank">
          <StaticImage
            src="../../images/social/tw.svg"
            width={22}
            height={22}
            alt="Twitter"
          />
        </Link>
      </div>
    </div>
  </div>
)

export default Footer
