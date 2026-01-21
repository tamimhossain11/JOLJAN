import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube, FiMail, FiMapPin } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import '../styles/Footer.css';

const Footer = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'RoboBoat 2026', path: '/roboboat' },
    { name: 'The Boat', path: '/boat' },
    { name: 'The Team', path: '/team' },
  ];

  const moreLinks = [
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { 
      icon: <FiFacebook size={24} />, 
      url: 'https://www.facebook.com/profile.php?id=100093129397984',
      label: 'Facebook'
    },
    { 
      icon: <FiInstagram size={24} />, 
      url: 'https://www.instagram.com/dreams_of_bangladesh',
      label: 'Instagram'
    },
    { 
      icon: <FiLinkedin size={24} />, 
      url: 'https://linkedin.com/company/dreamsofbangladesh',
      label: 'LinkedIn'
    },
    { 
      icon: <FiYoutube size={24} />, 
      url: 'https://youtube.com/@dreamsofbangladesh',
      label: 'YouTube'
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-section footer-brand">
              <div className="footer-logo">
                <img 
                  src={isDark ? "/dob.png" : "/logo-white.PNG"} 
                  alt="Dreams of Bangladesh" 
                  className="footer-logo-image" 
                />
              </div>
              <p className="footer-tagline">RoboBoat 2026</p>
              <p className="footer-description">
                A youth-led organization making robotics, marine technology, and innovation 
                accessible to students across Bangladesh through hands-on learning and collaboration.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Links */}
            <div className="footer-section">
              <h4 className="footer-heading">Explore</h4>
              <ul className="footer-links">
                {moreLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4 className="footer-heading">Contact Us</h4>
              <div className="footer-contact">
                <div className="contact-item">
                  <FiMail className="contact-icon" />
                  <a href="mailto:dreamsofbangladesh@gmail.com">
                    dreamsofbangladesh@gmail.com
                  </a>
                </div>
                <div className="contact-item">
                  <FiMapPin className="contact-icon" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-bottom-content">
              <p className="footer-copyright">
                © {currentYear} Dreams of Bangladesh. All rights reserved.
              </p>
              <p className="footer-credits">
                Built with ❤️ for RoboBoat 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
