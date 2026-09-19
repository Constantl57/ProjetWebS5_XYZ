import { useState } from "react";
import type { JSX } from "react/jsx-runtime";
import type { Tweet } from "../types/Tweet";
import Avatar from "./Avatar";

const CONTENT_LIMIT = 180;

type TweetPreviewProps = {
    tweet: Tweet;
};

function TweetPreview({ tweet }: TweetPreviewProps): JSX.Element {
    const [isExpanded, setIsExpanded] = useState(false);
    const isTruncated = tweet.content.length > CONTENT_LIMIT;
    const displayedContent =
        isExpanded || !isTruncated
            ? tweet.content
            : `${tweet.content.slice(0, CONTENT_LIMIT)}...`;

    return (
        <article>
            <Avatar name={tweet.authorName} />
            <h2>{tweet.authorName}</h2>
            <p>@{tweet.authorHandle}</p>
            {tweet.image && (
                <img className="tweet-image" src={tweet.image.url} alt={tweet.image.alt} />
            )}
            <p>{new Date(tweet.createdAt).toLocaleString()}</p>
            <p>{displayedContent}</p>
            {isTruncated && (
                <button
                    type="button"
                    onClick={() => setIsExpanded((expanded) => !expanded)}
                >
                    {isExpanded ? "Voir moins" : "Voir plus"}
                </button>
            )}
        </article>
    );
}

export default TweetPreview;
