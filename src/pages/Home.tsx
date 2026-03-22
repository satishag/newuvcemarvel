import { useState, useEffect } from 'react';
import { 
  Users, BookOpen, Rocket, MonitorPlay, 
  FlaskConical, Trophy, Wrench, Network 
} from 'lucide-react';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentGallerySlide, setCurrentGallerySlide] = useState(0);

  const galleryImages = [
    { id: 1, bg: 'rgba(58, 123, 213, 0.2)', text: 'State of the art equipment' },
    { id: 2, bg: 'rgba(0, 210, 255, 0.2)', text: 'Student Hackathons' },
    { id: 3, bg: 'rgba(139, 92, 246, 0.2)', text: 'Research Presentations' },
    { id: 4, bg: 'rgba(236, 72, 153, 0.2)', text: 'Collaborative Environment' },
  ];

  const slides = [
    { id: 1, title: 'Welcome to UVCE MARVEL', bg: 'rgba(59, 130, 246, 0.2)' },
    { id: 2, title: 'Innovate. Build. Share.', bg: 'rgba(139, 92, 246, 0.2)' },
    { id: 3, title: 'State of the art R&D Lab', bg: 'rgba(16, 185, 129, 0.2)' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGallerySlide((prev) => (prev + 1) % galleryImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const announcements = [
    { id: 1, text: 'Register for the upcoming Project Cohort by end of this week!' },
    { id: 2, text: 'New 3D Printer installed in the lab for Student Use' },
    { id: 3, text: 'Guest lecture on Artificial Intelligence this Friday @ 4PM' },
    { id: 4, text: 'Hackathon winners will be announced soon' },
    { id: 5, text: 'Apply for the Student Track by end of month' },
  ];

  const tracks = [
    { title: 'Student Track', icon: Users, desc: 'Dedicated path for students to learn and build.' },
    { title: 'Open Learners', icon: BookOpen, desc: 'Anyone can join and learn various technologies.' },
    { title: 'Project Track', icon: Rocket, desc: 'Focus on building robust, real-world projects.' },
    { title: 'Product Cohort', icon: MonitorPlay, desc: 'Learn product management and scaling.' },
    { title: 'Research Cohort', icon: FlaskConical, desc: 'Deep dive into R&D and write papers.' },
    { title: 'Competitions Track', icon: Trophy, desc: 'Prepare and participate in global hackathons.' },
    { title: 'Equipment Support', icon: Wrench, desc: 'Access to high-end hardware and tools.' },
    { title: 'BRIDGE', icon: Network, desc: 'Connecting academia with industry experts.' },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="slider-container glass">
          <div 
            className="slider-content"
            style={{ backgroundColor: slides[currentSlide].bg, transition: 'background-color 0.5s ease' }}
          >
            <h2>{slides[currentSlide].title}</h2>
          </div>
        </div>
        <div className="announcements-container glass">
          <h3 className="text-gradient" style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 800 }}>Announcements</h3>
          <div className="announcements-scroll">
            {announcements.map((ann) => (
              <div key={ann.id} className="announcement-item">
                <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>{ann.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Transition */}
      <div className="section-separator"></div>

      {/* Overview Section */}
      <section className="overview-section glass-panel">
        <div className="overview-text">
          <h2 className="page-title text-gradient" style={{ fontSize: '3rem' }}>Overview</h2>
          <p>
            UVCE MARVEL (Makerspace for Advanced Research and Visionary Engineering Learning) is a premier 
            R&D lab designed to foster innovation and technological advancement among students. 
            We provide state-of-the-art equipment and a collaborative environment to turn ideas into reality. 
            Our mission is to bridge the gap between academic learning and industry demands through hands-on 
            projects, research activities, and community building. We support various tracks catering to 
            different learning curves and goals.
          </p>
        </div>
        <div className="overview-image glass">
          <span className="text-secondary">Lab Overview Image</span>
        </div>
      </section>

      {/* Gradient Transition */}
      <div className="section-separator"></div>

      {/* Tracks / Cards Section */}
      <section>
        <h2 className="page-title text-gradient" style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '3rem' }}>Our Tracks & Cohorts</h2>
        <div className="tracks-grid">
          {tracks.map((track, idx) => {
            const Icon = track.icon;
            return (
              <div key={idx} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front glass">
                    <Icon size={48} className="card-icon" />
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{track.title}</h3>
                  </div>
                  <div className="flip-card-back glass">
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{track.title}</h3>
                    <p style={{ fontSize: '0.875rem', marginBottom: 0 }}>{track.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Gradient Transition */}
      <div className="section-separator"></div>

      {/* Gallery Section */}
      <section className="gallery-section glass-panel">
        <div className="gallery-carousel-container">
          <div 
            className="gallery-carousel-track"
            style={{ transform: `translateX(-${currentGallerySlide * 100}%)` }}
          >
            {galleryImages.map((img) => (
              <div key={img.id} className="gallery-carousel-slide glass" style={{ backgroundColor: img.bg }}>
                {img.text}
              </div>
            ))}
          </div>
          <div className="carousel-dots">
            {galleryImages.map((_, idx) => (
              <div 
                key={idx} 
                className={`dot ${idx === currentGallerySlide ? 'active' : ''}`}
                onClick={() => setCurrentGallerySlide(idx)}
              />
            ))}
          </div>
        </div>
        <div className="gallery-text">
          <h2 className="page-title text-gradient" style={{ fontSize: '3rem' }}>Gallery</h2>
          <p>
            Explore the vibrant atmosphere of our R&D Lab. Here you can see our students operating 
            advanced machinery, participating in hackathons, and presenting their research work. 
            Our community thrives on collaboration and continuous learning.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
