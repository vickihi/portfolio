import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    id: '01',
    title: 'Flowshop',
    category: 'E-Commerce Platform',
    shortDesc: 'A full-stack e-commerce platform with Stripe payments.',
    desc: 'A full-stack e-commerce platform with product listings, cart management, user authentication, and payment integration using Stripe.',
    color: '#f5c518',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    highlights: [
      'Supports 10,000+ concurrent users with Redis caching',
      'Integrated Stripe for secure checkout and subscriptions',
      'JWT-based auth with OAuth2 (Google, GitHub)',
    ],
    demo: '#',
    github: '#',
  },
  {
    id: '02',
    title: 'Social Media Dashboard',
    category: 'Analytics Dashboard',
    shortDesc: 'Real-time analytics dashboard aggregating data across platforms.',
    desc: 'A responsive social media analytics dashboard that aggregates data from multiple platforms and displays real-time statistics.',
    color: '#4f46e5',
    tech: ['Vue.js', 'D3.js', 'REST API', 'Tailwind'],
    highlights: [
      'Real-time data sync via WebSocket connections',
      'Custom D3.js charts with animated transitions',
      'Unified API layer aggregating 4 social platforms',
    ],
    demo: '#',
    github: '#',
  },
  {
    id: '03',
    title: 'Blog Website Template',
    category: 'Content Platform',
    shortDesc: 'Minimal blog template with dark mode, search, and MDX support.',
    desc: 'A clean and minimal blog website built with Next.js and MDX, featuring dark mode, search, and category filtering.',
    color: '#e11d48',
    tech: ['Next.js', 'MDX', 'TypeScript', 'Vercel'],
    highlights: [
      '100/100 Lighthouse performance score',
      'Full-text search powered by Algolia',
      'Auto-generated RSS feed and sitemap',
    ],
    demo: '#',
    github: '#',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title projects-heading">My <strong>Projects</strong></h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <div className="project-image" style={{ background: project.color }}>
              <div className="project-image-inner">
                <div className="mock-window">
                  <div className="mock-dots">
                    <span /><span /><span />
                  </div>
                  <div className="mock-content">
                    <div className="mock-line" />
                    <div className="mock-line short" />
                    <div className="mock-line" />
                  </div>
                </div>
              </div>
              <div className="project-overlay">
                <a href={project.demo} className="overlay-btn" target="_blank" rel="noreferrer">
                  <FiExternalLink /> Live
                </a>
                <a href={project.github} className="overlay-btn overlay-btn--ghost" target="_blank" rel="noreferrer">
                  <FiGithub /> GitHub
                </a>
              </div>
            </div>

            <div className="project-info">
              {/* default state */}
              <div className="project-info-default">
                <span className="project-number">{project.id}</span>
                <h3 className="project-title">{project.title}</h3>
                <span className="project-category">{project.category}</span>
                <p className="project-desc">{project.shortDesc}</p>
                <ul className="project-tech">
                  {project.tech.map((t) => (
                    <li key={t} className="project-tech-tag">{t}</li>
                  ))}
                </ul>
              </div>

              {/* hover state */}
              <div className="project-info-hover">
                <div className="info-header">
                  <span className="project-number">{project.id}</span>
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-category">{project.category}</span>
                  </div>
                </div>
                <div className="info-section">
                  <span className="info-label">Overview</span>
                  <p className="info-text">{project.desc}</p>
                </div>
                <div className="info-section">
                  <span className="info-label">Tech Stack</span>
                  <ul className="project-tech">
                    {project.tech.map((t) => (
                      <li key={t} className="project-tech-tag">{t}</li>
                    ))}
                  </ul>
                </div>
                <div className="info-section">
                  <span className="info-label">Highlights</span>
                  <ul className="info-highlights">
                    {project.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
