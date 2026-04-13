import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-title">
          Hello I&apos;am <strong>Weiwei.</strong><br />
          <strong>Fullstack</strong> Developer<br />
          Based In <strong>Montreal.</strong>
        </h1>
        <p className="hero-desc">
          A full-stack developer building <strong>e-commerce platforms</strong>, 
          <strong>custom CMS solutions</strong>, and <strong>React applications</strong>, 
          committed to crafting web applications that are intuitive, scalable, and reliable.
        </p>
        <p className="hero-desc">
          I&apos;m currently opening for opportunities either local or remote.
        </p>
        <div className="social-icons">
          <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#" aria-label="GitHub"><FaGithub /></a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-image">
          <img src="/images/portrait.jpg" alt="Weiwei" className="hero-portrait" />
        </div>
      </div>
    </section>
  )
}

export default Hero
