import { useState } from 'react'
import { FaFacebook, FaRedditAlien, FaTwitter, FaDiscord } from 'react-icons/fa'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', website: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! (dummy)')
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-left">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="url"
            name="website"
            placeholder="Your website (If exists)"
            value={form.website}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="How can I help?*"
            rows={6}
            value={form.message}
            onChange={handleChange}
          />
          <div className="contact-actions">
            <button type="submit" className="send-btn">Get In Touch</button>
            <div className="contact-social">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Reddit"><FaRedditAlien /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Discord"><FaDiscord /></a>
            </div>
          </div>
        </form>
      </div>
      <div className="contact-right">
        <h2 className="contact-heading">
          Let&apos;s talk for<br />
          <strong>Something special</strong>
        </h2>
        <p className="contact-tagline">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly and memorable interactive experiences.
        </p>
        <p className="contact-email">johndoe@gmail.com</p>
        <p className="contact-phone">+1 234 567 890</p>
      </div>
    </section>
  )
}

export default Contact
