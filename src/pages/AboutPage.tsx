import { useNavigate } from 'react-router-dom'
import { useAiPanel } from '../context/AiPanelContext'

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1.5C8 1.5 9.2 4.5 11.5 4.5C11.5 4.5 8.5 5.7 8.5 8C8.5 8 7.3 5 5 5C5 5 8 3.8 8 1.5Z" fill="white"/>
    <path d="M12.5 8.5C12.5 8.5 13.3 10.3 14.5 10.5C14.5 10.5 12.7 11.3 12.5 12.5C12.5 12.5 11.7 10.7 10.5 10.5C10.5 10.5 12.3 9.7 12.5 8.5Z" fill="white"/>
    <path d="M5 10C5 10 5.8 11.8 7 12C7 12 5.2 12.8 5 14C5 14 4.2 12.2 3 12C3 12 4.8 11.2 5 10Z" fill="white" opacity="0.7"/>
  </svg>
)

export default function AboutPage() {
  const { open } = useAiPanel()
  const navigate = useNavigate()

  return (
    <div className="about-page-inner">
      <div className="about-grid">
        <div className="about-left">
          <p className="about-headline">Product Direction<br />+ Design +<br />Engineering</p>
          <p className="about-tagline">What I do</p>
          <p className="about-what">Designing a solution requires refinement until it reaches the optimal point: a balance between familiar and unique.</p>
          <button className="ask-btn" onClick={open}>
            <SparkleIcon />
            Ask anything about me
          </button>
          <hr className="about-divider" />
          <div className="about-social">
            <a href="https://www.behance.net/sobhandutta" target="_blank" rel="noreferrer">Behance ↗</a>
            <a href="https://www.linkedin.com/in/sobhandutta/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/sobhandutta" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="mailto:sobhandutta@gmail.com">sobhandutta@gmail.com</a>
          </div>
        </div>
        <div className="about-right">
          <p className="about-body">As the Head of UX &amp; UI at Ataya, I am responsible for leading products from their initial design stages to successful launches. With two decades of hands-on experience, I specialize in UX Design and strategy, Software Development, and team leadership across various locations. My career reflects a deep commitment to creating exceptional user experiences and driving innovation in digital product design.</p>
          <p className="about-body">Thank you for visiting my profile. If you're interested in learning more about my experience or wish to discuss products and the creative world, please feel free to drop me a note. I would love to connect and explore potential collaborations.</p>

          <div className="about-pillar">
            <p className="about-pillar-label">Leadership</p>
            <p className="about-pillar-text">I have led complex product initiatives for the past five years and managed a global design and engineering team. My leadership extends beyond design and engineering; I collaborate closely with product, customer success, and marketing teams to align our efforts and drive product success. My approach to leadership emphasizes empowerment, collaboration, and a shared vision for creating outstanding user experiences.</p>
            <button className="about-pillar-link" onClick={() => navigate('/about/leadership-style')}>My leadership style →</button>
          </div>

          <div className="about-pillar">
            <p className="about-pillar-label">User Experience</p>
            <p className="about-pillar-text">I am a hands-on UX/UI strategist and design leader, deeply involved in the cross-functional development of best practices in UX/UI design. My focus is on championing the needs of customers and end users, ensuring that every product we create provides intuitive and engaging experiences. I excel at bridging the gap between user needs and technical feasibility, delivering beautiful and functional designs.</p>
            <button className="about-pillar-link" onClick={() => navigate('/')}>See case studies →</button>
          </div>

          <div className="about-pillar">
            <p className="about-pillar-label">Engineering</p>
            <p className="about-pillar-text">With a strong background in front-end software engineering, I bring strategic leadership to enterprise software and multi-platform cloud user experiences. I have a proven track record in defining and implementing UI design and development for Cloud and On-premise deployments. My technical expertise ensures that design concepts are innovative, technically sound, and scalable.</p>
          </div>

        </div>
      </div>
    </div>
  )
}
