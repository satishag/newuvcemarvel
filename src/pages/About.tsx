import { useState } from 'react';
import { Linkedin, ChevronLeft, ChevronRight, User, Brain, Cloud, PenTool, BatteryCharging, Wifi, Plane } from 'lucide-react';
import './About.css';

const About = () => {
  const [teamIndex, setTeamIndex] = useState(0);

  const [activeDomain, setActiveDomain] = useState(0);

  const domains = [
    { name: 'Artificial Intelligence', icon: Brain, content: 'Explore the limits of Machine Learning, Deep Learning, and Neural Networks to build intelligent systems of the future.' },
    { name: 'Cloud & CyberSecurity', icon: Cloud, content: 'Secure scalable architectures and understand the deployment, penetration testing, and networking paradigms.' },
    { name: 'Designing & Prototyping', icon: PenTool, content: 'Bring ideas to life with state of the art 3D printers, CAD software, and physical modeling tools.' },
    { name: 'EV & RE', icon: BatteryCharging, content: 'Innovate in Electric Vehicles and Renewable Energy systems to power a sustainable green future.' },
    { name: 'IoT', icon: Wifi, content: 'Connect the physical world to the internet with sensors, embedded systems, and real-time data streaming.' },
    { name: 'Aviation', icon: Plane, content: 'Design, build, and test drones, UAVs, and understand aerodynamics in our dedicated aero space.' }
  ];

  const donors = [
    { id: 1, name: 'Google Cloud Patrons' },
    { id: 2, name: 'Alumni Association (1995)' },
    { id: 3, name: 'State Government Grants' },
    { id: 4, name: 'Anonymous Philanthropist' }
  ];

  // Dummy coordinators (Mix of Faculty, Alumni, Students)
  const coordinators = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    name: `Coordinator ${i + 1}`,
    designation: i % 3 === 0 ? 'Faculty Lead' : i % 3 === 1 ? 'Alumni Mentor' : 'Student Coordinator',
    type: i % 3 === 0 ? 'Faculty' : i % 3 === 1 ? 'Alumni' : 'Student',
  }));

  const milestones = [
    { title: 'Inception of MARVEL', year: '2019', desc: 'The idea of creating an R&D space was born.' },
    { title: 'Founding Grant Secured', year: '2020', desc: 'Received the initial funds to secure the space.' },
    { title: 'First 3D Printers Installed', year: '2021', desc: 'Started the makerspace revolution.' },
    { title: 'Inauguration of Project Tracks', year: '2022', desc: 'Hundreds of students joined to build robust projects.' },
    { title: 'Awarded BEST R&D Lab', year: '2023', desc: 'Recognized statewide for our contribution.' },
    { title: '100th Research Paper Published', year: '2024', desc: 'A major milestone hit by the Research Cohort.' },
  ];

  // Carousel functions
  const itemsPerView = 5; // We use CSS media queries to scale down, but 5 is absolute max desk
  const maxIndex = coordinators.length - 1; // Actually depends on screen size, simple implementation
  
  const handlePrev = () => setTeamIndex(prev => Math.max(0, prev - 1));
  const handleNext = () => setTeamIndex(prev => Math.min(maxIndex - (itemsPerView - 1), prev + 1));

  return (
    <div className="about-container">
      {/* Overview Section */}
      <section className="overview-section glass-panel">
        <div className="overview-text">
          <h2 className="page-title text-gradient">About UVCE MARVEL</h2>
          <p>
            Established with a vision to revolutionize learning at University Visvesvaraya College of Engineering, 
            MARVEL stands as a symbol of practical, hands-on engineering. We believe that classroom learning must be 
            completed with physical building, coding, and prototyping. 
          </p>
          <p>
            By offering dedicated physical spaces equipped with 3D printers, IoT labs, computing hardware, and an 
            indomitable spirit of our students and faculty, we push the boundaries of undergraduate innovation.
          </p>
        </div>
        <div className="overview-image glass">
          <span className="text-secondary">Lab Group Photo placeholder</span>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* Domains Section */}
      <section>
        <h2 className="page-title text-gradient text-center" style={{ textAlign: 'center' }}>Core Domains</h2>
        <div className="domains-grid">
          {domains.map((domain, idx) => (
            <button 
              key={idx} 
              className={`domain-tab glass ${activeDomain === idx ? 'active' : ''}`}
              onClick={() => setActiveDomain(idx)}
            >
              <h3>{domain.name}</h3>
            </button>
          ))}
        </div>
        <div className="domain-content-panel glass-panel">
          {(() => {
            const ActiveIcon = domains[activeDomain].icon;
            return (
              <>
                <div className="domain-icon-wrapper">
                  <ActiveIcon size={80} className="text-accent" />
                </div>
                <div className="domain-text-wrapper">
                  <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }} className="text-gradient">
                    {domains[activeDomain].name}
                  </h3>
                  <p style={{ fontSize: '1.15rem', opacity: 0.9, marginBottom: 0 }}>
                    {domains[activeDomain].content}
                  </p>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      <div className="section-separator"></div>

      {/* Donors & Patrons Section */}
      <section>
        <h2 className="page-title text-gradient text-center" style={{ textAlign: 'center' }}>Our Donors & Patrons</h2>
        <p className="text-center" style={{ textAlign: 'center', opacity: 0.8 }}>
          MARVEL wouldn't exist without the generous support of our foundational sponsors.
        </p>
        <div className="donors-grid">
          {donors.map(donor => (
             <div key={donor.id} className="donor-card glass">
               <h3>{donor.name}</h3>
               <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.7 }}>Founding Patron</p>
             </div>
          ))}
        </div>
      </section>

      <div className="section-separator"></div>

      {/* Co-ordinators Carousel Section */}
      <section>
        <h2 className="page-title text-gradient text-center" style={{ textAlign: 'center' }}>Our Co-ordinators</h2>
        <p className="text-center" style={{ textAlign: 'center', opacity: 0.8, marginBottom: '2rem' }}>
          Meet the exceptional minds leading our cohorts.
        </p>
        
        <div className="team-carousel-container">
          <div 
            className="team-track" 
            style={{ transform: `translateX(calc(-${teamIndex * 20}% - ${teamIndex * 4}px))` }} // 20% width + gap calc roughly
          >
            {coordinators.map((member) => (
              <div key={member.id} className="team-card glass">
                <div className="team-avatar">
                  <User size={40} className="text-accent" />
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>{member.name}</h4>
                <p style={{ fontSize: '0.875rem', opacity: 0.7, marginBottom: 0 }}>{member.designation}</p>
                <a href="#" className="team-social">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
        
        <div className="carousel-controls">
          <button 
            className="carousel-btn" 
            onClick={handlePrev} 
            disabled={teamIndex === 0}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className="carousel-btn" 
            onClick={handleNext} 
            disabled={teamIndex >= coordinators.length - itemsPerView}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* Timeline Section */}
      <section>
        <h2 className="page-title text-gradient text-center" style={{ textAlign: 'center' }}>Our Journey</h2>
        <div className="timeline">
          {milestones.map((ms, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-content glass">
                <h3>{ms.year} - {ms.title}</h3>
                <p>{ms.desc}</p>
                <p style={{opacity: 0.7, fontSize: '0.9rem'}}>This was a huge leap forward in our ecosystem.</p>
                <div className="timeline-image glass">
                  Milestone Image
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
