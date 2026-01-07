import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
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
    alert('Form submitted! (This is a demo)');
  };

  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: 'Email',
      value: 'info@dobjoljan.com',
    },
    {
      icon: <FiPhone size={24} />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
    },
    {
      icon: <FiMapPin size={24} />,
      title: 'Location',
      value: 'University Campus, City',
    },
  ];

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">Contact Us</h1>
            <p className="page-subtitle">
              Get in touch with our team - we'd love to hear from you
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="contact-content-section">
        <div className="container">
          <div className="contact-grid">
            <AnimatedSection>
              <div className="contact-info">
                <h2 className="contact-info-title">Let's Connect</h2>
                <p className="contact-info-text">
                  Whether you have questions about our project, want to collaborate, 
                  or are interested in sponsorship opportunities, we're here to help.
                </p>
                
                <div className="contact-info-items">
                  {contactInfo.map((item, index) => (
                    <GlassCard key={index} className="contact-info-card" hover={false}>
                      <div className="contact-info-icon">{item.icon}</div>
                      <div>
                        <div className="contact-info-label">{item.title}</div>
                        <div className="contact-info-value">{item.value}</div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <GlassCard className="contact-form-card" hover={false}>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What is this about?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Your message..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    Send Message <FiSend />
                  </button>
                </form>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


