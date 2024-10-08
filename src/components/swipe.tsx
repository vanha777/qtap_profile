import React, { useState } from 'react';
import { motion, useAnimation, PanInfo } from 'framer-motion';

const SwipeFlipCard: React.FC = () => {
  const [flipped, setFlipped] = useState(false);
  const controls = useAnimation();

  // Handle swipe gestures
  const handleSwipe = (_event: MouseEvent | TouchEvent, info: PanInfo) => {
    if (info.offset.x > 100 || info.offset.x < -100) {
      // Trigger flip on significant swipe
      setFlipped((prev) => !prev);
    }
    controls.start({ x: 0 }); // Reset position after swipe
  };

  // Handle card click
  const handleClick = () => {
    setFlipped((prev) => !prev);
  };

  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  return (
    <div style={{ perspective: '1000px', width: '300px', height: '200px' }}>
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
        }}
        animate={flipped ? 'back' : 'front'}
        variants={flipVariants}
        onPanEnd={handleSwipe}
        onClick={handleClick} // Handle click event to flip the card
      >
        <motion.div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backfaceVisibility: 'hidden',
            backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#333',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          Front
        </motion.div>
        <motion.div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: '#ddd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#333',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          Back
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SwipeFlipCard;
