import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./contact.css"

export const Contact = () => (
  <div className="contact-block" id="contact-us">
    <div className="section-anchor"  />
    <div className="contact-left">
      <StaticImage
        src="../../images/marik_smol.jpg"
        alt="Avatar Icon"
      />
      <p className="contact-text">
        Hi, my name is Marian. Ukraine is facing an unprecedented, full-scale
        war. We created this fundraising to help victims from russian aggression
        with delivering urgent medical supplies and humanitarian aid.
      </p>
    </div>

    <div className="contact-right">
      <div className="contact-phone">
        <StaticImage
          src="../../images/social/phone.svg"
          width={40}
          height={40}
          alt="Phone Icon"
          style={{ height: "40px" }}
        />
        <a href="tel:+16312689510">
          <p>+1-631-268-9510</p>
        </a>
      </div>
      <div className="contact-email">
        <StaticImage
          src="../../images/social/mail.svg"
          width={40}
          height={40}
          alt="Email Icon"
          style={{ height: "40px" }}
        />
        <a href="mailto:info@helpua.one">
          <p>info@helpua.one</p>
        </a>
      </div>
    </div>
  </div>
)
