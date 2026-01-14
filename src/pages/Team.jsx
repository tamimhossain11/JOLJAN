import { motion } from 'framer-motion';
import { FiUsers, FiTool, FiCpu, FiFileText } from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import Footer from '../components/Footer';
import '../styles/Team.css';

const Team = () => {
  const departments = [
    {
      id: 'mechanical',
      icon: <FiTool />,
      name: 'Mechanical Team',
      color: '#667eea',
      description: 'Designing and building the physical structure and systems',
      members: [
        {
          name: 'Team Member 1',
          role: 'Mechanical Lead',
          responsibility: 'Hull design and structural engineering'
        },
        {
          name: 'Team Member 2',
          role: 'Propulsion Specialist',
          responsibility: 'Thruster integration and testing'
        },
        {
          name: 'Team Member 3',
          role: 'CAD Designer',
          responsibility: '3D modeling and technical drawings'
        },
        {
          name: 'Team Member 4',
          role: 'Fabrication Engineer',
          responsibility: 'Manufacturing and assembly'
        },
      ]
    },
    {
      id: 'electrical',
      icon: <FiCpu />,
      name: 'Electrical Team',
      color: '#f093fb',
      description: 'Power systems, sensors, and electronic integration',
      members: [
        {
          name: 'Team Member 5',
          role: 'Electrical Lead',
          responsibility: 'Power distribution and circuit design'
        },
        {
          name: 'Team Member 6',
          role: 'Sensor Integration',
          responsibility: 'GPS, IMU, and sensor systems'
        },
        {
          name: 'Team Member 7',
          role: 'PCB Designer',
          responsibility: 'Custom circuit board design'
        },
        {
          name: 'Team Member 8',
          role: 'Electronics Technician',
          responsibility: 'Wiring and hardware testing'
        },
      ]
    },
    {
      id: 'software',
      icon: <FiCpu />,
      name: 'Software & Autonomy Team',
      color: '#4facfe',
      description: 'Autonomous navigation, AI, and control systems',
      members: [
        {
          name: 'Team Member 9',
          role: 'Software Lead',
          responsibility: 'Overall software architecture'
        },
        {
          name: 'Team Member 10',
          role: 'Autonomy Engineer',
          responsibility: 'Path planning and navigation'
        },
        {
          name: 'Team Member 11',
          role: 'Computer Vision',
          responsibility: 'Object detection and perception'
        },
        {
          name: 'Team Member 12',
          role: 'Controls Engineer',
          responsibility: 'PID tuning and control systems'
        },
        {
          name: 'Team Member 13',
          role: 'AI Specialist',
          responsibility: 'Machine learning and AI models'
        },
      ]
    },
    {
      id: 'management',
      icon: <FiFileText />,
      name: 'Management & Documentation',
      color: '#43e97b',
      description: 'Project management, documentation, and outreach',
      members: [
        {
          name: 'Team Member 14',
          role: 'Team Captain',
          responsibility: 'Overall team coordination'
        },
        {
          name: 'Team Member 15',
          role: 'Documentation Lead',
          responsibility: 'Technical documentation and reports'
        },
        {
          name: 'Team Member 16',
          role: 'Outreach Coordinator',
          responsibility: 'Sponsorship and public relations'
        },
        {
          name: 'Team Member 17',
          role: 'Finance Manager',
          responsibility: 'Budget and resource management'
        },
      ]
    }
  ];

  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="page-hero team-hero">
        <div className="container">
          <AnimatedSection>
            <motion.div
              className="hero-icon"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FiUsers size={50} />
            </motion.div>
            <h1 className="page-title">The Team</h1>
            <p className="page-subtitle">
              Meet the passionate individuals behind Dreams of Bangladesh
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Introduction */}
      <AnimatedSection className="team-intro-section">
        <div className="container">
          <GlassCard className="team-intro-card">
            <h2 className="section-title">Meet the Team Behind the Boat</h2>
            <p className="intro-text">
              Our team is a diverse group of engineers, programmers, designers, and innovators 
              united by a common passion for robotics and autonomous systems. We come from 
              various disciplines, each bringing unique skills and perspectives that contribute 
              to the success of our RoboBoat project. Together, we push the boundaries of what's 
              possible in maritime autonomy.
            </p>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* Group Photo */}
      <AnimatedSection className="group-photo-section">
        <div className="container">
          <GlassCard hover={false} className="group-photo-card">
            <div className="group-photo-placeholder">
              <div className="placeholder-icon">📸</div>
              <p>Team Photo</p>
              <span className="photo-note">Dreams of Bangladesh - RoboBoat 2025</span>
            </div>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* Department Sections */}
      <div className="departments-container">
        {departments.map((dept, deptIndex) => (
          <AnimatedSection key={dept.id} className="department-section">
            <div className="container">
              <div className="department-header">
                <div 
                  className="department-icon" 
                  style={{ background: `linear-gradient(135deg, ${dept.color} 0%, ${dept.color}dd 100%)` }}
                >
                  {dept.icon}
                </div>
                <div className="department-header-text">
                  <h2 className="department-name">{dept.name}</h2>
                  <p className="department-description">{dept.description}</p>
                </div>
              </div>

              <div className="members-grid">
                {dept.members.map((member, memberIndex) => (
                  <AnimatedSection key={memberIndex} delay={memberIndex * 0.1}>
                    <GlassCard className="member-card">
                      <div className="member-photo-placeholder">
                        <div className="photo-icon">👤</div>
                      </div>
                      <div className="member-info">
                        <h3 className="member-name">{member.name}</h3>
                        <p className="member-role">{member.role}</p>
                        <p className="member-responsibility">{member.responsibility}</p>
                      </div>
                    </GlassCard>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Team Stats */}
      <AnimatedSection className="team-stats-section">
        <div className="container">
          <h2 className="section-title">Our Team at a Glance</h2>
          <div className="stats-grid">
            <GlassCard>
              <div className="stat-number">25+</div>
              <div className="stat-label">Team Members</div>
            </GlassCard>
            <GlassCard>
              <div className="stat-number">4</div>
              <div className="stat-label">Departments</div>
            </GlassCard>
            <GlassCard>
              <div className="stat-number">1000+</div>
              <div className="stat-label">Hours of Work</div>
            </GlassCard>
            <GlassCard>
              <div className="stat-number">1</div>
              <div className="stat-label">Common Goal</div>
            </GlassCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Join Us CTA */}
      <AnimatedSection className="join-cta-section">
        <div className="container">
          <GlassCard className="join-cta-card">
            <h2>Want to Join Our Team?</h2>
            <p>
              We're always looking for passionate individuals who want to contribute to 
              cutting-edge robotics projects. If you're interested in joining Dreams of 
              Bangladesh, get in touch with us!
            </p>
            <a href="/contact" className="btn btn-primary">
              Contact Us
            </a>
          </GlassCard>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Team;
