import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';

const socialLinks = [
  { href: 'https://github.com/Lucky783594', icon: FiGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/shivam-dwivedi-08b45b334/', icon: FiLinkedin, label: 'LinkedIn' },
  { href: 'mailto:4u.fearedits@gmail.com', icon: FiMail, label: 'Email', email: true }
]

const SocialLinks = ({ centered = false }) => (
  <div className={`flex ${centered ? 'justify-center' : ''} gap-4 pt-4`}>
    {socialLinks.map((link) => (
      <a
        key={link.label}
        href={link.href}
        target={!link.email ? '_blank' : undefined}
        rel={!link.email ? 'noopener noreferrer' : undefined}
        className="p-3 rounded-lg hover:bg-fuchsia-100 dark:hover:bg-fuchsia-900/30 text-gray-600 dark:text-gray-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors cursor-pointer"
        aria-label={link.label}
      >
        <link.icon size={24} />
      </a>
    ))}
  </div>
)

const StatusBadge = () => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
    </span>
    Open to opportunities
  </div>
)

const CodeCard = () => (
  <div className="rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl shadow-black/20 bg-[#0d1117] font-mono text-[13px] sm:text-sm">
    <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-white/10">
      <span className="w-3 h-3 rounded-full bg-[#f2a33c]"></span>
      <span className="w-3 h-3 rounded-full bg-[#5eead4]"></span>
      <span className="w-3 h-3 rounded-full bg-[#b4a7f5]"></span>
      <span className="ml-3 text-xs text-gray-400">about-me.jsx</span>
    </div>
    <div className="p-5 leading-relaxed text-gray-300 overflow-x-auto">
      <p><span className="text-[#b4a7f5]">const</span> <span className="text-[#5eead4]">developer</span> <span className="text-gray-500">=</span> {'{'}</p>
      <p className="pl-4"><span className="text-gray-400">name:</span> <span className="text-[#f6ad55]">"Shivam Dwivedi"</span>,</p>
      <p className="pl-4"><span className="text-gray-400">role:</span> <span className="text-[#f6ad55]">"Frontend Developer"</span>,</p>
      <p className="pl-4">
        <span className="text-gray-400">stack:</span> [<span className="text-[#f6ad55]">"React"</span>, <span className="text-[#f6ad55]">"JavaScript"</span>, <span className="text-[#f6ad55]">"Tailwind"</span>, <span className="text-[#f6ad55]">"CSS3"</span>],
      </p>
      <p className="pl-4"><span className="text-gray-400">status:</span> <span className="text-[#f6ad55]">"available for internships & full-time roles"</span></p>
      <p>{'}'}<span className="cursor-blink text-grey-400">▍</span></p>
    </div>
  </div>
)

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-fuchsia-50 to-white dark:from-dark-surface dark:to-dark-bg overflow-hidden">
      <div className="absolute inset-0 dot-grid text-gray-900 dark:text-gray-100 opacity-[0.04] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto">

        <div className="md:hidden space-y-8 mb-4 animate-fadeIn">
          <div className="flex justify-center items-center">
            <div className="relative w-56 h-56 mt-2 p-2">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-400 to-teal-400 opacity-25 blur-3xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-fuchsia-100 dark:border-gray-700 shadow-xl">
                <img src="/photo.jpg" alt="Shivam Dwivedi" className="w-full h-full object-cover object-center" />
              </div>
            </div>
          </div>

          <div className="space-y-6 text-center">
            <div className="space-y-2">
              <h2 className="section-eyebrow">Welcome to my portfolio</h2>
              <h1 className="text-5xl font-display font-extrabold">
                <span className="gradient-text">Shivam Dwivedi</span>
              </h1>
              <div className="text-2xl font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <span>I'm a</span>

                <span className="text-fuchsia-600 font-semibold">
                  <Typewriter
                    options={{
                      strings: [
                        'Frontend Developer',
                        'React.js Developer',
                        'Learning Fullstack'
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                      delay: 75,
                    }}
                  />
                </span>
              </div>
              <div className="flex justify-center pt-1"><StatusBadge /></div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I specialize in building responsive, accessible, and user-centric web interfaces, transforming ideas into engaging digital experiences.
            </p>

            <CodeCard />

            <div className="flex flex-col gap-4 pt-2">
              <Link to="projects" smooth={true} duration={500} className="inline-flex items-center justify-center gap-2 px-6 py-3 gradient-btn rounded-lg cursor-pointer transform hover:scale-[1.02] transition-transform">
                View My Work <FiArrowRight />
              </Link>
              <Link to="contact" smooth={true} duration={500} className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-fuchsia-600 dark:border-fuchsia-400 text-fuchsia-600 dark:text-fuchsia-400 rounded-lg hover:bg-fuchsia-50 dark:hover:bg-fuchsia-900/20 cursor-pointer transition-colors">
                Get in Touch
              </Link>
            </div>

            <SocialLinks centered={true} />
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center animate-fadeIn">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className='section-eyebrow'>Welcome To my portfolio</h2>
              <h1 className="text-5xl md:text-6xl font-display font-extrabold leading-tight">
                <span className="gradient-text">Shivam Dwivedi</span>
              </h1>
              <div className="text-2xl font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <span>I'm a</span>

                <span className="text-fuchsia-600 font-semibold">
                  <Typewriter
                    options={{
                      strings: [
                        'Frontend Developer',
                        'React.js Developer',
                        'Learning Fullstack'
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                      delay: 75,
                    }}
                  />
                </span>
              </div>
              <div className="pt-1"><StatusBadge /></div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              I specialize in building responsive, accessible, and user-centric web interfaces, transforming ideas into engaging digital experiences.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="projects" smooth={true} duration={500} className="inline-flex items-center gap-2 px-6 py-3 gradient-btn rounded-lg cursor-pointer transform hover:scale-[1.02] transition-transform">
                View My Work <FiArrowRight />
              </Link>
              <Link to="contact" smooth={true} duration={500} className="inline-flex items-center gap-2 px-6 py-3 border-2 border-fuchsia-600 dark:border-fuchsia-600 text-fuchsia-600 dark:text-fuchsia-600 rounded-lg hover:bg-black-500 dark:hover:bg-fuchsia-900/20 cursor-pointer transition-colors">
                Get in Touch
              </Link>
            </div>

            <SocialLinks centered={false} />
          </div>

          <div className="space-y-6 animate-slideUp">
            <CodeCard />
            <div className="flex justify-center">
              <div className="relative w-40 h-40">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-400 to-teal-400 opacity-20 blur-2xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden glow">
                  <img src="/photo.jpg" alt="Shivam Dwivedi" className="w-full h-full object-cover object-center glow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}