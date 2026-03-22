import { Printer, Cpu, Bot, Monitor, ActivitySquare, Plane } from 'lucide-react';
import './Equipment.css';

const Equipment = () => {
  const equipments = [
    { name: 'BambuLab H2D 3D Printer', icon: Printer, desc: 'High-speed 3D printing with precision. Perfect for rapid prototyping and intricate designs.' },
    { name: 'BambuLab P1S 3D Printer', icon: Printer, desc: 'Advanced enclosed 3D printer capable of handling high-temperature materials like ABS and PC.' },
    { name: 'eYantra Robotics Kit', icon: Bot, desc: 'Comprehensive robotics kit provided by IIT Bombay e-Yantra for building intelligent autonomous bots.' },
    { name: 'Computers with GPU', icon: Monitor, desc: 'High-end workstations with dedicated RTX GPUs for machine learning, deep learning, CAD, and 3D rendering.' },
    { name: 'Oscilloscope', icon: ActivitySquare, desc: 'Digital storage oscilloscopes for precise signal processing, debugging circuits, and electronics testing.' },
    { name: 'FPGA', icon: Cpu, desc: 'Field Programmable Gate Arrays for advanced digital logic design and hardware acceleration.' },
    { name: 'Drone Kit', icon: Plane, desc: 'Complete quadcopter kits for aerospace engineering, flight controllers, and autonomous navigation.' },
  ];

  return (
    <div className="equipment-container">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 className="page-title text-gradient" style={{ fontSize: '4rem' }}>Lab Equipment</h1>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.8 }}>
          Our R&D lab is equipped with state-of-the-art machinery and computing power to help you bring your ideas into the physical world. Check out our inventory below.
        </p>
      </div>

      <div className="equipment-list">
        {equipments.map((eq, idx) => {
          const isImageLeft = idx % 2 === 0;
          const Icon = eq.icon;
          return (
            <div key={idx} className={`equipment-card glass-panel ${isImageLeft ? 'image-left' : ''}`}>
              <div className="eq-text">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div className="eq-icon-wrapper">
                    <Icon size={32} className="text-accent"/>
                  </div>
                  <h3 className="text-gradient" style={{ fontSize: '2.5rem', margin: 0 }}>{eq.name}</h3>
                </div>
                <p style={{ fontSize: '1.25rem', lineHeight: 1.8 }}>{eq.desc}</p>
                <p style={{ opacity: 0.7, fontSize: '1.05rem' }}>
                  Further details and technical specifications about this equipment can be found in our lab manual. 
                  Students can book time slots to use this machinery safely under faculty supervision.
                </p>
              </div>
              
              <div className="eq-image glass">
                <span style={{ opacity: 0.6 }}>{eq.name} <br/> Image Placeholder</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Equipment;
