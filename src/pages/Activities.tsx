import { useState, useEffect } from 'react';
import { 
  Users, BookOpen, Rocket, MonitorPlay, 
  FlaskConical, Trophy, Wrench, Network,
  ChevronDown, ChevronRight
} from 'lucide-react';
import './Activities.css';

// Reusable Sub-component for Activity Sections
const ActivitySection = ({ activity, index }: { activity: any, index: number }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isImageLeft = index % 2 !== 0;

  const Icon = activity.icon;

  return (
    <div className="activity-card glass-panel">
      <div className="activity-header">
        <div className="activity-icon-container">
          <Icon size={48} className="text-accent" />
        </div>
        <h3 className="text-gradient">{activity.title}</h3>
      </div>
      
      <div className={`activity-body ${isImageLeft ? 'image-left' : ''}`}>
        <div className="activity-text">
          <p>{activity.desc}</p>
          <p>This is placeholder dummy text. It can be expanded to provide further comprehensive details regarding the curriculum or specific offerings of this track in the laboratory setting. The text will automatically wrap and respect the responsive boundaries of the layout.</p>
        </div>
        <div className="activity-image glass">
          <span style={{opacity: 0.6}}>Image for {activity.title}</span>
        </div>
      </div>
      
      <div className="activity-accordions">
        <h4 style={{fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600}}>Highlights</h4>
        {activity.highlights.map((highlight: string, idx: number) => (
          <div key={idx} className={`accordion-item ${openIndex === idx ? 'open' : ''}`}>
            <div 
              className="accordion-header" 
              onClick={() => setOpenIndex(prev => prev === idx ? null : idx)}
            >
              <span>{highlight}</span>
              {openIndex === idx ? <ChevronDown size={24} className="text-accent"/> : <ChevronRight size={24} />}
            </div>
            {openIndex === idx && (
              <div className="accordion-content">
                <p style={{ margin: 0 }}>Detailed explanatory text for "{highlight}" will reside here. This dynamically opens and provides context without overwhelming the user on initial load.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Activities = () => {
  const [currentUpdate, setCurrentUpdate] = useState(0);

  const updates = [
    'Batch 8 Level 1 started',
    'Pulse Talks Session 5 on 25th',
    'Batch 6 Level 3 Projects Ideation phase',
    'Opportunity for Product Cohort is open'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentUpdate((prev) => (prev + 1) % updates.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [updates.length]);

  const activitiesList = [
    { title: 'Student Track', icon: Users, desc: 'A structured foundational path for students starting out. We focus on basics of programming, electronics, and logic design.', highlights: ['Beginner coding sessions', 'Introduction to Microcontrollers', 'Weekly mentoring & Code reviews'] },
    { title: 'Open Learner Track', icon: BookOpen, desc: 'A self-paced, community-driven learning path for individuals of all backgrounds. Join the space, utilize the resources, and learn at your own pace.', highlights: ['Access to digital library', 'Community tech forums', 'Open workshops and seminars'] },
    { title: 'Project Track', icon: Rocket, desc: 'For those ready to build. Construct real-world systems and software applications under the guidance of industry veterans and faculty.', highlights: ['Dedicated workspace & server instances', 'Funding for hardware prototypes', 'Monthly industry expert reviews'] },
    { title: 'Product Cohort', icon: MonitorPlay, desc: 'Transitioning from project to product. Learn user experience, scaling, market viability, and system reliability engineering.', highlights: ['Product management seminars', 'UI/UX design training', 'Pitch deck preparation & mock pitches'] },
    { title: 'Research Cohort', icon: FlaskConical, desc: 'Dive deep into specific domains, run extensive experiments, gather datasets, and prepare papers for high-level publication.', highlights: ['Access to academic journals IEEE/ACM', 'Faculty guided collaborations', 'Conference sponsorships'] },
    { title: 'Competitions Track', icon: Trophy, desc: 'Grooming teams for national and international hackathons, coding challenges, and major innovation fests worldwide.', highlights: ['24-hour mock hackathons', 'Travel grants for finalists', 'Networking with past hackathon winners'] },
    { title: 'Equipment Support', icon: Wrench, desc: 'Dedicated training and usage access for high-end equipment like 3D printers, laser cutters, and logic analyzers installed in the lab.', highlights: ['Safety and operation certifications', 'Initial material & components supply', 'Advanced machinery independent access'] },
    { title: 'BRIDGE', icon: Network, desc: 'Bridging the gap between academia and industry through continuous interactions, lectures, and placements directly with leading experts.', highlights: ['Extensive alumni networking events', 'Tier-1 company lab visits', 'Direct internship placements'] },
  ];

  return (
    <div className="activities-container">
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <h1 className="page-title text-gradient" style={{ fontSize: '4rem' }}>Tracks & Activities</h1>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.8 }}>
          Discover the varied pathways we offer. Whether you're a complete beginner testing the waters or a seasoned researcher looking to publish, there's a cohort for you.
        </p>
      </div>

      {/* Latest Updates Slider */}
      <div className="updates-slider-container glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
        <div className="updates-track" style={{ transform: `translateX(-${currentUpdate * 100}%)` }}>
          {updates.map((update, idx) => (
            <div key={idx} className="update-slide">
              <h2 style={{ margin: 0, fontSize: '2rem' }} className="text-gradient">Latest: {update}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="section-separator" style={{ margin: '1rem 0' }}></div>

      <div className="activities-list">
        {activitiesList.map((act, index) => (
          <ActivitySection key={index} activity={act} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Activities;
