import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import Footer from '../components/Footer';
import { FiImage, FiUsers, FiTool, FiZap, FiCamera, FiMessageCircle, FiActivity } from 'react-icons/fi';
import '../styles/Gallery.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos', icon: <FiImage /> },
    { id: 'team-photos', name: 'Team Photos', icon: <FiUsers /> },
    { id: 'team-work', name: 'Team Working', icon: <FiUsers /> },
    { id: 'development', name: 'Development & Planning', icon: <FiTool /> },
    { id: 'outreach', name: 'Outreach', icon: <FiZap /> },
    { id: 'discussion', name: 'Discussions', icon: <FiUsers /> },
    { id: 'testing', name: 'Testing', icon: <FiZap /> },
  ];

  const galleryImages = [
    // Team Group Photos
    { src: '/team/team2.jpeg', title: 'Team DoB Joljan Group Photo', category: 'team-photos' },
    { src: '/gallery/boat-team-2.jpg', title: 'DoB Team with Joljan Boat', category: 'team-photos' },
    
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
    
    // Development & Planning Photos
    { src: '/gallery/team-r1.jpeg', title: 'Development Planning Session', category: 'development' },
    { src: '/gallery/team-r2.jpeg', title: 'Technical Discussion', category: 'development' },
    
    // Outreach Photos
    { src: '/outreacch-1.jpeg', title: 'Community Outreach Event 1', category: 'outreach' },
    { src: '/outreacch-2.jpeg', title: 'Community Outreach Event 2', category: 'outreach' },
    { src: '/outreacch-3.jpeg', title: 'Community Outreach Event 3', category: 'outreach' },
    { src: '/outreacch-5.jpeg', title: 'Community Outreach Event 5', category: 'outreach' },
    { src: '/outreacch-6.jpeg', title: 'Community Outreach Event 6', category: 'outreach' },
    
    // Discussion Photos
    { src: '/gallery/boat-team-2.jpg', title: 'Team Discussion Session', category: 'discussion', type: 'image' },
    
    // Testing Photos
    { src: '/gallery/test-photo1.jpg', title: 'Boat Testing 1', category: 'testing', type: 'image' },
    { src: '/gallery/test-photo2.jpg', title: 'Boat Testing 2', category: 'testing', type: 'image' },
    { src: '/gallery/test-photo3.jpg', title: 'Boat Testing 3', category: 'testing', type: 'image' },
    { src: '/gallery/test-photo4.jpg', title: 'Boat Testing 4', category: 'testing', type: 'image' },
    
    // Testing Videos
    { 
      src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fweb.facebook.com%2Freel%2F1241726657875293%2F&show_text=false&width=267&t=0', 
      title: 'Boat Testing Session', 
      category: 'testing',
      type: 'video'
    },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const videos = filteredImages.filter(item => item.type === 'video');
  const images = filteredImages.filter(item => item.type !== 'video');

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

      {/* Video Player Section - Only show on testing category */}
      {videos.length > 0 && selectedCategory === 'testing' && (
        <AnimatedSection className="video-player-section">
          <div className="container">
            <h2 className="section-title">Testing Videos</h2>
            <p className="section-description">Watch our boat in action during testing sessions</p>
            <div className="video-players-grid">
              {videos.map((video, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <GlassCard className="video-player-card" hover={false}>
                    <div className="video-player-wrapper">
                      <iframe 
                        src={video.src}
                        style={{border: 'none', overflow: 'hidden', width: '100%', height: '100%'}} 
                        scrolling="no" 
                        frameBorder="0" 
                        allowFullScreen={true} 
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title={video.title}
                      ></iframe>
                    </div>
                    <div className="video-player-info">
                      <h3>{video.title}</h3>
                    </div>
                  </GlassCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="container">
          {images.length > 0 && (
            <>
              <div className="gallery-count">
                <p>Showing {images.length} photo{images.length !== 1 ? 's' : ''}</p>
              </div>
              <div className="gallery-grid">
                {images.map((image, index) => (
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
            </>
          )}

          {/* Placeholder for upcoming categories */}
          {selectedCategory !== 'all' && videos.length === 0 && images.length === 0 && (
            <div className="empty-category">
              <GlassCard className="empty-card">
                <div className="empty-icon">
                  <FiCamera size={80} />
                </div>
                <h3>Coming Soon</h3>
                <p>Photos for this category will be added soon!</p>
              </GlassCard>
            </div>
          )}

          {/* Info Cards for Future Categories */}
          {selectedCategory === 'all' && filteredImages.length > 0 && (
            <AnimatedSection className="upcoming-section">
              <div className="upcoming-info">
                <p className="more-content-text">More photos and videos coming soon!</p>
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


