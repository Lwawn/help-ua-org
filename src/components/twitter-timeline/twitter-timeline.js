import * as React from "react"

import "./twitter-timeline.css"
import { Tweet } from "react-twitter-widgets"

const TwitterTimeline = () => (
  <div className="twitter-parent">
    <div className="section-title">Our Twitter</div>
    <div className="twitter-timeline">
      <div className="tweet-element">
        <Tweet
          tweetId="1503527480346488835"
          options={{ width: "100%", height: "310px", align: "center" }}
        />
      </div>
      <div className="tweet-element">
        <Tweet
          tweetId="1503527480346488835"
          options={{ width: "100%", height: "310px", align: "center" }}
        />
      </div>
      <div className="tweet-element">
        <Tweet
          tweetId="1503527480346488835"
          options={{ width: "100%", height: "310px", align: "center" }}
        />
      </div>
    </div>
    <div className="twitter-timeline">
      <div className="tweet-element">
        <Tweet
          tweetId="1503527480346488835"
          options={{ width: "100%", height: "310px", align: "center" }}
        />
      </div>
      <div className="tweet-element">
        <Tweet
          tweetId="1503527480346488835"
          options={{ width: "100%", height: "310px", align: "center" }}
        />
      </div>
      <div className="tweet-element">
        <Tweet
          tweetId="1503527480346488835"
          options={{ width: "100%", height: "310px", align: "center" }}
        />
      </div>
    </div>
  </div>
)

export default TwitterTimeline