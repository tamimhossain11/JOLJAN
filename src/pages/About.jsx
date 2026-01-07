import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import { FiUsers, FiTarget, FiZap } from 'react-icons/fi';
import '../styles/About.css';

const About = () => {
  const team = [
    { name: 'Team Lead', role: 'Project Management' },
    { name: 'Lead Engineer', role: 'Mechanical Design' },
    { name: 'Software Lead', role: 'Autonomous Systems' },
    { name: 'Electronics Lead', role: 'Hardware Integration' },
  ];

  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">About Us</h1>
            <p className="page-subtitle">
              Passionate engineers pushing the boundaries of autonomous maritime technology
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Our Mission</h2>
            <GlassCard hover={false} className="mission-card">
              <p className="mission-text">
                At DOB JOLJAN, we strive to innovate and excel in the field of autonomous 
                surface vehicles. Our team brings together diverse talents in engineering, 
                programming, and design to create cutting-edge solutions for the Roboboat 
                Competition. We believe in pushing boundaries, learning from challenges, 
                and inspiring the next generation of maritime robotics engineers.
              </p>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Our Values</h2>
          </AnimatedSection>
          <div className="values-grid">
            <AnimatedSection delay={0.2}>
              <GlassCard>
                <div className="value-icon"><FiTarget size={40} /></div>
                <h3>Innovation</h3>
                <p>Constantly pushing the boundaries of what's possible in autonomous navigation</p>
              </GlassCard>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <GlassCard>
                <div className="value-icon"><FiUsers size={40} /></div>
                <h3>Collaboration</h3>
                <p>Working together as a unified team to achieve extraordinary results</p>
              </GlassCard>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <GlassCard>
                <div className="value-icon"><FiZap size={40} /></div>
                <h3>Excellence</h3>
                <p>Maintaining the highest standards in design, testing, and competition</p>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Meet The Team</h2>
          </AnimatedSection>
          <div className="team-grid">
            {team.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard>
                  <div className="team-member-avatar">👤</div>
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="team-member-role">{member.role}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


