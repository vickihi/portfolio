import { FaFacebook, FaRedditAlien, FaTwitter, FaDiscord } from 'react-icons/fa'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-title">
          Hello I&apos;am <strong>John Doe.</strong><br />
          <strong>Frontend</strong> Developer<br />
          Based In <strong>Canada.</strong>
        </h1>
        <p className="hero-desc">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s.
        </p>
        <div className="social-icons">
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" aria-label="Reddit"><FaRedditAlien /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="Discord"><FaDiscord /></a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-image">
          <svg viewBox="0 0 400 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Body */}
            <ellipse cx="200" cy="380" rx="120" ry="50" fill="#111" />
            {/* Torso */}
            <path d="M130 280 Q140 340 200 360 Q260 340 270 280 L255 220 Q200 200 145 220 Z" fill="#111" />
            {/* Head */}
            <circle cx="200" cy="170" r="60" fill="#111" />
            {/* Face highlight */}
            <ellipse cx="200" cy="175" rx="40" ry="45" fill="#fff" />
            {/* Eyes */}
            <circle cx="185" cy="165" r="5" fill="#111" />
            <circle cx="215" cy="165" r="5" fill="#111" />
            {/* Smile */}
            <path d="M185 185 Q200 198 215 185" stroke="#111" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Hair */}
            <path d="M145 155 Q150 100 200 95 Q250 100 255 155 Q240 130 200 128 Q160 130 145 155Z" fill="#111" />
            {/* Laptop */}
            <rect x="110" y="300" width="180" height="110" rx="8" fill="#333" />
            <rect x="115" y="305" width="170" height="95" rx="5" fill="#555" />
            <rect x="90" y="408" width="220" height="12" rx="4" fill="#222" />
            {/* Laptop screen content */}
            <rect x="125" y="315" width="80" height="6" rx="3" fill="#888" />
            <rect x="125" y="328" width="60" height="6" rx="3" fill="#888" />
            <rect x="125" y="341" width="100" height="6" rx="3" fill="#888" />
            {/* Arms */}
            <path d="M145 240 Q110 280 115 320" stroke="#111" strokeWidth="28" strokeLinecap="round" fill="none" />
            <path d="M255 240 Q290 280 285 320" stroke="#111" strokeWidth="28" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
