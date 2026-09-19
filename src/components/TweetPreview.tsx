import type { Tweet } from "../types/Tweet";


type TweetPreviewProps = { // Représente les props que le composant vas recevoirr
   tweet: Tweet; // propriete
};



function TweetPreview({ tweet }: TweetPreviewProps): JSX.Element { // destructuration pour pouvoir avoir tweet au lieu de props.tweet et type de retour JSX.Element
    return (  // Tweet --> tweet --> TweetPreview --> TSX --> HTML affiché dans le navigateur
        <article>
        <h2>{tweet.authorName}</h2>
        <p>@{tweet.authorHandle}</p>
        <p>{new Date(tweet.createdAt).toLocaleString()}</p>
        <p>{tweet.content}</p>
    </article>
    )
 }