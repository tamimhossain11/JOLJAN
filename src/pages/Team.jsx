import { motion } from 'framer-motion';
import { FiUsers, FiTool, FiCpu, FiFileText, FiActivity } from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import Footer from '../components/Footer';
import '../styles/Team.css';

const Team = () => {
  const leadership = [
    {
      name: 'MD Moin Uddin',
      role: 'Team Advisor',
      image: '/team/moeen.jpeg'
    },
    {
      name: 'MD Mubassirul Islam',
      role: 'Team Mentor',
      image: '/team/mubasshir.jpeg'
    },
    {
      name: 'Mahadir Islam',
      role: 'Team Lead',
      image: '/team/mahadir.jpeg'
    },
    {
      name: 'Mahadi Hassan',
      role: 'Team Co-Lead',
      image: '/team/mahadi.jpeg'
    },
  ];

  const departments = [
    {
      id: 'mechanical',
      icon: <FiTool />,
      name: 'Mechanical Team',
      color: '#667eea',
      description: 'Designing and building the physical structure and systems',
      members: [
        {
          name: 'Al Amin Sani',
          role: 'Mechanical Lead',
          image: '/team/alamin.jpeg'
        },
        {
          name: 'Samin Yaser',
          role: 'Mechanical Member',
          image: '/team/samin.jpeg'
        },
        {
          name: 'Mohammed Nawfil Aziz',
          role: 'Mechanical Member',
          image: '/team/nawfil.jpeg'
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
          name: 'Dewan MD Foyzullah',
          role: 'Electrical Lead',
          image: '/team/munim.jpeg'
        },
        {
          name: 'Abrar Atif Rahman',
          role: 'Electrical Member',
          image: '/team/atif.jpeg'
        },
        {
          name: 'Ayaan Islam Ariyan',
          role: 'Electrical Member',
          image: '/team/ariyan.jpeg'
        },
        {
          name: 'Kamrul Islam',
          role: 'Electrical Member',
          image: '/team/kamrul.jpeg'
        },
      ]
    },
    {
      id: 'software',
      icon: <FiCpu />,
      name: 'Software Team',
      color: '#4facfe',
      description: 'Autonomous navigation and control systems',
      members: [
        {
          name: 'Anas Bin Azim',
          role: 'Software Lead',
          image: '/team/anas.jpeg'
        },
        {
          name: 'MD Asadullah Sami',
          role: 'Software Member',
          image: '/team/sami.jpeg'
        },
      ]
    },
    {
      id: 'testing',
      icon: <FiActivity />,
      name: 'Testing Team',
      color: '#f59e0b',
      description: 'Quality assurance, testing, and validation',
      members: [
        {
          name: 'Ishmam Tahsan Masafi',
          role: 'Testing Lead',
          image: '/team/masafi.jpeg'
        },
      ]
    },
    {
      id: 'documentation',
      icon: <FiFileText />,
      name: 'Documentation Team',
      color: '#43e97b',
      description: 'Technical documentation and reports',
      members: [
        {
          name: 'Ahnaf Safwan Islam',
          role: 'Documentation Lead',
          image: '/team/ahnaf.jpeg'
        },
      ]
    },
    {
      id: 'website',
      icon: <FiFileText />,
      name: 'Website Team',
      color: '#ffa751',
      description: 'Web development and digital presence',
      members: [
        {
          name: 'Tamim Hossain',
          role: 'Website Lead',
          image: '/team/tamim.jpeg'
        },
      ]
    },
    {
      id: 'media',
      icon: <FiFileText />,
      name: 'Media & Outreach Team',
      color: '#e74c3c',
      description: 'Visual content, media, and public relations',
      members: [
        {
          name: 'Mohammad Sifat',
          role: 'Visual Lead',
          image: '/team/sifat.jpeg'
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

      {/* Team Video */}
      <AnimatedSection className="team-video-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <GlassCard className="team-video-card" hover={false}>
            <div className="video-wrapper">
              <iframe 
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Freel%2F699511343100055%2F&show_text=false&width=560&t=0" 
                width="560" 
                height="314" 
                style={{border: 'none', overflow: 'hidden'}} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* Leadership Section */}
      <AnimatedSection className="leadership-section">
        <div className="container">
          <h2 className="section-title">Leadership & Advisory</h2>
          <div className="leadership-grid">
            {leadership.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard className="member-card leadership-card">
                  <div className="member-photo">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Group Photos */}
      <AnimatedSection className="group-photo-section">
        <div className="container">
          <h2 className="section-title">Team DoB Joljan</h2>
          <div className="single-photo-container">
            <GlassCard hover={false} className="group-photo-card">
              <img src="/team/team1.jpeg" alt="Dreams of Bangladesh Team" className="group-photo" />
            </GlassCard>
          </div>
          <p className="gallery-link-text">
            View more team photos in our <a href="/gallery" className="gallery-link">Gallery</a>
          </p>
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
                      <div className="member-photo">
                        <img src={member.image} alt={member.name} />
                      </div>
                      <div className="member-info">
                        <h3 className="member-name">{member.name}</h3>
                        <p className="member-role">{member.role}</p>
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
              <div className="stat-number">16</div>
              <div className="stat-label">Team Members</div>
            </GlassCard>
            <GlassCard>
              <div className="stat-number">6</div>
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
