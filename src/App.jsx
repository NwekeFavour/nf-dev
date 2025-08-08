import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/aboutMe'
import NotFound from './components/notfound'
import PageLoader from './components/pageLoader'
function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (

    <>
      {loading ? (
        <PageLoader onComplete={() => setLoading(false)} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  )
}

export default App
