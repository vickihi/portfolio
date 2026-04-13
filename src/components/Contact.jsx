import { useState } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', website: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.send(
      'service_bgl41wq',
      'template_ytgched',
      { name: form.name, email: form.email, website: form.website, message: form.message },
      'RrsWqFWKCvIiPPSCL'
    ).then(() => {
      alert('Message sent!')
      setForm({ name: '', email: '', website: '', message: '' })
    }).catch(() => {
      alert('Something went wrong. Please try again.')
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-left">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name*"
            value={form.name}
            onChange={handleChange}
            required
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
            required
          />
          <div className="contact-actions">
            <button type="submit" className="send-btn">Get In Touch</button>
            <div className="social-icons">
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="GitHub"><FaGithub /></a>
            </div>
          </div>
        </form>
      </div>
      <div className="contact-right">
        <h2 className="contact-heading">
          Let&apos;s build<br/>
          <strong>Something Thoughtful</strong>
        </h2>
        <p className="contact-tagline">
          I'm open to full-time opportunities, freelance projects, or collaborations. 
          Whether you have a product idea or need a developer to join your team - let&apos;s connect!
        </p>
        <p className="contact-email">vickihi2000@gmail.com</p>
      </div>
    </section>
  )
}

export default Contact
