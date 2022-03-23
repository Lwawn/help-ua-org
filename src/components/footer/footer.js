import * as React from "react"
import "./footer.css"
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

const Footer = () => (
    <div className="footer-block">
        <div className="logo">#helpUA</div>
        <div className="social">
            <div className="inst-icon">
                <Link to="https://www.instagram.com/helpua2/" target="_blank">
                    <StaticImage
                        src="../../images/social/inst.png"
                        width={22}
                        height={22}
                        alt="Instagram"
                    />
                </Link>
            </div>
            <div>
                <Link to="/page-2/" target="_blank">
                    <StaticImage
                        src="../../images/social/tw.png"
                        width={22}
                        height={22}
                        alt="Twitter"
                    />
                </Link>
            </div>
        </div>
        {/*<Link to="/page-2/">Go to page 2</Link> <br />*/}
    </div>
)

export default Footer