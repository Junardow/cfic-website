import '../styles/services.css'
import '../styles/about.css'

const TEAM_MEMBERS = [
  {
    img:       '/images/team-cutamora.png',
    name:      'CUTAMORA, Genesis Jared A.',
    role:      'Assistant Professor 1 / Center Chief, Caraga Food Innovation Center (CFIC), CAA',
    education: 'Master of Science in Food Science & Technology, Visayas State University',
    year:      '2018',
    email:     'genesis.cutamora@cfic.gov.ph',
    skills:    ['Functional Properties', 'Food product development', 'Food Processing Technologies', 'Waste Valorization', 'Meat Quality', 'Post Harvest Handling Technology'],
  },
  {
    img:       '/images/team-modina.png',
    name:      'MODINA, Lix B.',
    role:      'Assistant Professor 1 / TTLO College Intellectual Property Coordinator, CAA',
    education: 'Master of Science in Food Science & Technology, Visayas State University',
    year:      '2018',
    email:     'lix.modina@cfic.gov.ph',
    skills:    ['Food Product Development'],
  },
  {
    img:       '/images/team-galang.png',
    name:      'GALANG, Marie Bless B.',
    role:      'Assistant Professor 1',
    education: 'Doctor of Philosophy in Food Science, University of the Philippines Los Baños',
    year:      '2025',
    email:     'marie.galang@cfic.gov.ph',
    skills:    ['Food Biochemistry', 'Applied Nutrition', 'Process and Product Development'],
  },
  {
    img:       '/images/team-alambatin.png',
    name:      'ALAMBATIN, Peth Trixia Brooxs C.',
    role:      'Instructor 1',
    education: 'Master of Science in Food Science, University of the Philippines Mindanao',
    year:      'Ongoing',
    email:     'peth.alambatin@cfic.gov.ph',
    skills:    ['Nutraceuticals', 'Functional Food', 'Food Ingredients'],
  },
]

export default function Team() {
  return (
    <main>

      {/* ── Hero ── */}
      <div className="services-page-hero" style={{ backgroundImage: 'url(/images/hero1.jpg)' }}>
        <div className="services-page-hero-overlay">
          <div className="services-page-hero-content">
            <span className="hero-page-eyebrow">The People Behind CFIC</span>
            <h1 className="hero-page-title">Meet the Team</h1>
            <p className="hero-page-sub">
              Our team of dedicated food scientists and specialists
              work together to drive innovation and deliver quality service
              across the Caraga Region.
            </p>
          </div>
        </div>
      </div>

      {/* ── Team grid ── */}
      <section className="about-team">
        <div className="about-team-inner">

          <div className="about-team-header">
            <span className="section-label">Our Researchers</span>
            <h2 className="section-heading">Team Members</h2>
            <p className="about-team-intro">
              Meet the experts who power CFIC's research, services, and food
              innovation programs.
            </p>
          </div>

          <div className="team-grid">
            {TEAM_MEMBERS.map(({ img, name, role, education, year, email, skills }) => (
              <div className="team-card" key={email}>
                <div className="team-card-img-wrap">
                  <img
                    src={img}
                    alt={name}
                    className="team-card-img"
                    onError={e => { e.currentTarget.style.display = 'none' }}
                  />
                  <div className="team-card-img-placeholder" aria-hidden="true" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">{name}</h3>
                  <p className="team-card-role">{role}</p>
                  <dl className="team-card-details">
                    <div className="team-card-row">
                      <dt>Education</dt>
                      <dd>{education}</dd>
                    </div>
                    <div className="team-card-row">
                      <dt>Contact</dt>
                      <dd><a href={`mailto:${email}`}>{email}</a></dd>
                    </div>
                  </dl>
                  <div className="team-card-chips">
                    {skills.map(s => (
                      <span className="team-chip" key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  )
}
