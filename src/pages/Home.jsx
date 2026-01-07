import { motion } from 'framer-motion';
import { FiAward, FiTarget, FiUsers, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import '../styles/Home.css';

const Home = () => {
  const features = [
    {
      icon: <FiTarget size={40} />,
      title: 'Innovation',
      description: 'Cutting-edge autonomous navigation systems'
    },
    {
      icon: <FiAward size={40} />,
      title: 'Excellence',
      description: 'Award-winning designs and performance'
    },
    {
      icon: <FiUsers size={40} />,
      title: 'Teamwork',
      description: 'Collaborative engineering at its finest'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to <span className="gradient-text">DOB JOLJAN</span>
          </motion.h1>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Pioneering Autonomous Maritime Technology
          </motion.p>
          
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/boat" className="btn btn-primary">
              Explore Our Boat <FiArrowRight />
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </motion.div>
        </div>
        
        <div className="hero-background">
          <div className="wave-animation"></div>
        </div>
      </section>

      {/* Features Section */}
      <AnimatedSection className="features-section">
        <div className="container">
          <h2 className="section-title">What Drives Us</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <GlassCard>
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* About Preview Section */}
      <AnimatedSection className="about-preview-section">
        <div className="container">
          <div className="about-preview-content">
            <div className="about-preview-text">
              <h2 className="section-title">About Our Team</h2>
              <p>
                DOB JOLJAN is a passionate team of engineers and innovators 
                dedicated to pushing the boundaries of autonomous maritime technology. 
                We compete in the prestigious Roboboat Competition, showcasing 
                our advanced autonomous surface vehicle designs.
              </p>
              <Link to="/about" className="btn btn-outline">
                Meet the Team <FiArrowRight />
              </Link>
            </div>
            <div className="about-preview-image">
              <GlassCard hover={false}>
                <div className="image-placeholder">
                  <div className="placeholder-icon">🚤</div>
                  <p>Team Photo</p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <GlassCard>
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </GlassCard>
            <GlassCard>
              <div className="stat-number">20+</div>
              <div className="stat-label">Team Members</div>
            </GlassCard>
            <GlassCard>
              <div className="stat-number">10+</div>
              <div className="stat-label">Competitions</div>
            </GlassCard>
            <GlassCard>
              <div className="stat-number">3+</div>
              <div className="stat-label">Awards Won</div>
            </GlassCard>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="cta-section">
        <div className="container">
          <GlassCard className="cta-card">
            <h2>Ready to Join Our Journey?</h2>
            <p>Get in touch with us to learn more about our project and opportunities.</p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us <FiArrowRight />
            </Link>
          </GlassCard>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;


