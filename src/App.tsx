import './App.css'
import { Outlet, Link } from 'react-router-dom'

function App() {
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
        <Outlet />
      </main>
    </div>
  );
}


export default App
