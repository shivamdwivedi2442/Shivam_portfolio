import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import { Link } from 'react-scroll'

const navLinks = [
  { label: 'About', file: 'About.jsx', dot: 'bg-amber-500' },
  // { label: 'Projects', file: 'Projects.jsx', dot: 'bg-teal-500' },
  { label: 'Skills', file: 'Skills.jsx', dot: 'bg-violet-400' },
  // { label: 'Experience', file: 'Experience.jsx', dot: 'bg-amber-500' },
  { label: 'Contact', file: 'Contact.jsx', dot: 'bg-teal-500' },
]

export default function Navigation({ isDark, toggleTheme, isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-dark-card/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="font-mono text-lg font-semibold flex items-center">
            <h2 className="font-display font-bold gradient-text">Shivam coder</h2>
            <span className="cursor-blink text-fuchsia-600">_</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.label.toLowerCase()}
                smooth={true}
                duration={500}
                className="group flex items-center gap-2 px-3 py-2 border-b-2 border-transparent hover:border-purple-500 font-mono text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${link.dot} opacity-70 group-hover:opacity-100`}></span>
                {link.label}
                <span className="text-gray-400 dark:text-gray-600"></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-1 animate-slideUp">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.label.toLowerCase()}
                smooth={true}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/20 font-mono text-sm cursor-pointer transition-colors"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${link.dot}`}></span>
                {link.label}
                <span className="text-gray-400 dark:text-gray-600"></span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
