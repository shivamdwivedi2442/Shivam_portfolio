import { FiDownload, FiExternalLink } from 'react-icons/fi'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6 animate-slideInLeft">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm <span className="font-semibold text-fuchsia-600 dark:text-fuchsia-400">Shivam Dwivedi</span>, a passionate <span className="font-semibold">Frontend Developer</span> dedicated to building responsive, accessible, and highly interactive user interfaces.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in <span className="font-semibold">React.js, JavaScript, HTML5, CSS3, and Tailwind CSS</span>. I have a keen eye for modern UI/UX design and a strong foundation in integrating RESTful APIs to bring web applications to life.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I've developed intuitive frontend experiences for real-world projects like a Doctor Appointment Booking System and an E-Learning Platform, and I'm eager to contribute, learn, and grow as a frontend engineer.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <a href="/resume.pdf"
                download="Shivam_Dwivedi_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 gradient-btn rounded-lg hover:shadow-lg hover:shadow-fuchsia-500/30 transition-all transform hover:scale-105 font-medium"
              >
                <FiDownload /> Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/shivam-dwivedi-08b45b334/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-fuchsia-600 dark:border-fuchsia-400 text-fuchsia-600 dark:text-fuchsia-400 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/20 font-medium transition-colors"
              >
                View LinkedIn <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}