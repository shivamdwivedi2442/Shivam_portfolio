import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Prescripto - Doctor Appointment Booking',
      description: 'Developed a full-stack doctor appointment booking platform. Implemented specialty-based doctor filtering, date and time-slot selection functionality, and dynamic doctor profile pages for streamlined healthcare discovery.',
      tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
      image: '🏥',
      link: 'https://prescripto-frontend-7no6.onrender.com/contact',
      github: '',
      featured: true
    },
    {
      id: 2,
      title: 'MERN E-Learning Platform',
      description: 'Full-featured e-learning platform with role-based access for Admin, Instructor, and Student users. Built RESTful APIs for course management, enrollment, quizzes, and certificate generation. Automated assessments and real-time progress monitoring.',
      tech: ['MERN Stack', 'JWT Auth', 'MongoDB', 'REST APIs'],
      image: '📚',
      link: '',
      github: 'https://github.com/SRIKANTH-0001/MERN-ELearning-Platform',
      featured: true
    },
    {
      id: 3,
      title: 'Debugging Challenge Website',
      description: 'Responsive web application for college Debugging Challenge event. Designed clean, user-friendly interface centralizing event information with seamless navigation to HackerRank contest links. Focused on responsive design and smooth navigation.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: '🐛',
      link: 'https://debuggingsite.netlify.app/',
      github: 'https://github.com/SRIKANTH-0001/Debugging-Site',
      featured: false
    },
    {
      id: 4,
      title: 'YouTube Clone',
      description: 'Responsive YouTube Clone using React.js. Integrated YouTube Data API v3 to fetch real-time videos and channels. Built reusable components, implemented dynamic routing, and created a clean interface replicating core YouTube experience.',
      tech: ['React.js', 'YouTube API', 'React Router', 'Axios', 'CSS3'],
      image: '📺',
      link: '',
      github: 'https://github.com/SRIKANTH-0001/Youtube-Clone-ReactJS',
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, idx) => (
            <div
              key={project.id}
              className="card card-hover group overflow-hidden animate-slideUp"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-6xl mb-4">{project.image}</div>

              <h3 className="text-2xl font-display font-bold mb-3 text-gray-900 dark:text-white group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-300 font-medium transition-colors"
                  >
                    Live Demo <FiExternalLink />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-300 font-medium transition-colors"
                  >
                    GitHub <FiGithub />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-display font-bold mb-6 text-gray-900 dark:text-white">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project, idx) => (
              <div
                key={project.id}
                className="card card-hover group animate-slideUp"
                style={{ animationDelay: `${(idx + 2) * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{project.image}</div>
                </div>

                <h4 className="text-xl font-display font-bold mb-2 text-gray-900 dark:text-white group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">
                  {project.title}
                </h4>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs font-mono px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700">
                      <FiExternalLink size={18} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700">
                      <FiGithub size={18} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
