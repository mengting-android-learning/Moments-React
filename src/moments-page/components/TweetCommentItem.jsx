import React from "react";
import "./TweetCommentItem.style.scss"

const TweetCommentItem = (comment) => (
    <div className="tweet-comment-item">
        <div className="comment-sender-name">{comment.sender.userName}</div>
        <div>: {comment.content}</div>
    </div>
);

export default TweetCommentItem;