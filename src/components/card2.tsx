import React, { useState } from 'react';
import { motion, useAnimation, PanInfo } from 'framer-motion';
import { Theme, Media, User } from '../../themeConfig';
import Card from './card';
import BackSide from './backSide';
interface MediaProps {
    theme?: Theme;
    isMobile: boolean;
    media: Media;
    user?: User;
}

const SwipeFlipCard: React.FC<MediaProps> = ({ theme, media, isMobile, user }) => {
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
    <div style={{ perspective: '1000px', width: '320px', height: '480px' }}>
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
            // backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#333',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
           <Card theme={theme} user={user} isMobile={isMobile} media={media} />
        </motion.div>
        <motion.div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            // backgroundColor: '#ddd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // color: '#333',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          <BackSide theme={theme} user={user} isMobile={isMobile} media={media} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SwipeFlipCard;
