import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all fields' })
      return
    }

    setIsSubmitting(true)

    try {
      // Using FormSubmit service for free form submissions
      const response = await fetch('https://formspree.io/f/xvzepkyo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Error sending message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slideInLeft">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4 text-gray-900 dark:text-white">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                I'm always open to new opportunities and interesting projects. Feel free to reach out to discuss collaboration, internships, or just to say hello!
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:4u.fearedits@gmail.com"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-fuchsia-50 dark:hover:bg-fuchsia-900/20 transition-colors group"
              >
                <div className="p-3 bg-gradient-to-br from-fuchsia-500 to-teal-400 rounded-lg text-white group-hover:scale-110 transition-transform flex-shrink-0">
                  <FiMail size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                  <p className="text-gray-600 dark:text-gray-400">4u.fearedits@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+91979516XXXX"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-fuchsia-50 dark:hover:bg-fuchsia-900/20 transition-colors group"
              >
                <div className="p-3 bg-gradient-to-br from-fuchsia-500 to-teal-400 rounded-lg text-white group-hover:scale-110 transition-transform flex-shrink-0">
                  <FiPhone size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                  <p className="text-gray-600 dark:text-gray-400">+91 979516XXXX</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-fuchsia-50 dark:hover:bg-fuchsia-900/20 transition-colors group">
                <div className="p-3 bg-gradient-to-br from-fuchsia-500 to-teal-400 rounded-lg text-white group-hover:scale-110 transition-transform flex-shrink-0">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">Prayagraj, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-semibold text-gray-900 dark:text-white mb-4">Connect on Social Media</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Lucky783594"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shivam-dwivedi-08b45b334/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={24} />
                </a>
                <a
                  href="https://www.instagram.com/lucky47ig/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-br from-fuchsia-500 via-rose-500 to-violet-500 hover:opacity-90 text-white rounded-lg transition-opacity"
                  aria-label="Instagram"
                >
                  <FiInstagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slideInRight">
            <form onSubmit={handleSubmit} className="card card-hover space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  rows="5"
                  className="w-full resize-none"
                ></textarea>
              </div>

              {submitStatus && (
                <div className={`p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 gradient-btn rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-fuchsia-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <FiSend /> {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
