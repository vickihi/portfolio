import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-title">
          Hello I&apos;m <strong>Weiwei.</strong><br />
          <strong>Fullstack</strong> Developer<br />
          Based In <strong>Montreal.</strong>
        </h1>
        <p className="hero-desc">
          I build <strong>e-commerce platforms</strong>, <strong>custom CMS solutions</strong>, and <strong>React applications</strong>, 
          committed to crafting web applications that are intuitive, scalable, and reliable.
        </p>
        <p className="hero-desc">
          Currently open to opportunities, local or remote.
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/weiwei-guo-3a6aa4401/" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/vickihi/" aria-label="GitHub"><FaGithub /></a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-image">
          <img src="/images/port.png" alt="Weiwei" className="hero-portrait" />
        </div>
      </div>
    </section>
  )
}

export default Hero
