import * as React from "react"
import { Tweet } from "react-twitter-widgets"
import "./twitter-timeline.css"

export const TwitterTimeline = () => {
  let twitterBlockWidth = 350

  return (
      <div className="twitter-block">
        <div className="twitter-parent">
          <div className="twitter-title">Our Twitter</div>
          <div className="white-line" />
          <div className="twitter-timeline">
            <div className="tweet-element">
              <Tweet
                  tweetId="1503527480346488835"
                  options={{ width: twitterBlockWidth, height: "300px", align: "center" }}
              />
            </div>
            <div className="tweet-element">
              <Tweet
                  tweetId="1503527480346488835"
                  options={{ width: twitterBlockWidth, height: "300px", align: "center" }}
              />
            </div>
            <div className="tweet-element">
              <Tweet
                  tweetId="1503527480346488835"
                  options={{ width: twitterBlockWidth, height: "300px", align: "center" }}
              />
            </div>
            <div className="tweet-element">
              <Tweet
                  tweetId="1503527480346488835"
                  options={{ width: twitterBlockWidth, height: "300px", align: "center" }}
              />
            </div>
            <div className="tweet-element">
              <Tweet
                  tweetId="1503527480346488835"
                  options={{ width: twitterBlockWidth, height: "300px", align: "center" }}
              />
            </div>
            <div className="tweet-element">
              <Tweet
                  tweetId="1503527480346488835"
                  options={{ width: twitterBlockWidth, height: "300px", align: "center" }}
              />
            </div>
          </div>
        </div>
      </div>
  )
}