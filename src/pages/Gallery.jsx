import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import '../styles/Gallery.css';

const Gallery = () => {
  const images = Array(12).fill(null).map((_, i) => ({
    id: i + 1,
    title: `Gallery Image ${i + 1}`,
    category: ['Competition', 'Workshop', 'Testing', 'Team'][i % 4],
  }));

  return (
    <div className="gallery-page">
      <section className="page-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">Gallery</h1>
            <p className="page-subtitle">
              A visual journey through our projects and achievements
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {images.map((image, index) => (
              <AnimatedSection key={image.id} delay={index * 0.05}>
                <GlassCard className="gallery-item">
                  <div className="gallery-image-placeholder">
                    <div className="placeholder-icon">📷</div>
                  </div>
                  <div className="gallery-info">
                    <h3 className="gallery-title">{image.title}</h3>
                    <span className="gallery-category">{image.category}</span>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;


