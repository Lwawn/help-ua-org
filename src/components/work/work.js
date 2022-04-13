import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./work.css"

export const Work = () => (
    <div className="work-block">
        <div className="work-left">
            <div className="section-title">What we are doing?</div>
            <div className="white-line" />
            <div className="work-description">
                We created this community as well as fundraising
                page to help victims from russian aggression with
                delivering urgent medical supplies and humanitarian aid.
            </div>
        </div>

        <div className="work-right">
            <StaticImage
                src="../../images/war.png"
                width={690}
                height={621}
                alt="War Image"
            />
        </div>
    </div>
)