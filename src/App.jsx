import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import './index.css'

export default function App() {
  const [isDark, setIsDark] = useState(True)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="bg-white dark:bg-dark-bg text-gray-900 dark:text-gray-100 min-h-screen">
        <Navigation isDark={isDark} toggleTheme={toggleTheme} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <main>
          <Hero />
          <About />
          {/* <Projects /> */}
          <Skills />
          {/* <Experience />
          <Certifications /> */}
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  )
}
