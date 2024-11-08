import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './layout/Header.jsx'
import Footer from './layout/footer.jsx'
import { ScoreProvider } from './Providers/ScoreProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <ScoreProvider>
      <App />
    </ScoreProvider>
    <Footer/>
  </StrictMode>,
)
