import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import Footer from '../components/Footer';
import { 
  FiCalendar, 
  FiUser, 
  FiBookOpen, 
  FiTool, 
  FiCheckCircle, 
  FiTrendingUp,
  FiAnchor,
  FiCamera,
  FiSettings,
  FiBatteryCharging,
  FiCpu,
  FiNavigation,
  FiMap,
  FiRadio,
  FiDroplet,
  FiAward,
  FiZap
} from 'react-icons/fi';
import '../styles/Blog.css';

const Blog = () => {
  const categories = [
    { name: 'All Posts', icon: <FiBookOpen />, color: '#667eea' },
    { name: 'Weekly Updates', icon: <FiCalendar />, color: '#43e97b' },
    { name: 'Testing Days', icon: <FiCheckCircle />, color: '#4facfe' },
    { name: 'Design Decisions', icon: <FiTool />, color: '#f093fb' },
    { name: 'Lessons Learned', icon: <FiTrendingUp />, color: '#ffa751' },
  ];

  const posts = [
    {
      title: 'Week 12: Final Testing Before Competition',
      date: 'January 10, 2025',
      author: 'Team Captain',
      category: 'Weekly Updates',
      categoryColor: '#43e97b',
      excerpt: 'This week we completed our final round of testing at the lake. All autonomous navigation tasks are working reliably. We fine-tuned our PID parameters and tested emergency stop procedures multiple times.',
      icon: <FiAnchor size={64} />,
      tags: ['Testing', 'Competition Prep', 'Navigation']
    },
    {
      title: 'Testing Day: Obstacle Detection Challenge',
      date: 'January 5, 2025',
      author: 'Software Lead',
      category: 'Testing Days',
      categoryColor: '#4facfe',
      excerpt: 'Today we tested our computer vision system for obstacle detection. The boat successfully identified and avoided buoys in various lighting conditions. We discovered some issues with reflections that we\'re now addressing.',
      icon: <FiCamera size={64} />,
      tags: ['Computer Vision', 'Testing', 'Obstacles']
    },
    {
      title: 'Design Decision: Choosing Catamaran Hull',
      date: 'December 28, 2024',
      author: 'Mechanical Lead',
      category: 'Design Decisions',
      categoryColor: '#f093fb',
      excerpt: 'After extensive analysis and prototyping, we decided on a catamaran hull design. This provides superior stability for our sensor payload while maintaining good speed. The dual-hull design also offers redundancy in buoyancy.',
      icon: <FiSettings size={64} />,
      tags: ['Hull Design', 'Mechanical', 'Engineering']
    },
    {
      title: 'Week 11: Power System Integration',
      date: 'December 20, 2024',
      author: 'Electrical Team',
      category: 'Weekly Updates',
      categoryColor: '#43e97b',
      excerpt: 'Completed integration of our dual battery system this week. Main propulsion now runs on 6S LiPo while electronics use separate 4S system. This separation improved voltage stability significantly.',
      icon: <FiBatteryCharging size={64} />,
      tags: ['Electronics', 'Power System', 'Integration']
    },
    {
      title: 'Lessons: Why We Switched from ROS 1 to ROS 2',
      date: 'December 15, 2024',
      author: 'Software Team',
      category: 'Lessons Learned',
      categoryColor: '#ffa751',
      excerpt: 'Initially we started with ROS 1, but migrated to ROS 2 for better real-time performance and built-in security features. The migration took two weeks but proved worthwhile for system reliability.',
      icon: <FiCpu size={64} />,
      tags: ['Software', 'ROS', 'Architecture']
    },
    {
      title: 'Testing Day: GPS RTK Accuracy Validation',
      date: 'December 8, 2024',
      author: 'Navigation Team',
      category: 'Testing Days',
      categoryColor: '#4facfe',
      excerpt: 'Validated our RTK-GPS system today achieving consistent 2cm accuracy. Tested in various conditions including under trees and near buildings. The base station setup works perfectly.',
      icon: <FiNavigation size={64} />,
      tags: ['GPS', 'RTK', 'Testing', 'Navigation']
    },
    {
      title: 'Week 10: Autonomous Path Planning Implementation',
      date: 'December 1, 2024',
      author: 'Autonomy Team',
      category: 'Weekly Updates',
      categoryColor: '#43e97b',
      excerpt: 'Implemented A* path planning algorithm for dynamic obstacle avoidance. The boat can now replan its path in real-time when encountering unexpected obstacles.',
      icon: <FiMap size={64} />,
      tags: ['Autonomy', 'Path Planning', 'Algorithms']
    },
    {
      title: 'Design Decision: Sensor Placement Strategy',
      date: 'November 24, 2024',
      author: 'Systems Engineer',
      category: 'Design Decisions',
      categoryColor: '#f093fb',
      excerpt: 'Finalized sensor placement after considering field of view, interference, and mounting accessibility. Camera positioned at bow, LiDAR centrally mounted, GPS antenna on mast.',
      icon: <FiRadio size={64} />,
      tags: ['Sensors', 'Design', 'Integration']
    },
    {
      title: 'Lessons: Waterproofing Electronics - What We Learned',
      date: 'November 18, 2024',
      author: 'Electrical Lead',
      category: 'Lessons Learned',
      categoryColor: '#ffa751',
      excerpt: 'After a water ingress incident, we learned the importance of proper sealing. Now using conformal coating on PCBs, IP67 connectors, and dual-layer enclosures with dessicants.',
      icon: <FiDroplet size={64} />,
      tags: ['Electronics', 'Waterproofing', 'Hardware']
    },
    {
      title: 'Week 9: First Successful Autonomous Run!',
      date: 'November 10, 2024',
      author: 'Team Captain',
      category: 'Weekly Updates',
      categoryColor: '#43e97b',
      excerpt: 'Major milestone achieved! JOLJAN completed its first fully autonomous navigation from start to finish, hitting all waypoints with high accuracy. The team is thrilled!',
      icon: <FiAward size={64} />,
      tags: ['Milestone', 'Autonomy', 'Success']
    },
    {
      title: 'Testing Day: Thruster Performance Analysis',
      date: 'November 3, 2024',
      author: 'Propulsion Team',
      category: 'Testing Days',
      categoryColor: '#4facfe',
      excerpt: 'Conducted thrust tests on both motors. Measured actual thrust curves vs specifications. Fine-tuned ESC settings for smoother acceleration and better low-speed control.',
      icon: <FiZap size={64} />,
      tags: ['Propulsion', 'Testing', 'Performance']
    },
    {
      title: 'Design Decision: Communication Architecture',
      date: 'October 28, 2024',
      author: 'Software Architect',
      category: 'Design Decisions',
      categoryColor: '#f093fb',
      excerpt: 'Chose MAVLink protocol for telemetry due to proven reliability and existing ground control software support. Implemented dual communication - 915MHz for command/control, WiFi for debugging.',
      icon: <FiRadio size={64} />,
      tags: ['Communication', 'Software', 'Telemetry']
    }
  ];

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="page-hero blog-hero">
        <div className="container">
          <AnimatedSection>
            <motion.div
              className="hero-icon"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FiBookOpen size={50} />
            </motion.div>
            <h1 className="page-title">Blog & Updates</h1>
            <p className="page-subtitle">
              Follow our journey from concept to competition
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Filter */}
      <AnimatedSection className="categories-section">
        <div className="container">
          <div className="categories-scroll">
            {categories.map((cat, index) => (
              <motion.button
                key={index}
                className="category-btn"
                style={{ borderColor: cat.color }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span style={{ color: cat.color }}>{cat.icon}</span>
                {cat.name}
              </motion.button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Blog Posts Grid */}
      <section className="blog-posts-section">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <GlassCard className="blog-card">
                  <div className="blog-image-placeholder">
                    <div className="blog-image-icon">{post.icon}</div>
                    <div 
                      className="blog-category-badge" 
                      style={{ background: `${post.categoryColor}33`, borderColor: post.categoryColor, color: post.categoryColor }}
                    >
                      {post.category}
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="blog-date">
                        <FiCalendar size={14} /> {post.date}
                      </span>
                      <span className="blog-author">
                        <FiUser size={14} /> {post.author}
                      </span>
                    </div>
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <div className="blog-tags">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="blog-tag">{tag}</span>
                      ))}
                    </div>
                    <button className="blog-read-more">Read Full Post →</button>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <AnimatedSection className="newsletter-section">
        <div className="container">
          <GlassCard className="newsletter-card">
            <h2>Stay Updated</h2>
            <p>
              Subscribe to our newsletter to receive weekly updates about our RoboBoat journey, 
              technical insights, and competition preparations.
            </p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </GlassCard>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Blog;


