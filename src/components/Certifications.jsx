import { FiAward } from 'react-icons/fi'

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: 'Node.js Certification',
      issuer: 'Scaler',
      date: '2026',
      icon: '🟢'
    },
    {
      id: 2,
      title: 'MongoDB Atlas Certification',
      issuer: 'MongoDB',
      date: '2024',
      icon: '🍃'
    },
    {
      id: 3,
      title: 'JavaScript Certification',
      issuer: 'NamasteDev',
      date: '2025',
      icon: '⚡'
    },
    {
      id: 4,
      title: 'AI Tools for Coding',
      issuer: 'Be10x',
      date: '2026',
      icon: '🤖'
    }
  ]

  const achievements = [
    { title: 'LeetCode', description: 'Solved 100+ coding problems', icon: '💻' },
    { title: 'Conference Presentation', description: 'Presented E-Learning Platform at ICNTSETM\'26', icon: '🎤' },
    { title: 'College Contribution', description: 'Developed Debugging Challenge website for symposium', icon: '🏆' },
    { title: 'Leadership', description: 'Served as Student Representative', icon: '👥' }
  ]

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Certifications & Achievements</h2>

        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-2">
            <FiAward className="text-fuchsia-600" /> Professional Certifications
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={cert.id}
                className="card card-hover group text-center animate-slideUp"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-sm text-fuchsia-600 dark:text-fuchsia-400 font-semibold mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs font-mono text-gray-500 dark:text-gray-400">
                  {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-display font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-2">
            🌟 Key Achievements
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, idx) => (
              <div
                key={achievement.title}
                className="card card-hover group animate-slideUp"
                style={{ animationDelay: `${(idx + 4) * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
