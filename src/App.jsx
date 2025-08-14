import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Chatbot from './components/Chatbot'
import Footer from './components/Footer'

function App() {
  // Use basename only in production (GitHub Pages)
  const basename = import.meta.env.PROD ? '/PersonalWebsite' : ''
  
  return (
    <Router basename={basename}>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  )
}

export default App
