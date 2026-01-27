import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import Footer from '../components/Footer';
import MapComponent from '../components/MapComponent';
import { 
  FiMail, 
  FiMapPin, 
  FiSend,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiMessageCircle
} from 'react-icons/fi';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: 'Email Address',
      value: 'dreamsofbangladesh@gmail.com',
      link: 'mailto:dreamsofbangladesh@gmail.com',
      color: '#0ea5e9'
    },
    {
      icon: <FiMapPin size={24} />,
      title: 'Team Location',
      value: 'Dhaka, Bangladesh',
      color: '#43e97b'
    },
  ];

  const socialLinks = [
    {
      icon: <FiFacebook size={24} />,
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100093129397984',
      color: '#1877f2',
      handle: 'Dreams Of Bangladesh'
    },
    {
      icon: <FiInstagram size={24} />,
      name: 'Instagram',
      url: 'https://www.instagram.com/dreams_of_bangladesh',
      color: '#e4405f',
      handle: '@dreams_of_bangladesh'
    },
    {
      icon: <FiLinkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/dreamsofbangladesh',
      color: '#0a66c2',
      handle: 'Dreams of Bangladesh'
    },
    {
      icon: <FiYoutube size={24} />,
      name: 'YouTube',
      url: 'https://youtube.com/@dreamsofbangladesh',
      color: '#ff0000',
      handle: '@dreamsofbangladesh'
    },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero contact-hero">
        <div className="container">
          <AnimatedSection>
            <motion.div
              className="hero-icon"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FiMessageCircle size={50} />
            </motion.div>
            <h1 className="page-title">Contact Us</h1>
            <p className="page-subtitle">
              Have questions or want to collaborate? We'd love to hear from you!
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column - Contact Info & Social */}
            <div className="contact-info-column">
              <AnimatedSection>
                <div className="contact-info">
                  <h2 className="contact-info-title">Get in Touch</h2>
                  <p className="contact-info-text">
                    Whether you have questions about our RoboBoat project, want to collaborate, 
                    are interested in sponsorship opportunities, or just want to say hello, 
                    we're here and ready to answer your questions.
                  </p>
                  
                  <div className="contact-info-items">
                    {contactInfo.map((item, index) => (
                      <AnimatedSection key={index} delay={index * 0.1}>
                        <GlassCard className="contact-info-card" hover={false}>
                          <div className="contact-info-icon" style={{ color: item.color }}>
                            {item.icon}
                          </div>
                          <div>
                            <div className="contact-info-label">{item.title}</div>
                            {item.link ? (
                              <a href={item.link} className="contact-info-value link">
                                {item.value}
                              </a>
                            ) : (
                              <div className="contact-info-value">{item.value}</div>
                            )}
                          </div>
                        </GlassCard>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Social Media Links */}
              <AnimatedSection delay={0.3}>
                <div className="social-media-section">
                  <h3 className="social-title">Follow Our Journey</h3>
                  <p className="social-subtitle">
                    Stay updated with our latest developments on social media
                  </p>
                  <div className="social-links-grid">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link-card"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <GlassCard className="social-card-inner">
                          <div 
                            className="social-icon" 
                            style={{ color: social.color }}
                          >
                            {social.icon}
                          </div>
                          <div className="social-info">
                            <div className="social-name">{social.name}</div>
                            <div className="social-handle">{social.handle}</div>
                          </div>
                        </GlassCard>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column - Contact Form */}
            <AnimatedSection delay={0.2}>
              <GlassCard className="contact-form-card" hover={false}>
                <h3 className="form-title">Send us a Message</h3>
                <p className="form-subtitle">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    <span>Send Message</span>
                    <FiSend />
                  </button>
                </form>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <AnimatedSection className="map-section">
        <div className="container">
          <h2 className="section-title">Find Us</h2>
          <p className="section-subtitle">
            We're based in Dhaka, Bangladesh, working on cutting-edge robotics projects
          </p>
          <GlassCard className="map-card" hover={false}>
            <MapComponent />
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* Additional Info Section */}
      <AnimatedSection className="additional-info-section">
        <div className="container">
          <GlassCard className="info-banner">
            <h3>Dreams of Bangladesh - RoboBoat 2026 Team</h3>
            <p>
              Dreams of Bangladesh is a youth-led initiative that focuses on robotics, technology, 
              and creative problem-solving. We believe that innovation begins with curiosity, and 
              that students learn best when they are given the chance to build things with their own 
              hands. Our team welcomes collaboration, partnerships, and inquiries from anyone interested 
              in supporting young innovators in Bangladesh.
            </p>
          </GlassCard>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Contact;


