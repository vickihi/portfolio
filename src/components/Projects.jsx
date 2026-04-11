import { FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    id: '01',
    title: 'E-Commerce Platform',
    desc: 'A full-stack e-commerce platform with product listings, cart management, user authentication, and payment integration using Stripe.',
    color: '#f5c518',
  },
  {
    id: '02',
    title: 'Social Media Dashboard',
    desc: 'A responsive social media analytics dashboard that aggregates data from multiple platforms and displays real-time statistics.',
    color: '#4f46e5',
  },
  {
    id: '03',
    title: 'Blog Website Template',
    desc: 'A clean and minimal blog website built with Next.js and MDX, featuring dark mode, search, and category filtering.',
    color: '#e11d48',
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
            </div>
            <div className="project-info">
              <span className="project-number">{project.id}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <a href="#" className="project-link" aria-label="View project">
                <FiExternalLink />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
