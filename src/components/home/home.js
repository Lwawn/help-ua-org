import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./home.css"

export const Home = () => (
  <div className="home-block">
    <div className="home-left">
      <p className="text-blue">Stop War!</p>
      <h1>Help Ukraine</h1>
      <p className="home-description">
        On the morning of February 24, Russia launched a large-scale invasion of
        Ukraine along the entire length of the common border and from the
        territory of Belarus. Ukraine is fiercely resisting.
      </p>
      <div className="btn-donate">Donate</div>
      <p className="home-text">
        You can <span className="home-text-blue">stop russian agression!</span>
      </p>
    </div>

    <div className="home-right">
      <StaticImage
        src="../../images/kyiv-freedom.png"
        alt="Ukraine Free Image"
        style={{ width: "100%" }}
      />
    </div>
  </div>
)
