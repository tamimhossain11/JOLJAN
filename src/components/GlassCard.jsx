import { motion } from 'framer-motion';
import '../styles/GlassCard.css';

const GlassCard = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      className={`glass-card ${className}`}
      whileHover={hover ? { y: -10, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;


