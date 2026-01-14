import { motion } from 'framer-motion';
import { FiFolder, FiCalendar, FiTool, FiAward, FiBook } from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import Footer from '../components/Footer';
import '../styles/Projects.css';

const Projects = () => {
  const featuredProject = {
    title: 'RoboBoat 2026 - DoB Joljan',
    year: '2025-2026',
    status: 'Ongoing',
    description: 'DoB Joljan is the autonomous marine robot proudly developed by Dreams of Bangladesh for RoboBoat 2026. Designed with precision, innovation, and teamwork in mind, DoB Joljan is built to navigate challenging waters, complete complex tasks, and demonstrate the creativity and skill of our team. Every component reflects careful planning and hands-on engineering—from its responsive motor system to its intelligent sensors that allow it to detect obstacles, follow paths, and make quick decisions in real time.',
    technologies: [
      'Autonomous Navigation',
      'Python',
      'C++',
      'OpenCV',
      'Computer Vision',
      'Sensor Fusion',
      'GPS/IMU',
      'LiDAR',
      'Protocol Buffers',
      'Emergency Systems'
    ],
    highlights: [
      'Engineered for Storm Response rescue and recovery operations',
      'Autonomous obstacle detection and avoidance',
      'Precise delivery and docking capabilities',
      'Real-time decision-making and path planning',
      'Safety-first design with multiple failsafes',
      'Learning through experimentation and iteration'
    ]
  };

  const pastProjects = [
    {
      title: 'RoboBoat 2024 - Prototype',
      year: '2023-2024',
      category: 'Maritime Robotics',
      description: 'Initial autonomous boat prototype that laid the foundation for JOLJAN. Focused on basic navigation and control systems.',
      technologies: ['Arduino', 'GPS', 'Radio Control', 'Ultrasonic Sensors'],
      outcome: 'Successful autonomous waypoint navigation',
      image: '🚤'
    },
    {
      title: 'Line Following Robot',
      year: '2023',
      category: 'Mobile Robotics',
      description: 'Educational robotics project teaching fundamentals of sensor integration and control algorithms.',
      technologies: ['Arduino', 'IR Sensors', 'Motor Control', 'PID'],
      outcome: 'First place in university competition',
      image: '🤖'
    },
    {
      title: 'Obstacle Avoidance Drone',
      year: '2022-2023',
      category: 'Aerial Robotics',
      description: 'Quadcopter with autonomous obstacle avoidance capabilities using ultrasonic and optical flow sensors.',
      technologies: ['Flight Controller', 'Ultrasonic', 'Optical Flow', 'C++'],
      outcome: 'Demonstrated autonomous flight capabilities',
      image: '🚁'
    },
    {
      title: 'Smart Irrigation System',
      year: '2022',
      category: 'IoT & Automation',
      description: 'IoT-based automated irrigation system using soil moisture sensors and weather data integration.',
      technologies: ['ESP32', 'Sensors', 'MQTT', 'Cloud Platform'],
      outcome: 'Deployed in local agricultural project',
      image: '💧'
    },
    {
      title: 'Robotic Arm Manipulator',
      year: '2021-2022',
      category: 'Industrial Robotics',
      description: '6-DOF robotic arm with inverse kinematics for precise object manipulation and sorting.',
      technologies: ['Servo Motors', 'Kinematics', 'Python', 'Computer Vision'],
      outcome: 'Successfully demonstrated pick-and-place operations',
      image: '🦾'
    },
    {
      title: 'Autonomous Delivery Robot',
      year: '2021',
      category: 'Mobile Robotics',
      description: 'Indoor delivery robot with SLAM capabilities for autonomous navigation in structured environments.',
      technologies: ['ROS', 'LiDAR', 'SLAM', 'Path Planning'],
      outcome: 'Proof of concept for campus delivery system',
      image: '📦'
    }
  ];

  const competitionHistory = [
    {
      year: '2024',
      event: 'RoboBoat International',
      achievement: 'Participated',
      description: 'First international competition participation'
    },
    {
      year: '2023',
      event: 'National Robotics Championship',
      achievement: '2nd Place',
      description: 'Mobile robotics category'
    },
    {
      year: '2022',
      event: 'University Innovation Fair',
      achievement: 'Best Project Award',
      description: 'IoT and automation category'
    },
    {
      year: '2021',
      event: 'Regional Tech Competition',
      achievement: '1st Place',
      description: 'Line following robot challenge'
    }
  ];

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="page-hero projects-hero">
        <div className="container">
          <AnimatedSection>
            <motion.div
              className="hero-icon"
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FiFolder size={50} />
            </motion.div>
            <h1 className="page-title">Our Projects</h1>
            <p className="page-subtitle">
              Showcasing our journey in robotics, automation, and innovation
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Project - RoboBoat 2025 */}
      <AnimatedSection className="featured-project-section">
        <div className="container">
          <div className="featured-badge">
            <FiAward /> Featured Project
          </div>
          <GlassCard className="featured-project-card">
            <div className="featured-content">
              <div className="featured-text">
                <div className="featured-header">
                  <h2 className="featured-title">{featuredProject.title}</h2>
                  <div className="featured-meta">
                    <span className="meta-item">
                      <FiCalendar /> {featuredProject.year}
                    </span>
                    <span className="status-badge ongoing">
                      {featuredProject.status}
                    </span>
                  </div>
                </div>
                <p className="featured-description">{featuredProject.description}</p>

                <div className="featured-subsection">
                  <h3>Key Highlights</h3>
                  <ul className="highlights-list">
                    {featuredProject.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="featured-subsection">
                  <h3>Technologies Used</h3>
                  <div className="tech-tags">
                    {featuredProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="featured-visual">
                <div className="featured-image-placeholder">
                  <div className="placeholder-icon">🚤</div>
                  <p>JOLJAN</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* Past Projects */}
      <AnimatedSection className="past-projects-section">
        <div className="container">
          <h2 className="section-title">Past Projects</h2>
          <p className="section-subtitle">
            Our journey of learning, building, and innovating
          </p>
          <div className="projects-grid">
            {pastProjects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard className="project-card">
                  <div className="project-image-placeholder">
                    <div className="project-icon">{project.image}</div>
                  </div>
                  <div className="project-content">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-meta">
                        <span className="project-year">
                          <FiCalendar size={14} /> {project.year}
                        </span>
                        <span className="project-category">{project.category}</span>
                      </div>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag small">{tech}</span>
                      ))}
                    </div>
                    <div className="project-outcome">
                      <FiAward className="outcome-icon" />
                      <span>{project.outcome}</span>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Competition History */}
      <AnimatedSection className="competition-history-section">
        <div className="container">
          <h2 className="section-title">Competition History</h2>
          <p className="section-subtitle">
            Our achievements and participation in robotics competitions
          </p>
          <div className="competition-timeline">
            {competitionHistory.map((comp, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <GlassCard className="competition-card">
                  <div className="competition-year">{comp.year}</div>
                  <div className="competition-content">
                    <h3 className="competition-event">{comp.event}</h3>
                    <div className="competition-achievement">
                      <FiAward className="achievement-icon" />
                      <span>{comp.achievement}</span>
                    </div>
                    <p className="competition-description">{comp.description}</p>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Research & Prototypes */}
      <AnimatedSection className="research-section">
        <div className="container">
            <GlassCard className="research-card">
            <div className="research-icon">
              <FiBook size={40} />
            </div>
            <h2>Learning & Growth Through DoB Joljan</h2>
            <p>
              Working on DoB Joljan is more than building a robot—it's a journey of learning, experimentation, 
              and growth. Every team member gains hands-on experience in engineering design, programming, and 
              system integration, developing skills that go beyond the classroom. The project teaches problem-solving 
              under real-world constraints, from balancing performance with durability to optimizing efficiency in 
              a competitive environment.
            </p>
            <div className="research-areas">
              <div className="research-item">
                <h4>🎓 Hands-On Experience</h4>
                <p>Engineering design, programming, and system integration in real-world scenarios</p>
              </div>
              <div className="research-item">
                <h4>🤝 Teamwork & Communication</h4>
                <p>Coordinating tasks, sharing ideas, and making collective decisions</p>
              </div>
              <div className="research-item">
                <h4>💡 Resilience & Creativity</h4>
                <p>Learning to adapt quickly when things don't go as planned through testing and iteration</p>
              </div>
            </div>
            <p style={{ marginTop: '2rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              By the end of the journey, each member not only contributes to a sophisticated autonomous robot 
              but also gains confidence, technical competence, and a mindset to tackle future engineering challenges.
            </p>
          </GlassCard>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Projects;
