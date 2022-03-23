import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./donate.css"
import {Link} from "gatsby";

export const Donate = () => (
    <div className="donate-block">
        <div className="donate-left">
            <h2>Help the Ukrainian people.</h2>
            <p className="home-description">Help the Ukrainian people give way to the invader and rebuild the country after the war. </p>
            <div className="donate-btns">
                <Link to="https://google.com" target="_blank">
                    <div className="venmo">Venmo</div>
                </Link>
                <Link to="https://google.com" target="_blank">
                    <div className="fundly">Fundly</div>
                </Link>
            </div>
        </div>

        <div className="donate-right">
            <StaticImage
                src="../../images/map-ukr.svg"
                width={690}
                height={460}
                alt="Map Ukraine Image"
            />
        </div>
    </div>
)