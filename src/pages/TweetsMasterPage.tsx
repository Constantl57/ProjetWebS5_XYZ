import { initialTweets } from '../data/tweets';
import TweetList from '../components/TweetList';


function TweetMasterPage() {
  const mainTweets = initialTweets.filter((tweet) => tweet.parentId === undefined);
  return (
      <div>
        <h2>Fil d'actualités</h2>
        <TweetList tweets={mainTweets} />
    </div>
  );
}

export default TweetMasterPage;