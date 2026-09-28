import { initialTweets } from './data/tweets'
import TweetList from './components/TweetList'
import './App.css'
import { Outlet } from 'react-router'

function App() {
  return (
    <div>
      <header>
        <h1>XYZ</h1>
        <p>Découvrez les tweets des personnalitéss.</p>
      </header>

      <main>
        <Outlet />
        <TweetList tweets={initialTweets} />
      </main>
    </div>
  );
}


export default App
