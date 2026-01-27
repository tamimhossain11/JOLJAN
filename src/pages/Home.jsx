import { motion } from 'framer-motion';
import { FiAward, FiTarget, FiUsers, FiArrowRight, FiTool, FiZap, FiShield } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import Footer from '../components/Footer';
import '../styles/Home.css';

const Home = () => {
  const navCards = [
    {
      icon: <FiTarget size={40} />,
      title: 'RoboBoat 2026',
      description: 'Learn about the competition and our strategy',
      link: '/roboboat',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FiTool size={40} />,
      title: 'The Boat',
      description: 'Explore our autonomous surface vehicle',
      link: '/boat',
      gradient: 'from-sky-500 to-cyan-500' // Changed from purple to sky/cyan
    },
    {
      icon: <FiUsers size={40} />,
      title: 'The Team',
      description: 'Meet the people behind the innovation',
      link: '/team',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <FiZap size={40} />,
      title: 'Projects',
      description: 'Discover our work and achievements',
      link: '/projects',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section with strong visual */}
      <section className="hero-section">
        {/* Background Video handled globally by BackgroundVideo.jsx */}

        <div className="hero-content">
          <div className="hero-cards-container">
            {/* Card 1: Title & Subtitle */}
            <GlassCard className="hero-glass-card" hover={false}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="hero-title">
                  DoB <span className="gradient-text">Joljan</span>
                </h1>
                <h2 className="hero-subtitle">
                  Innovation on Water.
                  <br />
                  Teamwork on Land.
                </h2>
              </motion.div>
            </GlassCard>

            {/* Card 2: Description & Actions */}
            <GlassCard className="hero-glass-card" hover={false}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="hero-description">
                  Autonomous marine robotics for RoboBoat 2026. Built with precision, tested with
                  persistence, and driven by innovation.
                </p>
                <div className="hero-buttons">
                  <Link to="/boat" className="btn btn-primary">
                    Explore the Boat <FiArrowRight />
                  </Link>
                  <Link to="/roboboat" className="btn btn-secondary">
                    RoboBoat 2026
                  </Link>
                </div>
              </motion.div>
            </GlassCard>
          </div>
        </div>

        <div className="hero-background">
          <div className="wave-animation"></div>
        </div>
      </section>

      {/* Introduction Video Section */}
      <AnimatedSection className="video-section">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">
            From concept to competition—building an autonomous surface vehicle for RoboBoat 2026
          </p>
          <GlassCard hover={false} className="video-card">
            <div className="video-wrapper-home">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Freel%2F699511343100055%2F&show_text=false&width=560&t=0"
                width="560"
                height="314"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Team & Project Overview"
              ></iframe>
            </div>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* About Dreams of Bangladesh */}
      <AnimatedSection className="about-dob-section">
        <div className="container">
          <div className="about-dob-content">
            <div className="about-dob-text">
              <h2 className="section-title">About Dreams of Bangladesh</h2>

              <div className="about-subsection">
                <h3><FiUsers className="inline-icon" /> Who We Are</h3>
                <p>
                  Dreams of Bangladesh (DoB) is a youth-led organization making robotics and marine technology
                  accessible to students across Bangladesh. We believe in learning by building—turning ideas into
                  working projects through hands-on experience in robotics, embedded systems, AI, and autonomous systems.
                </p>
              </div>

              <div className="about-subsection">
                <h3><FiTarget className="inline-icon" /> Why RoboBoat</h3>
                <p>
                  RoboBoat 2026 gives us the opportunity to apply our skills in real-world marine robotics,
                  represent Bangladesh internationally, and push our limits as engineers and innovators.
                  Every challenge teaches us resilience, teamwork, and creative problem-solving.
                </p>
              </div>

              <div className="about-subsection">
                <h3><FiZap className="inline-icon" /> Our Vision</h3>
                <p>
                  To empower the next generation of Bangladeshi engineers and innovators, proving that
                  great ideas can come from anywhere. We're building confidence, competence, and a
                  community that will contribute to global challenges in robotics and beyond.
                </p>
              </div>
            </div>

            <div className="about-dob-visual">
              <GlassCard hover={false} className="team-boat-photo-card">
                <img
                  src="/gallery/team-boat-1.jpg"
                  alt="Dreams of Bangladesh Team with Boat"
                  className="team-boat-image"
                />
              </GlassCard>

              <div className="mission-highlights">
                <div className="highlight-item">
                  <FiShield className="highlight-icon" />
                  <div>
                    <h4>Safety First</h4>
                    <p>Multiple failsafes and emergency systems</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FiAward className="highlight-icon" />
                  <div>
                    <h4>Autonomous</h4>
                    <p>Full onboard decision-making capabilities</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FiUsers className="highlight-icon" />
                  <div>
                    <h4>Student-Led</h4>
                    <p>Designed, built, and programmed by students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Quick Navigation Cards */}
      <AnimatedSection className="quick-nav-section">
        <div className="container">
          <h2 className="section-title">Explore Our Journey</h2>
          <p className="section-subtitle">
            Discover more about our competition, technology, team, and projects
          </p>
          <div className="quick-nav-grid">
            {navCards.map((card, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Link to={card.link} className="nav-card-link">
                  <GlassCard className="nav-card">
                    <div className={`nav-card-icon gradient-${card.gradient}`}>
                      {card.icon}
                    </div>
                    <h3 className="nav-card-title">{card.title}</h3>
                    <p className="nav-card-description">{card.description}</p>
                    <div className="nav-card-arrow">
                      <FiArrowRight />
                    </div>
                  </GlassCard>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="stats-section">
        <div className="container">
          <h2 className="section-title">DoB Joljan at a Glance</h2>
          <div className="stats-grid">
            <GlassCard>
              <div className="stat-number">1</div>
              <div className="stat-label">Autonomous Surface Vehicle</div>
            </GlassCard>
            <GlassCard>
              <div className="stat-number">25+</div>
              <div className="stat-label">Team Members</div>
            </GlassCard>
            <GlassCard>
              <div className="stat-number">6</div>
              <div className="stat-label">Mission Challenges</div>
            </GlassCard>
            <GlassCard>
              <div className="stat-number">2026</div>
              <div className="stat-label">RoboBoat Competition</div>
            </GlassCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;


