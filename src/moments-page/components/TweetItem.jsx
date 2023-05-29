import React from "react";
import "./TweetItem.style.scss"
import TweetCommentItem from "./TweetCommentItem";

const TweetItem = (tweet) => (
    <div className="tweet-item">
        <img src={tweet.sender.avatar} className="sender-avatar"/>
        <div className="tweet-info">
            <div className="sender-name">{tweet.sender.userName}</div>
            <div className="tweet-content">{tweet.content}</div>
            <div className="tweet-images">
                {
                    tweet.images?.map((image) => (
                        <img src={image.url} className="tweet-image"/>
                    ))
                }
            </div>
            <div className="tweet-comments">
                {
                    tweet.comments?.map((comment) => (
                        TweetCommentItem(comment)
                    ))
                }
            </div>
        </div>   
    </div>
);

export default TweetItem;