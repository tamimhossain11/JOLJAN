import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import '../styles/LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const { isDark } = useTheme();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Video */}
        <video
          className="loading-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Joljan.mp4" type="video/mp4" />
        </video>

        {/* Video Overlay */}
        <div className="loading-overlay"></div>
        
        <div className="loading-content">
          <motion.div
            className="loading-logo"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img 
              src={isDark ? "/joljan.png" : "/logo-white.PNG"} 
              alt="DoB Joljan" 
              className="loading-logo-image" 
            />
            <p className="loading-subtitle">RoboBoat 2026</p>
          </motion.div>
          
          <motion.div
            className="progress-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <span className="progress-text">{progress}%</span>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;


