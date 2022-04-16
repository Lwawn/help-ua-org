import * as React from "react"
import { Tweet } from "react-twitter-widgets"
import "./twitter-timeline.css"

export const TwitterTimeline = () => (
  <div className="twitter-parent">
    <div className="section-anchor" id="our-twitter" />
    <div className="section-title">Our twitter</div>
    <div className="white-line" />
    <div className="twitter-timeline">
      <div className="tweet-element">
        <Tweet
          tweetId="1511704538750853130"
          options={{ width: "100%", height: "310px", align: "center" }}
        />
      </div>
      <div className="tweet-element">
        <Tweet
          tweetId="1511714889579974660"
          options={{ width: "100%", height: "310px", align: "center" }}
        />
      </div>
      <div className="tweet-element">
        <Tweet
          tweetId="1511712722316050435"
          options={{ width: "100%", height: "310px", align: "center" }}
        />
      </div>
    </div>
  </div>
)
