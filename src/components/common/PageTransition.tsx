import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: 30,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: -30,
    },
  };

  const pageTransition = {
    type: 'tween' as const,
    ease: 'easeInOut' as const,
    duration: 0.2,
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      className="bg-primary-dark min-h-screen"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;

