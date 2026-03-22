import { Trophy, Users, FileText, Star, Rocket, ArrowRight } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
  const wallOfFame = [
    { event: 'National Hackathon 2023', prize: '1st Place', team: 'CodeCrafters', desc: 'Built an AI-driven healthcare app.' },
    { event: 'Inter-College RoboWars', prize: 'Winner', team: 'MechaMinds', desc: 'Designed a completely autonomous combat bot.' },
    { event: 'State Level IoT Challenge', prize: '2nd Place', team: 'ConnectX', desc: 'Smart city traffic management solution.' },
    { event: 'Global Design Sprint', prize: 'Best UI/UX', team: 'PixelPerfect', desc: 'Revolutionary e-learning interface.' }
  ];

  const batchStats = [
    { label: 'Total Batches', value: '8' },
    { label: 'Students Trained', value: '500+' },
    { label: 'Projects Completed', value: '120+' },
    { label: 'Hackathons Won', value: '25' }
  ];

  const annualReports = [
    { year: '2023', title: 'Annual Report 23-24', link: '#' },
    { year: '2022', title: 'Annual Report 22-23', link: '#' },
    { year: '2021', title: 'Annual Report 21-22', link: '#' },
  ];

  const level3Projects = [
    { name: 'Autonomous Drone Navigation System', students: ['Alice Johnson', 'Bob Smith'] },
    { name: 'AI Based Disease Prediction Network', students: ['Charlie Davis', 'Dana White', 'Eve Torres'] },
    { name: 'Smart Micro-Grid Energy Controller', students: ['Frank Miller', 'Grace Lee'] },
    { name: 'Advanced Prosthetic Limb V2', students: ['Hank Pym', 'Iris West'] }
  ];

  return (
    <div className="achievements-container">
      <div className="page-header text-center" style={{ textAlign: 'center' }}>
        <h1 className="page-title text-gradient">Achievements & Milestones</h1>
        <p className="page-subtitle">Celebrating the brilliance, dedication, and success of our community members over the years.</p>
      </div>

      {/* Wall of Fame */}
      <section className="achievements-section">
        <h2 className="section-title"><Trophy className="text-accent" /> Wall of Fame</h2>
        <div className="wall-of-fame-grid">
          {wallOfFame.map((item, idx) => (
            <div key={idx} className="fame-card glass-panel">
              <div className="prize-badge">{item.prize}</div>
              <h3>{item.event}</h3>
              <p className="team-name">Team: {item.team}</p>
              <p className="desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Batch Stats */}
      <section className="achievements-section stats-section glass">
        <h2 className="section-title text-center" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <Users className="text-accent" /> Batch Statistics
        </h2>
        <div className="stats-grid">
          {batchStats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-value text-gradient">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Annual Reports */}
      <section className="achievements-section">
        <h2 className="section-title"><FileText className="text-accent" /> Open Day & Annual Reports</h2>
        <div className="reports-grid">
          {annualReports.map((report, idx) => (
            <div key={idx} className="report-card glass">
              <div className="report-cover glass-panel" style={{ padding: '0 !important' }}>
                <span style={{ fontSize: '3rem' }}>{report.year}</span>
                <p>COVER GRAPHIC</p>
              </div>
              <div className="report-info">
                <h3 style={{ margin: 0, paddingBottom: '0.5rem' }}>{report.title}</h3>
                <a href={report.link} className="report-link">View Report <ArrowRight size={16}/></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Level 3 Projects */}
      <section className="achievements-section">
        <h2 className="section-title"><Star className="text-accent" /> Level-3 Projects Completed</h2>
        <div className="projects-grid">
          {level3Projects.map((proj, idx) => (
            <div key={idx} className="project-card glass-panel">
              <div className="proj-icon"><Rocket size={32} className="text-accent" /></div>
              <div className="proj-details">
                <h3 style={{ margin: 0, paddingBottom: '1rem' }}>{proj.name}</h3>
                <div className="student-tags">
                  {proj.students.map((student, sIdx) => (
                    <span key={sIdx} className="student-tag">{student}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Achievements;
