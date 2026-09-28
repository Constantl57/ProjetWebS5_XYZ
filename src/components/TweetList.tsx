import type { Tweet } from "../types/Tweet";
import TweetPreview from "./TweetPreview";

type TweetListProps = { // défintion du type des props pour le composant TweetListt
    tweets: Array<Tweet>;
};

function TweetList({ tweets }: TweetListProps) { 
    const sortedTweets = [...tweets].sort((firstTweet, secondTweet) =>
        secondTweet.createdAt.localeCompare(firstTweet.createdAt)
    );

    return (
        <>
            <p>Nombre total de tweets : {tweets.length}</p>
            <section>
                {sortedTweets.map((tweet) => (<TweetPreview key={tweet.id} tweet={tweet} />
            ))}
            </section>
        </>
    );
}

export default TweetList;


// map fonction annonyme qui permet d'itérer sur les différents objets, le but etant d'aficher un seul et meme item sur tweet preview C'est grace à l'item qu'on crée le tweet preview. 