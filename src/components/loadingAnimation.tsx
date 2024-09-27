import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation: React.FC = () => (
    <div className="flex justify-center items-center h-screen bg-black">
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="100"
            viewBox="0 0 200 100"
            preserveAspectRatio="xMidYMid meet"
        >
            {/* B */}
            <motion.path
                d="M20 20 V80 H50 Q70 80 70 60 T50 40 H20 M20 40 H50 Q70 40 70 20 H20"
                stroke="#5800ff"
                strokeWidth="4"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/* Z */}
            <motion.path
                d="M100 20 H180 L100 80 H180"
                stroke="#72ffff"
                strokeWidth="4"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
            />

            {/* Pulsing dot */}
            <motion.circle
                cx="190"
                cy="20"
                r="5"
                fill="#ffffff"
                initial={{ scale: 0.5, opacity: 0.5 }}
                animate={{ scale: 1.2, opacity: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
        </motion.svg>
    </div>
);

export default LoadingAnimation;