import { initialTweets } from './data/tweets'
import TweetList from './components/TweetList'
import './App.css'
import { Outlet } from 'react-router'

function App() {

  return (
      <section id="center">
        <h1>Bienvenue sur le fil d'actualités</h1>
        <p>Découvrez les tweets des personnalitéss.</p>
        <Outlet />
        <TweetList tweets={initialTweets} />
      </section>
  )
}

export default App
