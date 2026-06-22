import { useNavigate } from 'react-router-dom'

export default function LeadershipStylePage() {
  const navigate = useNavigate()

  return (
    <div className="cs-page-full">

      <div className="cs-back">
        <button onClick={() => navigate('/about')} className="back-btn">← About</button>
      </div>

      <div className="cs-container" style={{ marginTop: '40px' }}>

        <div className="cs-intro">
          <div>
            <p className="cs-label">Leadership Philosophy</p>
            <h1 className="cs-title">How I Lead</h1>
            <div style={{ marginTop: '4px' }}>
              <span className="cs-tag">Cross-Functional Leadership</span>
              <span className="cs-tag">Team Building</span>
              <span className="cs-tag">Hiring</span>
            </div>
          </div>
          <div>
            <p className="cs-lead">Leadership, to me, is multiplication, not addition. My job is to make a team capable of more than I could ever produce alone, while staying close enough to the work to make sharp calls when they matter.</p>
            <p className="cs-body">Over the past five years leading global design and engineering teams, that's meant shifting my own time away from making things myself and toward setting direction, building the people and process that let others make things well, and earning enough credibility outside of design to get the resources and air cover a team needs to do its best work.</p>
            <p className="cs-body">The three things I spend the most deliberate energy on are how I work across functions, how I build and grow a team, and how I hire, because all three compound. Get them right and quality stops depending on me reviewing every decision.</p>
          </div>
        </div>

        <div className="cs-section">
          <p className="cs-section-label">Working Across the Org</p>
          <h2 className="cs-section-title">Credibility is earned outside the design team</h2>
          <p className="cs-body">Design doesn't get a seat at the table by asking for one. It earns it by consistently connecting user needs to outcomes the rest of the business already cares about: activation, retention, support load, sales cycle length. I treat product and engineering as equal partners in defining the problem, not downstream recipients of a solution I've already decided on. That changes the conversation from "approve my design" to "here's the trade-off, what do we want to optimize for."</p>
          <p className="cs-body">Managing up works the same way. Executives don't need a tour of the Figma file; they need to know what we're betting on, why, and what it costs if we're wrong. I bring data and a clear point of view, but I hold it loosely enough to disagree-and-commit when the broader context calls for it, and I expect the same of the people I lead.</p>
          <p className="cs-quote">The fastest way to lose a seat at the table is to defend your craft instead of the outcome it produces.</p>
          <p className="cs-body">In practice, this has meant sitting inside sprint planning with engineering rather than handing off a spec, co-owning roadmap trade-offs with product instead of reacting to one, and translating research findings into the metrics customer success and marketing are already accountable for. Cross-functional trust isn't a kickoff meeting. It's built conversation by conversation, decision by decision.</p>
        </div>

        <div className="cs-section">
          <p className="cs-section-label">People</p>
          <h2 className="cs-section-title">Building a team that doesn't need me in every room</h2>
          <p className="cs-body">A team that depends on me reviewing every pixel or every decision is a team that can't scale, and a ceiling on what we can ship. So I invest early in the structures that let people operate with real autonomy: a clear bar for quality, a critique culture that raises the work rather than gatekeeping it, and enough trust that people bring me problems while they're still cheap to fix.</p>
          <div className="cs-timeline">
            <div className="cs-timeline-item">
              <div className="cs-timeline-date">Set the bar</div>
              <div>
                <p className="cs-timeline-head">Define what good looks like, out loud</p>
                <p className="cs-body">Quality can't live in my head. I write down what "good" means for our context (interaction patterns, accessibility standards, when to deviate from the design system), so the team can hold each other to it without routing every decision through me.</p>
              </div>
            </div>
            <div className="cs-timeline-item">
              <div className="cs-timeline-date">Coach, don't direct</div>
              <div>
                <p className="cs-timeline-head">Ask the question that gets them to the answer</p>
                <p className="cs-body">When someone brings me a problem, my default is to ask what they've already considered and where they're stuck, rather than handing them a solution. It's slower in the moment and faster over a career, and it's the difference between a team of executors and a team of decision-makers.</p>
              </div>
            </div>
            <div className="cs-timeline-item">
              <div className="cs-timeline-date">Protect the room</div>
              <div>
                <p className="cs-timeline-head">Psychological safety is a leadership responsibility</p>
                <p className="cs-body">People do their best work when they can say "I don't know" or "I think we're wrong" without it costing them. I model that openly, and I deal with workload, morale, and conflict before they become a pattern rather than after.</p>
              </div>
            </div>
            <div className="cs-timeline-item">
              <div className="cs-timeline-date">Plan for growth</div>
              <div>
                <p className="cs-timeline-head">Career conversations happen before the review cycle, not during it</p>
                <p className="cs-body">I work with each person on whether they're growing toward deeper craft or toward leading others, and I give feedback, including the hard kind, early enough that it's useful rather than a surprise. Retaining a strong performer and growing a junior designer into a senior one both come down to the same thing: a real, specific plan, not a generic one.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cs-section">
          <p className="cs-section-label">Hiring</p>
          <h2 className="cs-section-title">A process built to reduce bias and reveal judgment</h2>
          <p className="cs-body">Hiring is the highest-leverage decision a leader makes, and it's also where bias creeps in the easiest: a polished portfolio, a confident presenter, a resume that looks like mine. I try to design that out of the process rather than rely on willpower in the moment.</p>
          <div className="cs-feature-list">
            <div className="cs-feature-row"><span className="cs-feature-key">Define the role and level first</span><span className="cs-feature-val">Before a single resume is reviewed, I write down what the role actually needs and what "senior" vs. "staff" means in this context, so the bar is set once, not re-negotiated per candidate.</span></div>
            <div className="cs-feature-row"><span className="cs-feature-key">Portfolio review focuses on process, not polish</span><span className="cs-feature-val">I ask candidates to walk the messy middle (the dead ends, the trade-offs, what they'd do differently) because that's where judgment shows up, not in the final screen.</span></div>
            <div className="cs-feature-row"><span className="cs-feature-key">A working session over a take-home</span><span className="cs-feature-val">I'd rather watch how someone thinks out loud, handles ambiguity, and responds to a curveball than score a polished deliverable produced alone, unpaid, over a weekend.</span></div>
            <div className="cs-feature-row"><span className="cs-feature-key">Structured debrief against a shared rubric</span><span className="cs-feature-val">Every interviewer scores against the same criteria before we discuss as a group, so the loudest opinion in the room doesn't quietly become the bar.</span></div>
            <div className="cs-feature-row"><span className="cs-feature-key">Reference calls about trajectory, not just performance</span><span className="cs-feature-val">I ask what someone was like six months into a role versus eighteen. Growth rate tells me more about fit for where we're headed than a snapshot of where they are today.</span></div>
          </div>
        </div>

        <div className="cs-section">
          <p className="cs-section-label">In Practice</p>
          <h2 className="cs-section-title">What this looks like day to day</h2>
          <p className="cs-body">None of this is theory I picked up from a leadership book. It's how I've actually run global design and engineering teams: setting a vision the team can act on without me, building the muscle for cross-functional trust one decision at a time, and treating hiring and growth as the multiplier they are. The goal is always the same: a team that produces excellent work, and would keep doing so even on the days I'm not in the room.</p>
        </div>

      </div>

      <div className="cs-back" style={{ paddingTop: '48px', paddingBottom: '80px', borderTop: '1px solid var(--light)', marginTop: '24px' }}>
        <button onClick={() => navigate('/about')} className="back-btn">← Back to About</button>
      </div>

    </div>
  )
}
