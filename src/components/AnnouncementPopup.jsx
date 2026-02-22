import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink } from 'react-icons/fi';
import '../styles/AnnouncementPopup.css';

const AnnouncementPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already closed the popup
    const hasSeenAnnouncement = localStorage.getItem('hasSeenAnnouncement');
    
    if (!hasSeenAnnouncement) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Remember that user has seen the announcement
    localStorage.setItem('hasSeenAnnouncement', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            className="announcement-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          
          {/* Popup */}
          <motion.div
            className="announcement-popup"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button className="popup-close-btn" onClick={handleClose}>
              <FiX size={24} />
            </button>
            
            <div className="popup-content">
              <div className="popup-icon">🎉</div>
              <h2>Great News!</h2>
              <p className="popup-message">
                <strong>DoB Joljan</strong> has successfully passed the Safety Inspection for 
                <span className="highlight"> RoboBoat 2026!</span>
              </p>
              <p className="popup-submessage">
                After months of hard work and dedication, our autonomous surface vehicle 
                has met all safety requirements to compete on the world stage.
              </p>
              <a
                href="https://www.facebook.com/share/r/1Am6n6TW9z/"
                target="_blank"
                rel="noopener noreferrer"
                className="popup-cta"
              >
                <span>Watch the Video</span>
                <FiExternalLink size={18} />
              </a>
            </div>
            
            <div className="popup-footer">
              <button className="popup-dismiss" onClick={handleClose}>
                Don't show again
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementPopup;
