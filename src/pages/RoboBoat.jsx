import { motion } from 'framer-motion';
import { 
  FiAward, 
  FiTarget, 
  FiCheckCircle, 
  FiTrendingUp, 
  FiShield,
  FiNavigation,
  FiZap,
  FiAnchor,
  FiPackage,
  FiCpu,
  FiActivity
} from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import Footer from '../components/Footer';
import '../styles/RoboBoat.css';

const RoboBoat = () => {
  const challenges = [
    {
      icon: <FiNavigation />,
      name: 'Evacuation Route & Return',
      description: 'Navigate through colored gates to establish safe evacuation routes in the harbor'
    },
    {
      icon: <FiTarget />,
      name: 'Debris Clearance',
      description: 'Detect and report hazards and survivors in a debris field using autonomous perception systems'
    },
    {
      icon: <FiZap />,
      name: 'Emergency Response Sprint',
      description: 'Test speed and maneuverability around indicator buoys in time-critical scenarios'
    },
    {
      icon: <FiPackage />,
      name: 'Supply Drop',
      description: 'Precisely deliver water or racquetballs to stationary vessels in need of supplies'
    },
    {
      icon: <FiAnchor />,
      name: 'Navigate the Marina',
      description: 'Autonomously dock in the most desirable available slip within the marina'
    },
    {
      icon: <FiPackage />,
      name: 'Harbor Alert',
      description: 'Respond to audible signals that override ongoing tasks, directing the ASV to emergency zones'
    }
  ];

  const competitionStages = [
    {
      title: 'Static Judging',
      description: 'Present design documentation, engineering approach, and technical decisions to judges'
    },
    {
      title: 'Qualification Round',
      description: 'Demonstrate basic autonomous capabilities and safety systems'
    },
    {
      title: 'Semi-Finals',
      description: 'Complete multiple challenges with increasing difficulty'
    },
    {
      title: 'Finals',
      description: 'Top teams compete in the most challenging autonomous tasks'
    }
  ];

  const strategyPoints = [
    {
      icon: <FiCheckCircle />,
      title: 'Design Philosophy',
      description: 'Reliability over complexity - building robust systems that work consistently'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Testing Approach',
      description: 'Iterative testing in real-world conditions to validate and improve performance'
    },
    {
      icon: <FiShield />,
      title: 'Safety Focus',
      description: 'Multiple layers of safety systems and failsafes for secure operation'
    },
    {
      icon: <FiAward />,
      title: 'Reliability First',
      description: 'Proven technologies and methodologies to ensure consistent results'
    }
  ];

  return (
    <div className="roboboat-page">
      {/* Hero Section */}
      <section className="page-hero roboboat-hero">
        <div className="container">
          <AnimatedSection>
            <motion.div
              className="roboboat-logo-container"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src="/roboboat-logo.webp" alt="RoboBoat" className="roboboat-logo" />
            </motion.div>
            <h1 className="page-title">RoboBoat 2026</h1>
            <p className="page-subtitle">
              International Autonomous Surface Vehicle Competition - Storm Response
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What is RoboBoat */}
      <AnimatedSection className="what-is-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2 className="section-title">What is RoboBoat?</h2>
              <p className="text-large">
                RoboBoat is an international, hands-on program that brings together students from around 
                the world to design and build autonomous surface vehicles (ASVs). It creates a collaborative 
                space where innovators in robotics and maritime autonomy share ideas, test real-world solutions, 
                and push the boundaries of autonomous marine technology.
              </p>
              <p>
                Through practical challenges and rigorous design documentation, RoboBoat helps participants 
                turn theory into working systems—developing not only advanced technical skills, but also 
                teamwork, problem-solving, and real engineering judgment. Since 2008, the competition has 
                challenged teams to design and develop small-scale (X-Class) Autonomous Surface Vehicles, 
                turning bold ideas into real, working systems.
              </p>
            </div>
            <div className="content-visual">
              <GlassCard hover={false}>
                <div className="image-placeholder">
                  <div className="placeholder-icon">
                    <FiTarget size={80} />
                  </div>
                  <p>RoboBoat Competition</p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why RoboBoat Matters */}
      <AnimatedSection className="why-matters-section">
        <div className="container">
          <h2 className="section-title">Why RoboBoat Matters</h2>
          <div className="matters-grid">
            <GlassCard>
              <div className="matter-icon">
                <FiAnchor size={48} />
              </div>
              <h3>Real-World Maritime Autonomy</h3>
              <p>
                RoboBoat matters because the future of maritime operations is autonomous. As oceans play 
                a critical role in environmental health, global trade, and scientific research, reliable 
                autonomous surface vehicles are essential for monitoring, exploration, and sustainability. 
                RoboBoat provides a real-world platform where the next generation of innovators can actively 
                contribute to this future.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="matter-icon">
                <FiCpu size={48} />
              </div>
              <h3>Engineering, AI & Robotics Impact</h3>
              <p>
                Through hands-on challenges, participants apply engineering, artificial intelligence, and 
                robotics to design and build autonomous surface vehicles capable of navigating complex and 
                unpredictable marine environments. The technologies developed mirror those used in real-world 
                maritime autonomy, from intelligent sensing and perception to autonomous decision-making and control.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="matter-icon">
                <FiAward size={48} />
              </div>
              <h3>Learning Beyond Competition</h3>
              <p>
                Beyond competition scores, RoboBoat emphasizes collaboration, systems thinking, and practical 
                problem-solving—skills that endure long after the event ends. By blending education, competition, 
                and collaboration, RoboBoat has become a launchpad for the next generation of engineers and 
                researchers driving progress in autonomous maritime technology.
              </p>
            </GlassCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Competition Structure */}
      <AnimatedSection className="structure-section">
        <div className="container">
          <h2 className="section-title">Competition Structure</h2>
          <p className="section-subtitle">
            RoboBoat combines Design Documentation with live Autonomy Challenges, evaluating teams on engineering, AI, and robotics skills
          </p>
          <GlassCard className="structure-overview">
            <p className="structure-text">
              Teams progress through <strong>qualification, semi-finals, and finals</strong>, completing tasks like 
              navigation, path-following, speed, docking, and rescue or delivery missions, all while emphasizing 
              safety, reliability, and practical design thinking.
            </p>
            <p className="structure-text">
              This season's theme, <strong>Storm Response</strong>, highlights the real-world impact of autonomous 
              systems in disaster recovery, challenging teams to assess damage, restore operations, and protect 
              communities and ecosystems using technology in purposeful ways.
            </p>
            <p className="structure-text">
              Open to interdisciplinary teams that are mostly full-time students, RoboBoat encourages learning, 
              collaboration, and innovation, with points recognizing performance but the true reward lying in 
              teamwork, problem-solving, and hands-on experience.
            </p>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* Autonomy Challenges */}
      <AnimatedSection className="challenges-section">
        <div className="container">
          <h2 className="section-title">Autonomy Challenges - Storm Response 2026</h2>
          <p className="section-subtitle">
            The 2026 RoboBoat Autonomy Challenge simulates post-storm rescue and recovery operations in a harbor environment
          </p>
          <div className="challenges-grid">
            {challenges.map((challenge, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <GlassCard className="challenge-card">
                  <div className="challenge-icon">{challenge.icon}</div>
                  <h3 className="challenge-name">{challenge.name}</h3>
                  <p className="challenge-description">{challenge.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Our Strategy */}
      <AnimatedSection className="strategy-section">
        <div className="container">
          <h2 className="section-title">Our Strategy</h2>
          <p className="section-subtitle">
            How Dreams of Bangladesh approaches the RoboBoat competition
          </p>
          <div className="strategy-grid">
            {strategyPoints.map((point, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard className="strategy-card">
                  <div className="strategy-icon">{point.icon}</div>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5}>
            <GlassCard className="strategy-details">
              <h3>Our Approach in Detail</h3>
              <div className="approach-content">
                <div className="approach-item">
                  <h4><FiTarget className="approach-icon" /> Full Integrity & Safety</h4>
                  <p>
                    Our team is committed to competing with full integrity, following the RoboNation Code 
                    of Conduct. We will build a fully autonomous, battery-powered ASV that meets all size, 
                    weight, and safety requirements, including onboard and wireless emergency stop systems, 
                    shrouded propulsion, and positive buoyancy. All autonomy decisions are executed onboard, 
                    with remote control reserved for safe retrieval.
                  </p>
                </div>
                <div className="approach-item">
                  <h4><FiActivity className="approach-icon" /> Testing & Documentation</h4>
                  <p>
                    We prioritize obstacle avoidance, careful handling of batteries, and strict compliance 
                    with RF and power regulations. Our team composition emphasizes student leadership, with 
                    active participation in daily briefings, orientations, and TeamTime meetings. All components, 
                    modifications, and system specifications will be documented for transparency and performance 
                    evaluation.
                  </p>
                </div>
                <div className="approach-item">
                  <h4><FiShield className="approach-icon" /> Safety-First Design</h4>
                  <p>
                    Safety is paramount in every aspect of our ASV. We implement onboard and wireless emergency 
                    stop systems, shrouded propulsion for safety, positive buoyancy design, and comprehensive 
                    safety protocols. We maintain a strong on-site presence for deployment and recovery operations, 
                    ensuring safe testing and competition practices.
                  </p>
                </div>
                <div className="approach-item">
                  <h4><FiZap className="approach-icon" /> Collaboration & Innovation</h4>
                  <p>
                    We embrace collaboration, contributing to RoboNation's Data Sharing project to enhance 
                    machine vision reliability. Our approach combines technical excellence, safety-first practices, 
                    and strategic teamwork to maximize performance, learning, and competitive impact, while 
                    showcasing innovation and professionalism on a global stage.
                  </p>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default RoboBoat;
