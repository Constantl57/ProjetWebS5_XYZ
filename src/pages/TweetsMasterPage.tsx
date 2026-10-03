import TweetList from '../components/TweetList';
import { useContext } from 'react'
import { TweetsContext } from '../contexts/TweetsContext'


function TweetMasterPage() {
  const { tweets } = useContext(TweetsContext)!
  const mainTweets = tweets.filter((tweet) => tweet.parentId === undefined);
  return (
      <div>
        <h2>Fil d'actualités</h2>
        <TweetList tweets={mainTweets} />
    </div>
  );
}

export default TweetMasterPage;