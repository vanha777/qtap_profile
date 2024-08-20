import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Theme, User } from '../../themeConfig';

interface ThemeProps {
  theme?: Theme,
  user?: User
}

const AnimatedText: React.FC<ThemeProps> = ({ theme, user }) => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 2000); // 2-second delay between repeats
    }, 5000); // Duration of animation (10 seconds)

    return () => clearInterval(timer);
  }, []);
  // Convert the user's name into an array of characters
  const nameArray = user?.name?.split('') || [];

  return (
    <motion.h1
      className="text-info-content text-4xl font-bold text-gray-900 mb-2 font-signature"
      initial="hidden"
      animate={animate ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.25, // Delay between each letter's animation
            repeat: Infinity, // Repeat the animation infinitely
            repeatDelay: 2,
          },
        },
      }}
    >
      {nameArray.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
        // transition={{
        //   delay:0.2,
        //   duration: 1, // Duration of each letter's animation
        //   ease: "easeInOut",
        //   repeat: Infinity, // Repeat the animation infinitely
        //   repeatType: "loop", // Loop the animation
        // }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedText;
