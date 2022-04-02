import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";
import "./description.css"

export const Description = () => (
    <div className="description-block">
        <div className="section-title">Who we are?</div>
        <div className="white-line" />
        <div className="description">
            <div className="description-left">
                <StaticImage
                    src="../../images/field.png"
                    width={690}
                    height={388}
                    alt="Field Image"
                />
            </div>

            <div className="description-right">
                <p>
                    We are a self-organized community of Ukrainian volunteers,
                    who live in the United States. Ukraine is
                    facing an unprecedented, full-scale war and we
                    can not and will not stand aside.
                </p>
            </div>
        </div>
    </div>
)