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
  const [rotationY, setRotationY] = useState(0);
  const controls = useAnimation();

  // Handle swipe gestures
  // const handleSwipe = (_event: MouseEvent | TouchEvent, info: PanInfo) => {
  //   if (info.offset.x > 100 || info.offset.x < -100) {
  //     // Trigger flip on significant swipe
  //     setFlipped((prev) => !prev);
  //   }
  //   controls.start({ x: 0 }); // Reset position after swipe
  // };
  const handleSwipe = (_event: MouseEvent | TouchEvent, info: PanInfo) => {
    if (info.offset.x > 100) {
      console.log("swipe right");
      // Swipe right - Flip right
      setFlipped(false);
    } else if (info.offset.x < -100) {
      console.log("swipe left");
      // Swipe left - Flip left
      setFlipped(true);
    }
    controls.start({ x: 0 }); // Reset position after swipe
  };

  // function onPan(event: any, info: PanInfo) {
  //   console.log(info.offset.x);
  //   console.log(event);
  //   //  console.log(info.point.x, info.point.y);
  //   if (info.offset.x > 0) {
  //     console.log("swipe right");
  //     // Swipe right - Flip right
  //     setFlipped(false);
  //   } else if (info.offset.x < 0) {
  //     console.log("swipe left");
  //     // Swipe left - Flip left
  //     setFlipped(true);
  //   }
  //   controls.start({ x: 0 }); // Reset position after swipe
  // }

  const onPan = (_event: MouseEvent | TouchEvent, info: PanInfo) => {
    const swipeThreshold = 100; // Minimum distance to consider as a swipe
    let newRotationY = rotationY;
    if (info.offset.x > 0) {
      console.log("swipe right");
      // Swipe right - Flip right
      setFlipped(false);
      newRotationY += 90; // Adjust increment as needed
    } else if (info.offset.x < 0) {
      console.log("swipe left");
      // Swipe left - Flip left
      newRotationY -= 90; // Adjust decrement as needed
      setFlipped(true);
    }
    setRotationY(newRotationY); // Update rotation state
    controls.start({ rotateY: newRotationY }); // Apply rotation animation
    // controls.start({ rotateY: flipped ? 180 : 0 }); // Animate rotation based on flipped state
  };

  // Handle card click
  const handleClick = () => {
    console.log("turn");
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
          transition: 'transform 0.17s',
        }}
        animate={{ rotateY: rotationY }}
        // variants={flipVariants}
        // onPan={onPan}
        onPanStart={onPan}
        onPanEnd={onPan}
      // onPanEnd={handleSwipe}
      // onClick={handleClick} // Handle click event to flip the card
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
            // color: '#333',
            // fontSize: '24px',
            // fontWeight: 'bold',
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
            // fontSize: '24px',
            // fontWeight: 'bold',
          }}
        >
          <BackSide theme={theme} user={user} isMobile={isMobile} media={media} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SwipeFlipCard;
