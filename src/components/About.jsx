import { useEffect, useRef } from 'react'


function About() {
  const sectionRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add('about-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-image">
        <div className="word-cloud">
          <span className="wc-xl" style={{ top: '10%',  left: '15%', color: '#e63946' }}>Problem solving</span>
          <span className="wc-sm" style={{ top: '5%',   left: '55%', color: '#457b9d' }}>Engineering thinking</span>
          <span className="wc-lg" style={{ top: '22%',  left: '0%',  color: '#2a9d8f' }}>Backend logic</span>
          <span className="wc-md" style={{ top: '28%',  left: '30%', color: '#e9c46a' }}>Full-stack structure</span>
          <span className="wc-xl" style={{ top: '42%',  left: '10%', color: '#6d6875' }}>Design thinking</span>
          <span className="wc-sm" style={{ top: '38%',  left: '65%', color: '#f4a261' }}>Detail-oriented</span>
          <span className="wc-lg" style={{ top: '58%',  left: '20%', color: '#264653' }}>Frontend framework</span>
          <span className="wc-md" style={{ top: '65%',  left: '55%', color: '#e76f51' }}>Scientific thinking</span>
          <span className="wc-sm" style={{ top: '75%',  left: '20%', color: '#4cc9f0' }}>Debugging mindset</span>
        </div>
      </div>
      <div className="about-content">
        <div className="about-philosophy">
          <h2 className="section-title">About <strong>Me</strong></h2>
          <p>A full-stack developer with work philosophy as:</p>
          <p><strong style={{ fontSize: '1.1em' }}>Care</strong> deeply about web applications <span className="about-sub">— not only making them work, but how they feel to use.</span></p>
          <p><strong style={{ fontSize: '1.1em' }}>Write</strong> clean, maintainable code <span className="about-sub">— not a slogan, but a standard I hold myself to.</span></p>
          <p><strong style={{ fontSize: '1.1em' }}>Curious</strong> by nature <span className="about-sub">— I keep up with new technologies and enjoy learning by building.</span></p>
          <p><strong style={{ fontSize: '1.1em' }}>Build</strong> across the stack <span className="about-sub">— from thoughtful interfaces to reliable backend systems.</span></p>
        </div>
        <div className="about-education">
          <h2 className="section-title">Edu<strong>cation</strong></h2>
          <p><strong>Vanier College — Web Design Specialist</strong><br />
            A project-based program where I built multiple full-stack applications from scratch, gaining hands-on experience turning designs into functional products using modern web technologies.
          </p>
          <p><strong>University of Manitoba — Master of Food Science</strong><br />
            Graduate research trained me to think analytically and systematically through research design, data analysis, and interpreting results. This experience strengthened my problem-solving mindset, which I now bring to software development.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
