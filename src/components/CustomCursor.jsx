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
      className="fixed top-0 left-0 w-4 h-4 border border-white rounded-full mix-blend-difference pointer-events-none z-[999]"
      animate={{
        x: position.x - 8,
        y: position.y - 8,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 25,
      }}
    />
  );
}
