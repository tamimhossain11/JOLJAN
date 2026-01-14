import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import Footer from '../components/Footer';
import { FiImage, FiUsers, FiTool, FiZap } from 'react-icons/fi';
import '../styles/Gallery.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos', icon: <FiImage /> },
    { id: 'team-work', name: 'Team Working', icon: <FiUsers /> },
    { id: 'development', name: 'Development & Planning', icon: <FiTool /> },
    { id: 'outreach', name: 'Outreach', icon: <FiZap /> },
    { id: 'discussion', name: 'Discussions', icon: <FiUsers /> },
    { id: 'testing', name: 'Testing', icon: <FiZap /> },
  ];

  const galleryImages = [
    // Team Working Photos
    { src: '/gallery/team-w1.jpeg', title: 'Team Working Session 1', category: 'team-work' },
    { src: '/gallery/team-w2.jpeg', title: 'Team Working Session 2', category: 'team-work' },
    { src: '/gallery/team-w3.jpeg', title: 'Team Working Session 3', category: 'team-work' },
    { src: '/gallery/team-w4.jpeg', title: 'Team Working Session 4', category: 'team-work' },
    { src: '/gallery/team-w5.jpeg', title: 'Team Working Session 5', category: 'team-work' },
    { src: '/gallery/team-w6.jpeg', title: 'Team Working Session 6', category: 'team-work' },
    { src: '/gallery/team-w7.jpeg', title: 'Team Working Session 7', category: 'team-work' },
    { src: '/gallery/team-w8.jpeg', title: 'Team Working Session 8', category: 'team-work' },
    { src: '/gallery/team-w9.jpeg', title: 'Team Working Session 9', category: 'team-work' },
    { src: '/gallery/team-w10.jpeg', title: 'Team Working Session 10', category: 'team-work' },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="page-hero gallery-hero">
        <div className="container">
          <AnimatedSection>
            <motion.div
              className="hero-icon"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FiImage size={50} />
            </motion.div>
            <h1 className="page-title">Gallery</h1>
            <p className="page-subtitle">
              A visual journey through our RoboBoat 2026 project
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Filter */}
      <AnimatedSection className="categories-section">
        <div className="container">
          <div className="categories-scroll">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.icon}
                {cat.name}
              </motion.button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-count">
            <p>Showing {filteredImages.length} {selectedCategory === 'all' ? 'photos' : `${categories.find(c => c.id === selectedCategory)?.name.toLowerCase()} photos`}</p>
          </div>
          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <GlassCard className="gallery-item" hover={false}>
                  <div className="gallery-image">
                    <img src={image.src} alt={image.title} />
                    <div className="gallery-overlay">
                      <p className="gallery-title">{image.title}</p>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>

          {/* Placeholder for upcoming categories */}
          {selectedCategory !== 'all' && filteredImages.length === 0 && (
            <div className="empty-category">
              <GlassCard className="empty-card">
                <div className="empty-icon">📸</div>
                <h3>Coming Soon</h3>
                <p>Photos for this category will be added soon!</p>
              </GlassCard>
            </div>
          )}

          {/* Info Cards for Future Categories */}
          {selectedCategory === 'all' && (
            <AnimatedSection className="upcoming-section">
              <div className="upcoming-grid">
                <GlassCard className="upcoming-card">
                  <div className="upcoming-icon">🤝</div>
                  <h3>Outreach Photos</h3>
                  <p>Coming soon - Community engagement and presentations</p>
                </GlassCard>
                <GlassCard className="upcoming-card">
                  <div className="upcoming-icon">💬</div>
                  <h3>Discussion Photos</h3>
                  <p>Coming soon - Team meetings and planning sessions</p>
                </GlassCard>
                <GlassCard className="upcoming-card">
                  <div className="upcoming-icon">🔧</div>
                  <h3>Development Photos</h3>
                  <p>Coming soon - Building and assembly process</p>
                </GlassCard>
                <GlassCard className="upcoming-card">
                  <div className="upcoming-icon">🧪</div>
                  <h3>Testing Photos</h3>
                  <p>Coming soon - Water tests and performance trials</p>
                </GlassCard>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;


