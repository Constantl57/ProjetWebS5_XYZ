import './App.css'
import { Outlet, Link } from 'react-router-dom'
import { initialTweets } from './data/tweets';
import type { Tweet } from './types/Tweet';
import { useState } from 'react';
import { TweetsContext, type TweetsContextValue } from './contexts/TweetsContext';

function App() {
  const [tweets, setTweets] = useState<Array<Tweet>>(initialTweets)
  const context: TweetsContextValue = { tweets };
  return (
    <div>
      <header>
        <h1>XYZ</h1>
        <p>Découvrez les tweets des personnalitéss.</p>
        <h2>
        / <Link to="/">Accueil</Link> | <Link to="/a-propos">À propos</Link> \
        </h2>
      </header>

      <main>
        <TweetsContext.Provider value={context}> 
          <Outlet /> 
        </TweetsContext.Provider>;
      </main>
    </div>
  );
}


export default App
