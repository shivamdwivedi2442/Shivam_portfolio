import { FiDownload, FiExternalLink } from 'react-icons/fi'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6 animate-slideInLeft">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm <span className="font-semibold text-fuchsia-600 dark:text-fuchsia-400">Shivam Dwivedi</span>, a Full Stack Web Developer passionate about building responsive, scalable web applications using the <span className="font-semibold">MERN Stack</span>.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in <span className="font-semibold">React.js, Node.js, Express.js, MongoDB</span>, REST APIs, and have a strong foundation in Java, JavaScript, HTML, CSS, and modern web development.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I've developed real-world projects like a Doctor Appointment Booking System and an E-Learning Platform, and I'm eager to contribute, learn, and grow as a software engineer.
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

          <div className="grid grid-cols-2 gap-6 animate-slideInRight">
            <div className="card card-hover text-center p-8">
              <div className="text-4xl font-display font-bold gradient-text mb-2">4+</div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Real-world Projects</p>
            </div>
            <div className="card card-hover text-center p-8">
              <div className="text-4xl font-display font-bold gradient-text mb-2">100+</div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">LeetCode Problems</p>
            </div>
            <div className="card card-hover text-center p-8">
              <div className="text-4xl font-display font-bold gradient-text mb-2">4</div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Certifications</p>
            </div>
            <div className="card card-hover text-center p-8">
              <div className="text-4xl font-display font-bold gradient-text mb-2">8.47</div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">College CGPA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
