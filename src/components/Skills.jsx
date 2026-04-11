import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact,
  SiPython, SiPhp, SiDjango,
  SiMysql, SiGraphql,
  SiWordpress, SiBootstrap,
  SiGithub, SiFigma
} from 'react-icons/si'

const skills = [
  { icon: <SiHtml5 />, name: 'HTML5' },
  { icon: <SiCss />, name: 'CSS3' },
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <SiReact />, name: 'React.js' },
  { icon: <SiPython />, name: 'Python' },
  { icon: <SiPhp />, name: 'PHP' },
  { icon: <SiDjango />, name: 'Django' },
  { icon: <SiBootstrap />, name: 'Bootstrap' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <SiGraphql />, name: 'GraphQL' },
  { icon: <SiWordpress />, name: 'WordPress' },
  { icon: <SiGithub />, name: 'GitHub' },
  { icon: <SiFigma />, name: 'Figma' },
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">My <strong>Skills</strong></h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
