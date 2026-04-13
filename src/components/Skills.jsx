import { useState, useEffect } from 'react'
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact,
  SiPython, SiPhp, SiDjango,
  SiWordpress, SiBootstrap,
  SiMysql, SiGraphql, SiSqlite,
  SiGithub, SiFigma
} from 'react-icons/si'

const COLORS = ['#fff7e0', '#e8f4fd', '#fde8f4', '#e8fdf0', '#fde8e8', '#f0e8fd']

const skills = [
  { icon: <SiHtml5 />, name: 'HTML5' },
  { icon: <SiCss />, name: 'CSS3' },
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <SiReact />, name: 'React.js' },
  { icon: <SiPython />, name: 'Python' },
  { icon: <SiPhp />, name: 'PHP' },
  { icon: <SiDjango />, name: 'Django' },
  { icon: <SiWordpress />, name: 'WordPress' },
  { icon: <SiBootstrap />, name: 'Bootstrap' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <SiSqlite />, name: 'SQLite' },
  { icon: <SiGraphql />, name: 'GraphQL' },
  { icon: <SiGithub />, name: 'GitHub' },
  { icon: <SiFigma />, name: 'Figma' },
]

function Skills() {
  const [active, setActive] = useState({ index: 0, color: COLORS[0] })

  useEffect(() => {
    const timer = setInterval(() => {
      setActive({
        index: Math.floor(Math.random() * skills.length),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      })
    }, 800)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">My <strong>Skills</strong></h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            className="skill-card"
            style={{ background: i === active.index ? active.color : '' }}
          >
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
