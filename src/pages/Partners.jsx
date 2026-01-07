import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import '../styles/Partners.css';

const Partners = () => {
  const partners = [
    { name: 'University Partner', type: 'Academic' },
    { name: 'Tech Sponsor', type: 'Technology' },
    { name: 'Industry Partner', type: 'Industry' },
    { name: 'Research Institute', type: 'Research' },
    { name: 'Hardware Supplier', type: 'Supplier' },
    { name: 'Software Partner', type: 'Technology' },
  ];

  return (
    <div className="partners-page">
      <section className="page-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">Our Partners</h1>
            <p className="page-subtitle">
              Collaborating with leading organizations to drive innovation
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <AnimatedSection>
            <GlassCard hover={false} className="partners-intro">
              <p>
                We are grateful to our partners and sponsors who support our mission 
                to advance autonomous maritime technology. Their contributions enable 
                us to push boundaries and achieve excellence in robotics innovation.
              </p>
            </GlassCard>
          </AnimatedSection>

          <div className="partners-grid">
            {partners.map((partner, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard className="partner-card">
                  <div className="partner-logo-placeholder">
                    <div className="placeholder-icon">🤝</div>
                  </div>
                  <h3 className="partner-name">{partner.name}</h3>
                  <span className="partner-type">{partner.type}</span>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="sponsor-cta-section">
        <div className="container">
          <AnimatedSection>
            <GlassCard className="sponsor-cta">
              <h2>Become a Partner</h2>
              <p>
                Interested in supporting our team? We're always looking for 
                partnerships that can help us achieve our goals.
              </p>
              <button className="btn btn-primary">Get in Touch</button>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Partners;


