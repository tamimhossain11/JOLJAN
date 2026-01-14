import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import Footer from '../components/Footer';
import { 
  FiCpu, 
  FiRadio, 
  FiSettings, 
  FiBatteryCharging,
  FiBox,
  FiZap,
  FiEye,
  FiNavigation,
  FiShield,
  FiActivity,
  FiWifi,
  FiLayers,
  FiTool,
  FiAnchor
} from 'react-icons/fi';
import '../styles/Boat.css';

const Boat = () => {
  const specifications = [
    { label: 'Length', value: '1.5 meters' },
    { label: 'Width', value: '0.6 meters' },
    { label: 'Weight', value: '25 kg' },
    { label: 'Hull Type', value: 'Catamaran' },
    { label: 'Material', value: 'Carbon Fiber & Marine Plywood' },
    { label: 'Max Speed', value: '2.5 m/s' },
  ];

  const systemSections = [
    {
      icon: <FiBox />,
      title: 'Hull & Mechanical Design',
      description: 'Engineered for stability and performance',
      details: [
        'Catamaran hull design for superior stability in various water conditions',
        'Carbon fiber reinforced structure for optimal strength-to-weight ratio',
        'Waterproof compartments protecting electronics from water ingress',
        'Modular design allowing easy access to all components for maintenance',
        'Low center of gravity ensuring stability during high-speed maneuvers'
      ]
    },
    {
      icon: <FiZap />,
      title: 'Propulsion System',
      description: 'Powerful and precise thrust control',
      details: [
        'Dual brushless DC thrusters (T200) providing 5kg thrust each',
        'Differential thrust control enabling precise turning and maneuvering',
        'Electronic Speed Controllers (ESC) for smooth speed regulation',
        'Custom mounting system for optimal thrust vectoring',
        'Water-cooled motors for extended operation periods'
      ]
    },
    {
      icon: <FiBatteryCharging />,
      title: 'Power System',
      description: 'Reliable and efficient energy management',
      details: [
        '6S LiPo battery (22.2V, 10,000mAh) for main propulsion',
        '4S LiPo battery (14.8V, 5,000mAh) for electronics and sensors',
        'DC-DC converters providing stable 5V and 12V rails',
        'Power distribution board with individual circuit protection',
        'Real-time voltage and current monitoring for power management',
        'Emergency battery backup system for safety-critical components'
      ]
    },
    {
      icon: <FiNavigation />,
      title: 'Navigation & Control',
      description: 'Precision navigation and autonomous control',
      details: [
        'Pixhawk 4 autopilot running ArduPilot firmware',
        'RTK-GPS module (u-blox ZED-F9P) providing centimeter-level accuracy',
        '9-DOF IMU for orientation and motion tracking',
        'Magnetometer for accurate heading information',
        'PID control loops tuned for our specific hull design',
        'Waypoint navigation with dynamic path planning',
        'Failsafe modes including Return-to-Launch (RTL) and emergency stop'
      ]
    },
    {
      icon: <FiEye />,
      title: 'Perception System',
      description: 'Advanced sensors for environmental awareness',
      details: [
        'Intel RealSense D435i depth camera for 3D perception',
        'High-resolution USB cameras (1080p) for object detection',
        'LiDAR sensor (RPLIDAR A1) for 2D obstacle detection',
        'Ultrasonic sensors for close-range collision avoidance',
        'Custom computer vision pipeline using OpenCV and TensorFlow',
        'Real-time object detection and classification (buoys, markers, obstacles)',
        'Sensor fusion algorithms combining camera and LiDAR data'
      ]
    },
    {
      icon: <FiCpu />,
      title: 'Computing Platform',
      description: 'High-performance embedded computing',
      details: [
        'NVIDIA Jetson Xavier NX as main computing unit',
        'Raspberry Pi 4 for auxiliary processing and data logging',
        'ROS 2 (Robot Operating System) for software architecture',
        'Custom Python and C++ modules for autonomous tasks',
        'Real-time operating system for time-critical operations',
        'Edge computing for low-latency decision making'
      ]
    },
    {
      icon: <FiWifi />,
      title: 'Communication',
      description: 'Robust wireless connectivity and telemetry',
      details: [
        '915 MHz radio telemetry (RFD900x) for long-range control',
        '2.4 GHz Wi-Fi for high-bandwidth data streaming',
        'MAVLink protocol for telemetry and commands',
        'Ground control station software for real-time monitoring',
        'Video streaming capability for FPV and debugging',
        'Data logging system recording all sensor inputs and system states'
      ]
    },
    {
      icon: <FiShield />,
      title: 'Safety Systems',
      description: 'Multiple layers of safety and redundancy',
      details: [
        'Remote emergency stop (E-stop) with 100-meter range',
        'Hardware kill switch accessible from exterior',
        'Geofencing preventing boat from leaving designated area',
        'Low battery automatic return-to-launch',
        'Watchdog timers detecting system failures',
        'Redundant GPS and compass for navigation reliability',
        'Bright LED indicators showing operational status',
        'Audible alarm for warning signals'
      ]
    }
  ];

  return (
    <div className="boat-page">
      {/* Hero Section */}
      <section className="page-hero boat-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">DoB Joljan</h1>
            <p className="page-subtitle">
              Our Autonomous Surface Vehicle for RoboBoat 2026
            </p>
            <div className="hero-tagline">
              <FiActivity className="tagline-icon" />
              <span>Reliability • Precision • Innovation</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Design Philosophy */}
      <AnimatedSection className="philosophy-section">
        <div className="container">
          <GlassCard className="philosophy-card">
            <h2 className="section-title">Design Philosophy</h2>
            <p className="philosophy-text">
              DoB Joljan is the autonomous marine robot proudly developed by Dreams of Bangladesh for RoboBoat 2026. 
              Designed with precision, innovation, and teamwork in mind, DoB Joljan is built to navigate challenging 
              waters, complete complex tasks, and demonstrate the creativity and skill of our team. Every component 
              reflects careful planning and hands-on engineering—from its responsive motor system to its intelligent 
              sensors that allow it to detect obstacles, follow paths, and make quick decisions in real time. Beyond 
              the technical aspects, DoB Joljan embodies our philosophy: learning through experimentation, improving 
              through failure, and pushing the limits of what young engineers can achieve.
            </p>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* Boat Showcase */}
      <section className="boat-showcase">
        <div className="container">
          <AnimatedSection>
            <GlassCard hover={false} className="boat-image-card">
              <img src="/boat3d-1.jpeg" alt="DoB Joljan - Autonomous Surface Vehicle" className="boat-main-image" />
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Specifications */}
      <AnimatedSection className="specs-section">
        <div className="container">
          <h2 className="section-title">Technical Specifications</h2>
          <div className="specs-grid">
            {specifications.map((spec, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard className="spec-card">
                  <div className="spec-label">{spec.label}</div>
                  <div className="spec-value">{spec.value}</div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Detailed System Sections */}
      <div className="systems-sections">
        {systemSections.map((section, index) => (
          <AnimatedSection key={index} className="system-section">
            <div className="container">
              <div className="system-header">
                <div className="system-icon-wrapper">
                  <div className="system-icon">{section.icon}</div>
                </div>
                <div className="system-header-text">
                  <h2 className="system-title">{section.title}</h2>
                  <p className="system-description">{section.description}</p>
                </div>
              </div>
              <GlassCard className="system-details">
                <ul className="details-list">
                  {section.details.map((detail, idx) => (
                    <li key={idx}>
                      <FiLayers className="list-icon" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* 3D Design Section */}
      <AnimatedSection className="design-3d-section">
        <div className="container">
          <h2 className="section-title">3D Design & Components</h2>
          <p className="section-subtitle">
            Explore every angle and component of DoB Joljan's design
          </p>
          
          <div className="design-renders-grid">
            <AnimatedSection delay={0.1}>
              <GlassCard hover={false} className="render-card">
                <img src="/boat3d-1.jpeg" alt="DoB Joljan Top Side View" className="render-image" />
                <div className="render-label">
                  <p>Top Side View</p>
                </div>
              </GlassCard>
            </AnimatedSection>
            
            <AnimatedSection delay={0.15}>
              <GlassCard hover={false} className="render-card">
                <img src="/boat3d-2.jpeg" alt="DoB Joljan Back Angle" className="render-image" />
                <div className="render-label">
                  <p>Back Angle View</p>
                </div>
              </GlassCard>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <GlassCard hover={false} className="render-card">
                <img src="/boat3d-3.jpeg" alt="DoB Joljan Side View" className="render-image" />
                <div className="render-label">
                  <p>Side View</p>
                </div>
              </GlassCard>
            </AnimatedSection>
            
            <AnimatedSection delay={0.25}>
              <GlassCard hover={false} className="render-card">
                <img src="/boat3d-4.jpeg" alt="DoB Joljan Component Detail" className="render-image" />
                <div className="render-label">
                  <p>Component Detail</p>
                </div>
              </GlassCard>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <GlassCard hover={false} className="render-card">
                <img src="/boat3d-5.jpeg" alt="DoB Joljan Front View" className="render-image" />
                <div className="render-label">
                  <p>Front View</p>
                </div>
              </GlassCard>
            </AnimatedSection>
            
            <AnimatedSection delay={0.35}>
              <GlassCard hover={false} className="render-card">
                <img src="/boat3d-6.jpeg" alt="DoB Joljan Internal View" className="render-image" />
                <div className="render-label">
                  <p>Internal Components</p>
                </div>
              </GlassCard>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <GlassCard hover={false} className="render-card">
                <img src="/boat3d-7.jpeg" alt="DoB Joljan Hull Detail" className="render-image" />
                <div className="render-label">
                  <p>Hull Detail</p>
                </div>
              </GlassCard>
            </AnimatedSection>
            
            <AnimatedSection delay={0.45}>
              <GlassCard hover={false} className="render-card">
                <img src="/boat3d-8.jpeg" alt="DoB Joljan Propulsion" className="render-image" />
                <div className="render-label">
                  <p>Propulsion System</p>
                </div>
              </GlassCard>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5}>
              <GlassCard hover={false} className="render-card">
                <img src="/boat3d-9.jpeg" alt="DoB Joljan Electronics Bay" className="render-image" />
                <div className="render-label">
                  <p>Electronics Bay</p>
                </div>
              </GlassCard>
            </AnimatedSection>
            
            <AnimatedSection delay={0.55}>
              <GlassCard hover={false} className="render-card">
                <img src="/boat3d-10.jpeg" alt="DoB Joljan Sensor Mount" className="render-image" />
                <div className="render-label">
                  <p>Sensor Mounting</p>
                </div>
              </GlassCard>
            </AnimatedSection>
            
            <AnimatedSection delay={0.6}>
              <GlassCard hover={false} className="render-card">
                <img src="/boat3d-11.jpeg" alt="DoB Joljan Assembly View" className="render-image" />
                <div className="render-label">
                  <p>Assembly View</p>
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Boat;


