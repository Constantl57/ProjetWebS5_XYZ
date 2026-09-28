import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import TweetMasterPage from './pages/TweetMasterPage.tsx'
import TweetDetailPage from './pages/TweetDetailPage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<TweetMasterPage />} />

        </Route>
      </Routes>
      
    </BrowserRouter>
  </StrictMode>,
)
