
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-10 h-10 border border-white rounded-full pointer-events-none z-50 mix-blend-difference"
      animate={{ x: position.x - 20, y: position.y - 20 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  );
}
