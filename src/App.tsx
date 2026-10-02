import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <header>
        <h1>XYZ</h1>
        <p>Découvrez les tweets des personnalitéss.</p>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}


export default App
