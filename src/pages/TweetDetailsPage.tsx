import { Link, useParams } from 'react-router-dom';
import TweetPreview from '../components/TweetPreview';
import TweetList from '../components/TweetList'
import { useContext } from 'react'
import { TweetsContext } from '../contexts/TweetsContext'




function TweetDetailsPage() {
    const {id} = useParams<{id: string}>()
    const { tweets } = useContext(TweetsContext)!
    const tweet = tweets.find((tweet) => tweet.id === id);
    const replies = tweets.filter((tweet) => tweet.parentId === id);
    if (!tweet) {
        return <p>Tweet introuvable</p>;
    }


    if (!tweet) { //Si le tweet n'existe pas (bug)
        return(
            <div>
                <p>Tweet inexistant</p>
                <Link to="/">Retour au fil principale</Link>
            </div>
        )
    }



  return (
    <div>
        <Link to="/">Accueil</Link> {'/ Tweet'} 
        <h2>Premier Tweet</h2>

        <TweetPreview tweet={tweet} linkToDetail={false}/>

        <h3>Réponses</h3>

        {replies.length > 0 ? ( // POur être sur qu'il y à au moins une réponse
            <TweetList tweets={replies} /> // Liste des tweets suivant le 1er
            ) : (
            <p>Aucune réponse pour le moment.</p>
            )
            }
        </div>
  );
}

export default TweetDetailsPage;