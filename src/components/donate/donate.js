import * as React from "react";
import {Link} from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "./donate.css"

export const Donate = () => (
    <div className="donate-block">
        <div className="donate-left">
            <h2>Help the Ukrainian people.</h2>
            <p className="home-description">Help the Ukrainian people give way to the invader and rebuild the country after the war. </p>
            <div className="donate-btns">
                <div className="donate-btns-desc">
                    <Link to="https://venmo.com/code?user_id=2361068311543808700&created=1648244729.4388251&printed=1" target="_blank" className="venmo">
                        <StaticImage
                            src="../../images/social/venmo.svg"
                            width={24}
                            height={24}
                            alt="venmo icon"
                        />
                        <div className="donate-text">Venmo</div>
                    </Link>
                </div>
                <div className="donate-btns-desc">
                    <Link to="https://fundly.com/stand-for-ukraine-2?fbclid=IwAR1CHcmwNEgiJIqRGD6euwWbY348g6IgqKVK13YPOujMX_ffu1ZFG6SZEEw" target="_blank" className="fundly">
                        <StaticImage
                            src="../../images/social/fundly.svg"
                            width={24}
                            height={24}
                            alt="fundly icon"
                        />
                        <div className="donate-text">Fundly</div>
                    </Link>
                </div>
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