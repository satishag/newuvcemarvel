import { GraduationCap, User, MessageCircle, HeartHandshake, BookOpen, Lightbulb, Linkedin, Instagram, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="page-header text-center" style={{ textAlign: 'center' }}>
        <h1 className="page-title text-gradient">Get In Touch</h1>
        <p className="page-subtitle">Whether you are an alumnus looking to give back or a student needing guidance, we are here to connect.</p>
      </div>

      <div className="contact-split">
        {/* Alumni Section */}
        <div className="contact-card glass-panel alumni-card">
          <div className="card-header">
            <GraduationCap size={48} className="text-accent" />
            <h2>For Alumni</h2>
          </div>
          <p className="card-desc">Help shape the future of UVCE MARVEL. Your experience is our greatest asset. How can you help?</p>
          
          <div className="help-options">
            <div className="help-item glass">
              <Lightbulb size={32} className="text-accent" />
              <div>
                <h4>Guiding Projects</h4>
                <p>Mentor students and oversee cutting-edge R&D projects.</p>
              </div>
            </div>
            <div className="help-item glass">
              <BookOpen size={32} className="text-accent" />
              <div>
                <h4>Updating Curriculum</h4>
                <p>Provide industry insights to keep our learning paths relevant.</p>
              </div>
            </div>
            <div className="help-item glass">
              <HeartHandshake size={32} className="text-accent" />
              <div>
                <h4>Conducting Workshops</h4>
                <p>Host seminars and hands-on sessions for our cohorts.</p>
              </div>
            </div>
          </div>

          <button className="contact-btn glass">Connect as Alumni</button>
        </div>

        {/* Students Section */}
        <div className="contact-card glass-panel student-card">
          <div className="card-header">
            <User size={48} className="text-accent" />
            <h2>For Students</h2>
          </div>
          <p className="card-desc">Need help with your project, looking for support, or want to leave feedback? Reach out to us directly.</p>
          
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="glass-input" placeholder="Enter your full name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="glass-input" placeholder="Enter your student email" />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label>Message / Feedback</label>
              <textarea className="glass-input" style={{ height: '100%', resize: 'none' }} placeholder="How can we support you today?"></textarea>
            </div>
            <button className="contact-btn glass">Submit Feedback <MessageCircle size={20} /></button>
          </form>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="social-section glass-panel">
        <h2 className="text-gradient">Follow Our Journey</h2>
        <p>Stay updated with our latest projects, event announcements, and lab achievements.</p>
        <div className="social-links">
          <a href="#" className="social-link linkedin">
            <Linkedin size={32} />
            <span>LinkedIn</span>
          </a>
          <a href="#" className="social-link instagram">
            <Instagram size={32} />
            <span>Instagram</span>
          </a>
          <a href="mailto:marvel@uvce.ac.in" className="social-link email">
            <Mail size={32} />
            <span>Email Us</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
