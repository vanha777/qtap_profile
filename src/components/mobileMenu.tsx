"use client";


import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

type Media = {
    media: string;
    type: string;
    info: string;
};

type Social = {
    link: string;
    platforms: string;
    icons: string;
};

// Define the type for the user object
type User = {
    name: string;
    photo: string;
    title: string;
    bio: string;
    social: Social[];
    media: Media[];
};
interface MobileMenuProps {
    user: User;
    activeButton: number;
    setActiveButton: (buttonIndex: number) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ user, activeButton, setActiveButton }) => {
    const transition = {
        duration: 0.2
    };
    const variants0 = {
        initial: { x: 0, y: 0, rotate: 0 },
        moved: { x: -15, y: 0, rotate: 45 },
    };

    const variants = {
        initial: { x: 0, y: 9 },
        moved: { x: 0, y: -90 }
    };
    const variants_color = "#D53F8C";
    const variants2 = {
        initial: { x: 0, y: 3 },
        moved: { x: -80, y: -50 }
    };
    const variants2_color = "#9B76F0";
    const variants3 = {
        initial: { x: 0, y: 6 },
        moved: { x: 80, y: -50 }
    };
    const variants3_color = "#4A7BF7";
    // const [activeButton, setActiveButton] = useState(0);
    // State to control the position
    const [isMoved, setIsMoved] = useState(false);
    const handleButtonClick = (buttonIndex: number) => {
        setActiveButton(buttonIndex);
    };
    return (
        <div className="btm-nav fixed bottom-0 left-0 right-0 flex justify-around bg-white shadow-xl rounded-t-2xl z-10 p-2">
            <button
                className={`text-primary ${activeButton === 1 ? '' : ''}`}
                onClick={() => handleButtonClick(1)}
            >
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8.39747 15.5534C8.64413 15.2206 9.11385 15.1508 9.44661 15.3975C10.175 15.9373 11.0541 16.25 12 16.25C12.9459 16.25 13.825 15.9373 14.5534 15.3975C14.8862 15.1508 15.3559 15.2206 15.6025 15.5534C15.8492 15.8862 15.7794 16.3559 15.4466 16.6025C14.4742 17.3233 13.285 17.75 12 17.75C10.715 17.75 9.5258 17.3233 8.55339 16.6025C8.22062 16.3559 8.15082 15.8862 8.39747 15.5534ZM16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5ZM9 12C9.55228 12 10 11.3284 10 10.5C10 9.67157 9.55228 9 9 9C8.44772 9 8 9.67157 8 10.5C8 11.3284 8.44772 12 9 12Z"
                        fill={`${activeButton === 1 ? '#333333' : 'currentColor'}`}
                    />
                </svg>
            </button>
            <div
                className={` text-primary ${activeButton === 2 ? '' : ''}`}
            // onClick={() => handleButtonClick(2)}
            // onClick={() => setIsMoved(!isMoved)}
            >
                <motion.div
                    initial="initial"
                    animate={isMoved ? "moved" : "initial"}
                    variants={variants}
                    transition={transition}
                    style={{
                        width: 100,
                        height: 100,
                        // backgroundColor: 'coral',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // color: 'white',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        position: 'absolute', // Optional: ensures the element can move freely
                    }}
                >
                    <a
                        href={user.social[1].link} // Replace with the URL you want to redirect to
                        target="_blank" // Opens the link in a new tab
                        rel="noopener noreferrer"
                        className='rounded-full flex items-center justify-center' style={{ height: '4rem', width: '4rem', marginTop: '-3rem' }}>
                        {/* <svg width="800" height="800" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <title>plus-circle</title>
                            <desc>Created with Sketch Beta.</desc>
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="Icon-Set-Filled" transform="translate(-466, -1089)" fill={variants_color}>
                                    <path d="M488,1106 L483,1106 L483,1111 C483,1111.55 482.553,1112 482,1112 C481.447,1112 481,1111.55 481,1111 L481,1106 L476,1106 C475.447,1106 475,1105.55 475,1105 C475,1104.45 475.447,1104 476,1104 L481,1104 L481,1099 C481,1098.45 481.447,1098 482,1098 C482.553,1098 483,1098.45 483,1099 L483,1104 L488,1104 C488.553,1104 489,1104.45 489,1105 C489,1105.55 488.553,1106 488,1106 L488,1106 Z M482,1089 C473.163,1089 466,1096.16 466,1105 C466,1113.84 473.163,1121 482,1121 C490.837,1121 498,1113.84 498,1105 C498,1096.16 490.837,1089 482,1089 L482,1089 Z" />
                                </g>
                            </g>
                        </svg> */}
                        <svg width="80px" height="80px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#1877F2" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z" /><path fill="#ffffff" d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z" /></svg>
                    </a>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate={isMoved ? "moved" : "initial"}
                    variants={variants3}
                    transition={transition}
                    style={{
                        width: 100,
                        height: 100,
                        // backgroundColor: 'coral',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // color: 'white',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        position: 'absolute', // Optional: ensures the element can move freely
                    }}
                >
                    <a
                        href={user.social[2].link} // Replace with the URL you want to redirect to
                        target="_blank" // Opens the link in a new tab
                        rel="noopener noreferrer"
                        className='rounded-full flex items-center justify-center' style={{ height: '4.25rem', width: '4.25rem', marginTop: '-3rem' }}>
                        <svg width="80px" height="80px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="20" fill="#C13584" />
                            <path d="M24 14.1622C27.2041 14.1622 27.5837 14.1744 28.849 14.2321C30.019 14.2855 30.6544 14.481 31.0773 14.6453C31.6374 14.863 32.0371 15.123 32.457 15.5429C32.877 15.9629 33.137 16.3626 33.3547 16.9227C33.519 17.3456 33.7145 17.981 33.7679 19.1509C33.8256 20.4163 33.8378 20.7958 33.8378 23.9999C33.8378 27.2041 33.8256 27.5836 33.7679 28.849C33.7145 30.019 33.519 30.6543 33.3547 31.0772C33.137 31.6373 32.877 32.0371 32.4571 32.457C32.0371 32.8769 31.6374 33.1369 31.0773 33.3546C30.6544 33.519 30.019 33.7144 28.849 33.7678C27.5839 33.8255 27.2044 33.8378 24 33.8378C20.7956 33.8378 20.4162 33.8255 19.151 33.7678C17.981 33.7144 17.3456 33.519 16.9227 33.3546C16.3626 33.1369 15.9629 32.8769 15.543 32.457C15.1231 32.0371 14.863 31.6373 14.6453 31.0772C14.481 30.6543 14.2855 30.019 14.2321 28.849C14.1744 27.5836 14.1622 27.2041 14.1622 23.9999C14.1622 20.7958 14.1744 20.4163 14.2321 19.1509C14.2855 17.981 14.481 17.3456 14.6453 16.9227C14.863 16.3626 15.123 15.9629 15.543 15.543C15.9629 15.123 16.3626 14.863 16.9227 14.6453C17.3456 14.481 17.981 14.2855 19.151 14.2321C20.4163 14.1744 20.7959 14.1622 24 14.1622ZM24 12C20.741 12 20.3323 12.0138 19.0524 12.0722C17.7752 12.1305 16.9028 12.3333 16.1395 12.63C15.3504 12.9366 14.6812 13.3469 14.0141 14.0141C13.3469 14.6812 12.9366 15.3504 12.63 16.1395C12.3333 16.9028 12.1305 17.7751 12.0722 19.0524C12.0138 20.3323 12 20.741 12 23.9999C12 27.259 12.0138 27.6676 12.0722 28.9475C12.1305 30.2248 12.3333 31.0971 12.63 31.8604C12.9366 32.6495 13.3469 33.3187 14.0141 33.9859C14.6812 34.653 15.3504 35.0633 16.1395 35.3699C16.9028 35.6666 17.7752 35.8694 19.0524 35.9277C20.3323 35.9861 20.741 35.9999 24 35.9999C27.259 35.9999 27.6677 35.9861 28.9476 35.9277C30.2248 35.8694 31.0972 35.6666 31.8605 35.3699C32.6496 35.0633 33.3188 34.653 33.9859 33.9859C34.653 33.3187 35.0634 32.6495 35.37 31.8604C35.6667 31.0971 35.8695 30.2248 35.9278 28.9475C35.9862 27.6676 36 27.259 36 23.9999C36 20.741 35.9862 20.3323 35.9278 19.0524C35.8695 17.7751 35.6667 16.9028 35.37 16.1395C35.0634 15.3504 34.653 14.6812 33.9859 14.0141C33.3188 13.3469 32.6496 12.9366 31.8605 12.63C31.0972 12.3333 30.2248 12.1305 28.9476 12.0722C27.6677 12.0138 27.259 12 24 12Z" fill="white" />
                            <path d="M24.0059 17.8433C20.6026 17.8433 17.8438 20.6021 17.8438 24.0054C17.8438 27.4087 20.6026 30.1675 24.0059 30.1675C27.4092 30.1675 30.1681 27.4087 30.1681 24.0054C30.1681 20.6021 27.4092 17.8433 24.0059 17.8433ZM24.0059 28.0054C21.7968 28.0054 20.0059 26.2145 20.0059 24.0054C20.0059 21.7963 21.7968 20.0054 24.0059 20.0054C26.2151 20.0054 28.0059 21.7963 28.0059 24.0054C28.0059 26.2145 26.2151 28.0054 24.0059 28.0054Z" fill="white" />
                            <path d="M31.8507 17.5963C31.8507 18.3915 31.206 19.0363 30.4107 19.0363C29.6154 19.0363 28.9707 18.3915 28.9707 17.5963C28.9707 16.801 29.6154 16.1562 30.4107 16.1562C31.206 16.1562 31.8507 16.801 31.8507 17.5963Z" fill="white" />
                        </svg>
                    </a>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate={isMoved ? "moved" : "initial"}
                    variants={variants2}
                    transition={transition}
                    style={{
                        width: 100,
                        height: 100,
                        // backgroundColor: 'coral',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // color: 'white',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        position: 'absolute', // Optional: ensures the element can move freely
                    }}
                >
                    <a
                        href={user.social[0].link} // Replace with the URL you want to redirect to
                        target="_blank" // Opens the link in a new tab
                        rel="noopener noreferrer"
                        className='rounded-full flex items-center justify-center bg-transparent' style={{ height: '4rem', width: '4rem', marginTop: '-3rem' }}>
                        <img style={{
                            width: '90%',
                            height: '90%',

                            borderRadius: '50%' // Make sure the image is rounded like the parent div
                        }} src="https://eazypic.s3.ap-southeast-4.amazonaws.com/IMG_9913.png" />
                    </a>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate={isMoved ? "moved" : "initial"}
                    variants={variants0}
                    transition={transition}
                    onClick={() => setIsMoved(!isMoved)}
                    style={{
                        width: 100,
                        height: 100,
                        // backgroundColor: 'coral',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // color: 'white',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        position: 'absolute', // Optional: ensures the element can move freely
                    }}
                >
                    <div className='bg-white rounded-full flex items-center justify-center' style={{ height: '4rem', width: '4rem', marginTop: '-3rem' }}>
                        <svg width="80" height="80" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <title>plus-circle</title>
                            <desc>Created with Sketch Beta.</desc>
                            <g id="Page-1" stroke={`${isMoved == true ? 'black' : 'none'}`} strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="Icon-Set-Filled" transform="translate(-466, -1089)" fill={`${isMoved == true ? 'white' : 'currentColor'}`}>
                                    <path d="M488,1106 L483,1106 L483,1111 C483,1111.55 482.553,1112 482,1112 C481.447,1112 481,1111.55 481,1111 L481,1106 L476,1106 C475.447,1106 475,1105.55 475,1105 C475,1104.45 475.447,1104 476,1104 L481,1104 L481,1099 C481,1098.45 481.447,1098 482,1098 C482.553,1098 483,1098.45 483,1099 L483,1104 L488,1104 C488.553,1104 489,1104.45 489,1105 C489,1105.55 488.553,1106 488,1106 L488,1106 Z M482,1089 C473.163,1089 466,1096.16 466,1105 C466,1113.84 473.163,1121 482,1121 C490.837,1121 498,1113.84 498,1105 C498,1096.16 490.837,1089 482,1089 L482,1089 Z" />
                                </g>
                            </g>
                        </svg>
                    </div>
                </motion.div>
            </div>
            <button
                className={`text-primary ${activeButton === 3 ? '' : ''}`}
                onClick={() => handleButtonClick(3)}
            >
                <svg
                    fill={`${activeButton === 3 ? '#333333' : 'currentColor'}`}
                    width="38px"
                    height="38px"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlSpace="preserve"
                    version="1.1"
                >
                    <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,90 c37.02,0,67.031,35.468,67.031,79.219S293.02,248.438,256,248.438s-67.031-35.468-67.031-79.219S218.98,90,256,90z M369.46,402 H142.54c-11.378,0-20.602-9.224-20.602-20.602C121.938,328.159,181.959,285,256,285s134.062,43.159,134.062,96.398 C390.062,392.776,380.839,402,369.46,402z" />
                </svg>
            </button>
        </div>
    )
}

export default MobileMenu;