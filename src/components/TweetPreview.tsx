import { useState } from "react";
import type { JSX } from "react/jsx-runtime";
import type { Tweet } from "../types/Tweet";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

const CONTENT_LIMIT = 180;

type TweetPreviewProps = {
    tweet: Tweet;
    linkToDetail?: boolean;
};

function TweetPreview({ tweet, linkToDetail = true}: TweetPreviewProps): JSX.Element {
    const [isExpanded, setIsExpanded] = useState(false);
    const isTruncated = tweet.content.length > CONTENT_LIMIT;
    const displayedContent =
        isExpanded || !isTruncated
            ? tweet.content
            : `${tweet.content.slice(0, CONTENT_LIMIT)}...`;
    const isFirstLevel = !tweet.parentId;

    return (
        <article>
            {linkToDetail?(<Link to={`/tweets/${tweet.id}`}> Voir la discution </Link>): null}
            <Avatar name={tweet.authorName} />
            <h2>{tweet.authorName}</h2>
            <p>@{tweet.authorHandle}</p>
            {tweet.image && (
                linkToDetail? (
                    <Link to ={`/tweets/${tweet.id}`}>
                        <img className="tweet-image" src={tweet.image.url} alt={tweet.image.alt} />
                    </Link>
                ):(
                    <img className="tweet-image" src={tweet.image.url} alt={tweet.image.alt} />
                )   
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
