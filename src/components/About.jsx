function About() {
  return (
    <section className="about">
      <div className="about-image">
        <svg viewBox="0 0 300 380" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Head */}
          <circle cx="150" cy="100" r="55" fill="#111" />
          <ellipse cx="150" cy="105" rx="36" ry="42" fill="#fff" />
          {/* Eyes */}
          <circle cx="136" cy="98" r="4" fill="#111" />
          <circle cx="164" cy="98" r="4" fill="#111" />
          {/* Smile */}
          <path d="M136 116 Q150 128 164 116" stroke="#111" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* Hair */}
          <path d="M98 90 Q105 45 150 40 Q195 45 202 90 Q188 65 150 63 Q112 65 98 90Z" fill="#111" />
          {/* Body / crossed arms */}
          <path d="M80 200 Q90 260 150 280 Q210 260 220 200 L208 155 Q150 135 92 155 Z" fill="#111" />
          {/* Left arm */}
          <path d="M92 170 Q60 200 70 240 Q95 225 130 235" stroke="#111" strokeWidth="30" strokeLinecap="round" fill="none" />
          {/* Right arm */}
          <path d="M208 170 Q240 200 230 240 Q205 225 170 235" stroke="#111" strokeWidth="30" strokeLinecap="round" fill="none" />
          {/* Hands overlap */}
          <ellipse cx="150" cy="235" rx="40" ry="16" fill="#111" />
          {/* Collar */}
          <path d="M130 155 L150 175 L170 155" stroke="#fff" strokeWidth="3" fill="none" />
          {/* Bottom */}
          <ellipse cx="150" cy="310" rx="80" ry="35" fill="#111" />
          <rect x="70" y="280" width="160" height="35" fill="#111" />
        </svg>
      </div>
      <div className="about-content">
        <h2 className="section-title">About <strong>Me</strong></h2>
        <p>
          I&apos;m a passionate, self-proclaimed designer who specializes in full stack
          development (React.js &amp; Node.js). I am very enthusiastic about bringing
          the technical and visual aspects of digital products to life. User
          experience, pixel perfect design, and writing clear, readable, highly
          performant code matters to me.
        </p>
        <p>
          I began my journey as a web developer in 2020, and since then, I&apos;ve
          continued to grow and evolve as a developer, taking on new challenges
          and learning the latest technologies along the way. I&apos;m building
          cutting-edge web applications using modern technologies such as
          React.js, TypeScript, Node.js, Tailwind CSS, and much more.
        </p>
        <p>
          When I&apos;m not in full-on developer mode, you can find me hovering
          around on Twitter or on Indie Hacker, witnessing the journey of early
          startups or enjoying some free time. You can follow me on Twitter where
          I share tech-related bites and build in public, or you can follow me on
          GitHub.
        </p>
      </div>
    </section>
  )
}

export default About
