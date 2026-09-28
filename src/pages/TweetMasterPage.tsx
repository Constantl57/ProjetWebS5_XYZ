import { initialTweets } from '../data/tweets';
import TweetList from '../components/TweetList';

function TweetMasterPage() {
  return (
    <div>
      <h1>Bienvenue sur le fil d'actualités</h1>
      <p>Découvrez les tweets des personnalités.</p>
      <TweetList tweets={initialTweets} />
    </div>
  );
}

export default TweetMasterPage;