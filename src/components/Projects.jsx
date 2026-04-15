import { useState, useEffect } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    id: '01',
    title: 'Flower Shop',
    shortDesc: 'A full-stack e-commerce platform for floral business.',
    desc: `An e-commerce platform for floral products browsing, user authentication, shopping cart management, user reviews, and secure payment processing. 
           Originally a collaborative team project, independently refactored and extended with full-stack improvements across both frontend and backend.`,
    image: '/images/flower-shop.png',
    highlightsLabel: 'My Contribution',
    tech: ['Python', 'Django', 'SQLite', 'Stripe'],
    highlights: [ 
      'Authentication — signup/login, account update, order history, password reset',
      'Stripe integration — secure payment with Stripe API and webhook',
      'Product browsing — products list and product search',
      'Review system — upvote/downvote on reviews with live vote count',
      'Followups — optimized UX/UI, responsive design, code cleaning',
    ],
    demo: 'https://flowerstore-xcmf.onrender.com',
    github: 'https://github.com/vickihi/flowerstore-new/',
  },
  {
    id: '02',
    title: 'Yoga Flow',
    shortDesc: 'A custom WordPress theme for a yoga studio website.',
    desc: `A custom WordPress theme for a modern, minimalist yoga studio website, built from scratch using WordPress's theme and plugin APIs.
           Visitors can browse yoga classes by type and level, read about instructors, submit booking inquiries, and stay updated through the blog.`, 
    image: '/images/yoga-flow.png',
    tech: ['WordPress', 'PHP', 'Bootstrap', 'MySQL'],
    highlights: [
      'Theme architecture — custom WordPress theme, clean responsive UI',
      'Content management — classes & instructors via Custom Post Types',
      'Classes — filter by type and level, archive and individual class pages',
      'Blogs — category filtering, archive and post pages',
      'Booking form — class options loaded dynamically from database',
      'Carousel — displays classes and instructors',
    ],
    demo: '#',
    github: 'https://github.com/vickihi/yogaflow',
  },
  {
    id: '03',
    title: 'Issue Tracker',
    shortDesc: 'A full-stack web app for managing projects and tracking issues.',
    desc: `A collaborative full-stack issue tracking web application built with a React frontend with a custom client-side router and a Django REST API backend (provided). 
           Users can manage projects, track issues within each project, assign members and labels, and filter issues by title, assignees, or labels.`,
    image: '/images/issue-tracker.png',
    staticImage: true,
    highlightsLabel: 'My Contribution',
    tech: ['React', 'TypeScript', 'Custom Router', 'Bun', 'uv'],
    highlights: [
      'API integration — first to connect frontend to REST API, establishing initial data flow',
      'Page scaffolding — built initial Home and Project page structure',
      'Project CRUD — create, update and delete projects on the Home page',
      'CRUD helper — reusable fetch functions to avoid code duplication',
      'Component refactor — split Home.tsx into independently maintainable components',
    ],
    demo: '#',
    github: 'https://github.com/vickihi/issue-tracker-react',
  },
]

function Projects() {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const close = () => setActiveId(null)
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  return (
    <section id="projects" className="projects">
      <h2 className="section-title projects-heading">My <strong>Projects</strong></h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className={`project-item${activeId === project.id ? ' touched' : ''}`}>
            <div className="project-image" style={{ background: project.color }}>
              <div className="project-image-inner">
                <img src={project.image} alt={project.title} className={project.staticImage ? "project-static-image" : "project-scroll-image"} />
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

            <div className="project-info" onClick={(e) => { e.stopPropagation(); setActiveId(prev => prev === project.id ? null : project.id) }}>
              {/* default state */}
              <div className="project-info-default">
                <span className="project-number">{project.id}</span>
                <h3 className="project-title">{project.title}</h3>
                <span className="project-category">{project.category || project.shortDesc}</span>
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
                  <h3 className="project-title">{project.title}</h3>
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
                  <span className="info-label">{project.highlightsLabel || 'Highlights'}</span>
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
