"use client";


import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

interface MobileMenuProps {
    activeButton: number;
    setActiveButton: (buttonIndex: number) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ activeButton, setActiveButton }) => {
    // const [activeButton, setActiveButton] = useState(0);
    const handleButtonClick = (buttonIndex: number) => {
        setActiveButton(buttonIndex);
    };
    return (
        <div className="btm-nav fixed bottom-0 left-0 right-0 flex justify-around bg-white shadow-xl rounded-t-2xl z-10 p-2">
            <button
                className={`text-primary ${activeButton === 1 ? 'active' : ''}`}
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
            <button
                className={` text-primary ${activeButton === 2 ? '' : ''}`}
                onClick={() => handleButtonClick(2)}
            >
                <div className='bg-white rounded-full flex items-center justify-center' style={{ height: '4rem', width: '4rem', marginTop: '-3rem' }}>
                    <svg width="800" height="800" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <title>plus-circle</title>
                        <desc>Created with Sketch Beta.</desc>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Icon-Set-Filled" transform="translate(-466, -1089)" fill={`${activeButton === 2 ? '#333333' : 'currentColor'}`}>
                                <path d="M488,1106 L483,1106 L483,1111 C483,1111.55 482.553,1112 482,1112 C481.447,1112 481,1111.55 481,1111 L481,1106 L476,1106 C475.447,1106 475,1105.55 475,1105 C475,1104.45 475.447,1104 476,1104 L481,1104 L481,1099 C481,1098.45 481.447,1098 482,1098 C482.553,1098 483,1098.45 483,1099 L483,1104 L488,1104 C488.553,1104 489,1104.45 489,1105 C489,1105.55 488.553,1106 488,1106 L488,1106 Z M482,1089 C473.163,1089 466,1096.16 466,1105 C466,1113.84 473.163,1121 482,1121 C490.837,1121 498,1113.84 498,1105 C498,1096.16 490.837,1089 482,1089 L482,1089 Z" />
                            </g>
                        </g>
                    </svg>
                </div>

            </button>
            <button
                className={`text-primary ${activeButton === 3 ? 'active' : ''}`}
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