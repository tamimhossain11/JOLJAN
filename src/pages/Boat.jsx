import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import { FiCpu, FiRadio, FiSettings, FiBatteryCharging } from 'react-icons/fi';
import '../styles/Boat.css';

const Boat = () => {
  const specs = [
    { icon: <FiCpu />, label: 'Processor', value: 'Jetson Nano' },
    { icon: <FiRadio />, label: 'Navigation', value: 'GPS + IMU' },
    { icon: <FiBatteryCharging />, label: 'Battery', value: 'LiPo 6S' },
    { icon: <FiSettings />, label: 'Control', value: 'ROS2' },
  ];

  const features = [
    {
      title: 'Autonomous Navigation',
      description: 'Advanced pathfinding algorithms for precise waypoint navigation'
    },
    {
      title: 'Object Detection',
      description: 'Real-time computer vision for obstacle avoidance'
    },
    {
      title: 'Sensor Fusion',
      description: 'Multi-sensor integration for accurate positioning'
    },
    {
      title: 'Robust Design',
      description: 'Waterproof and durable construction for all conditions'
    },
  ];

  return (
    <div className="boat-page">
      <section className="page-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">Our Boat</h1>
            <p className="page-subtitle">
              A state-of-the-art autonomous surface vehicle designed for excellence
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="boat-showcase">
        <div className="container">
          <AnimatedSection>
            <GlassCard hover={false} className="boat-image-card">
              <div className="boat-image-placeholder">
                <div className="placeholder-icon">🚤</div>
                <p>Boat Image</p>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      <section className="specs-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Technical Specifications</h2>
          </AnimatedSection>
          <div className="specs-grid">
            {specs.map((spec, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard>
                  <div className="spec-icon">{spec.icon}</div>
                  <div className="spec-label">{spec.label}</div>
                  <div className="spec-value">{spec.value}</div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Key Features</h2>
          </AnimatedSection>
          <div className="features-grid">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Boat;


