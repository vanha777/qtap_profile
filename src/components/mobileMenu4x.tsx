"use client";

import Link from 'next/link';
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Theme, User, Media, Social } from '../../themeConfig';

interface MobileMenuProps {
    theme?: Theme,
    user?: User;
    activeButton: number;
    setActiveButton: (buttonIndex: number) => void;
}

const MobileMenu4x: React.FC<MobileMenuProps> = ({ theme, user, activeButton, setActiveButton }) => {
    const transition = {
        duration: 0.15
    };
    const variants0 = {
        initial: { x: 0, y: 0, rotate: 0 },
        moved: { x: -15, y: 0, rotate: 45 },
    };

    // facebook
    const variants = {
        initial: { x: 0, y: 9 },
        moved: { x: -30, y: -80 }
    };
    //nuskin
    const variants2 = {
        initial: { x: 0, y: 3 },
        moved: { x: -80, y: -30 }
    };
    //instargram
    const variants3 = {
        initial: { x: 0, y: 6 },
        moved: { x: 40, y: -80 }
    };
    //tiktok
    const variants4 = {
        initial: { x: 0, y: 0 },
        moved: { x: 83, y: -30 }
    };
    // const variants3_color = "#4A7BF7";
    // const [activeButton, setActiveButton] = useState(0);
    // State to control the position
    const [isMoved, setIsMoved] = useState(false);
    const handleButtonClick = (buttonIndex: number) => {
        if (buttonIndex == 3) {
            // setActiveButton(buttonIndex);
            if (user?.type === "biz") {
                const googleMapsLink = "https://maps.app.goo.gl/TdPumwyQvoqAoWHB7";
                window.open(googleMapsLink, "_blank");
            } else {
                const mailtoLink = `mailto:${user?.email}?subject=Subject&body=Body%20text`;
                window.location.href = mailtoLink;
            }
            // setActiveButton(1);
        } else if (buttonIndex == 4) {
            createAndDownloadVCard();
            // setActiveButton(buttonIndex);
            // const phoneNumber = `tel:${user?.phone}`;
            // window.location.href = phoneNumber;
            // setActiveButton(1);
        }
    };
    // const avatarBase64 = async () => {
    //     if (user?.photo) {
    //         return await getBase64FromUrl(user.photo);
    //     }
    //     return '';
    // };
    const createAndDownloadVCard = async () => {
        if (!user) return;
        let avatarBase64 = '';
        if (user?.photo) {
            try {
                avatarBase64 = await getBase64FromUrl(user?.photo);
            } catch (error) {
                console.error('Error fetching avatar:', error);
            }
        }

        const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${user.name}
TITLE:${user.title}
TEL:${user.phone}
EMAIL:${user.email}
URL:${`https://biz-touch.me/${user?.username}`}
PHOTO;TYPE=JPEG;ENCODING=BASE64:${avatarBase64}
NOTE:"My mission is to be a global force for good by empowering people to improve lives with innovative products, rewarding opportunities and an enriching culture."
END:VCARD`;

        const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${user.name}.vcf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        // <div className="btm-nav fixed bottom-0 left-0 right-0 flex justify-around bg-white shadow-xl rounded-t-2xl z-10 p-2">
        <div
            className={`btm-nav fixed bottom-0 left-0 right-0 flex justify-around shadow-xl rounded-t-2xl z-10 p-2 bg-primary-content ${theme?.daisy == 'gold' ? 'glass' : ''}`}
        >
            <button
                className={`text-primary ${activeButton === 4 ? '' : ''}`}
                onClick={() => handleButtonClick(4)}
            >
                {user?.type === 'biz' ? (
                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" fill="none" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.14089 4.4021C2.34025 2.92963 3.63956 2 4.99004 2H7.55848C8.84977 2 9.99619 2.82629 10.4045 4.05132L11.454 7.19963C11.905 8.55283 11.1086 10.0036 9.72482 10.3496C9.38646 10.4342 9.26975 10.8555 9.51637 11.1022L12.8978 14.4836C13.1445 14.7303 13.5658 14.6135 13.6504 14.2752C13.9964 12.8914 15.4472 12.095 16.8004 12.546L19.9487 13.5955C21.1737 14.0038 22 15.1502 22 16.4415V19.01C22 20.3604 21.0704 21.6598 19.5979 21.8591C18.9114 21.9521 18.211 22 17.5 22C8.93959 22 2 15.0604 2 6.5C2 5.78898 2.04794 5.08863 2.14089 4.4021Z" fill={`${activeButton === 4 ? `${theme?.inactiveColor}` : `${theme?.menuButtonBackground}`}`} />
                        <path d="M20 7C20 7.55229 20.4477 8 21 8C21.5523 8 22 7.55229 22 7L22 3.5C22 2.67157 21.3284 2 20.5 2H17C16.4477 2 16 2.44772 16 3C16 3.55228 16.4477 4 17 4L18.5858 4L14.2929 8.29289C13.9024 8.68342 13.9024 9.31658 14.2929 9.70711C14.6834 10.0976 15.3166 10.0976 15.7071 9.70711L20 5.41421L20 7Z" fill={`${activeButton === 4 ? `${theme?.inactiveColor}` : `${theme?.menuButtonBackground}`}`} />
                    </svg>
                ) : (
                    <svg fill={`${activeButton === 4 ? `${theme?.inactiveColor}` : `${theme?.menuButtonBackground}`}`} version="1.1" id="Capa_1"
                        width="35" height="35" viewBox="0 0 166.964 166.964"
                    >
                        <g>
                            <g>
                                <polygon points="75.1,159.95 75.115,159.938 75.088,159.938" />
                                <path d="M71.791,96.415h-0.179l-6.848-7.849c3.31,1.188,6.759,1.906,10.336,1.906c3.581,0,7.024-0.706,10.328-1.9l-6.848,7.843
                 h-0.167l16.779,40.578l15.332-20.361l17.001,12.787l10.669-16.027c-10.078-12.787-25.952-24.198-44.658-28.938
                 c13.518-9.097,22.834-27.033,22.834-43.181C116.369,18.478,97.883,0,75.1,0S33.837,18.478,33.837,41.272
                 c0,16.148,9.307,34.084,22.828,43.181c-32.324,8.199-56.282,36.258-56.282,57.059c0,12.288,37.351,18.426,74.705,18.413
                 l-20.919-20.91L71.791,96.415z"/>
                                <path d="M75.115,159.938c10.924-0.013,21.848-0.523,31.828-1.583l-17.269-12.982L75.115,159.938z" />
                                <polygon points="152.605,108.63 129.826,142.845 112.381,129.724 102.279,143.138 133.967,166.964 166.58,117.94" />
                            </g>
                        </g>
                    </svg>
                )}
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
                        href={user?.social[1]?.link} // Replace with the URL you want to redirect to
                        target="_blank" // Opens the link in a new tab
                        rel="noopener noreferrer"
                        className='rounded-full flex items-center justify-center' style={{ height: '4rem', width: '4rem', marginTop: '-3rem' }}>
                        <img
                            style={{
                                borderRadius: '50%'
                            }}
                            src={user?.social[1]?.icons} alt="SVG Image" />
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
                        href={user?.social[2]?.link} // Replace with the URL you want to redirect to
                        target="_blank" // Opens the link in a new tab
                        rel="noopener noreferrer"
                        className='rounded-full flex items-center justify-center' style={{ height: '4rem', width: '4rem', marginTop: '-3rem' }}>
                        <img
                            style={{
                                borderRadius: '50%'
                            }}
                            src={user?.social[2]?.icons} alt="SVG Image" />
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
                        href={user?.social[0]?.link} // Replace with the URL you want to redirect to
                        target="_blank" // Opens the link in a new tab
                        rel="noopener noreferrer"
                        className='rounded-full flex items-center justify-center bg-transparent' style={{ height: '4rem', width: '4rem', marginTop: '-3rem' }}>
                        <img style={{
                            borderRadius: '50%'
                        }} src={user?.social[0]?.icons} />
                    </a>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate={isMoved ? "moved" : "initial"}
                    variants={variants4}
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
                        href={user?.social[3]?.link} // Replace with the URL you want to redirect to
                        target="_blank" // Opens the link in a new tab
                        rel="noopener noreferrer"
                        className='rounded-full flex items-center justify-center' style={{ height: '4rem', width: '4rem', marginTop: '-3rem' }}>
                        <img style={{
                            borderRadius: '50%'
                        }}
                            src={user?.social[3]?.icons} alt="SVG Image" />
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
                    <div className='rounded-full flex items-center justify-center' style={{ height: '4rem', width: '4rem', marginTop: '-3rem', background: `${isMoved ? 'transparent' : 'white'}` }}>
                        <svg width="80" height="80" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="30%" style={{ stopColor: '#DC419B' }} />
                                <stop offset="100%" style={{ stopColor: '#F5895C' }} /> {/* You can adjust the ending color here */}
                            </linearGradient>
                            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="30%" style={{ stopColor: '#4a00ff' }} />
                                <stop offset="100%" style={{ stopColor: '#F6C0BA' }} /> {/* You can adjust the ending color here */}
                            </linearGradient>
                            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="30%" style={{ stopColor: '#FFD700' }} />
                                <stop offset="100%" style={{ stopColor: '#99621E' }} /> {/* You can adjust the ending color here */}
                            </linearGradient>
                            <title>plus-circle</title>
                            <desc>Created with Sketch Beta.</desc>
                            <g id="Page-1" stroke={`${isMoved == true ? `${theme?.buttonBackground}` : 'transparent'}`} strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="Icon-Set-Filled" transform="translate(-466, -1089)" fill={`${isMoved == true ? `` : `url(#gradient${theme?.inactiveColor})`}`}>
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
                {user?.type === 'biz' ? (
                    <svg width="33" height="33" viewBox="-4 0 32 32" version="1.1" >

                        <title>location</title>
                        <desc>Created with Sketch Beta.</desc>
                        <defs>

                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill={`${activeButton === 3 ? `${theme?.inactiveColor}` : `${theme?.menuButtonBackground}`}`} fill-rule="evenodd" >
                            <g id="Icon-Set-Filled" transform="translate(-106.000000, -413.000000)" fill={`${activeButton === 3 ? `${theme?.inactiveColor}` : `${theme?.menuButtonBackground}`}`}>
                                <path d="M118,422 C116.343,422 115,423.343 115,425 C115,426.657 116.343,428 118,428 C119.657,428 121,426.657 121,425 C121,423.343 119.657,422 118,422 L118,422 Z M118,430 C115.239,430 113,427.762 113,425 C113,422.238 115.239,420 118,420 C120.761,420 123,422.238 123,425 C123,427.762 120.761,430 118,430 L118,430 Z M118,413 C111.373,413 106,418.373 106,425 C106,430.018 116.005,445.011 118,445 C119.964,445.011 130,429.95 130,425 C130,418.373 124.627,413 118,413 L118,413 Z" id="location" >

                                </path>
                            </g>
                        </g>
                    </svg>
                ) : (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="style=fill">
                            <g id="email">
                                <path id="Subtract" fillRule="evenodd" clipRule="evenodd" d="M7 2.75C5.38503 2.75 3.92465 3.15363 2.86466 4.1379C1.79462 5.13152 1.25 6.60705 1.25 8.5V15.5C1.25 17.393 1.79462 18.8685 2.86466 19.8621C3.92465 20.8464 5.38503 21.25 7 21.25H17C18.615 21.25 20.0754 20.8464 21.1353 19.8621C22.2054 18.8685 22.75 17.393 22.75 15.5V8.5C22.75 6.60705 22.2054 5.13152 21.1353 4.1379C20.0754 3.15363 18.615 2.75 17 2.75H7ZM19.2285 8.3623C19.5562 8.10904 19.6166 7.63802 19.3633 7.31026C19.1101 6.98249 18.6391 6.9221 18.3113 7.17537L12.7642 11.4616C12.3141 11.8095 11.6858 11.8095 11.2356 11.4616L5.6886 7.17537C5.36083 6.9221 4.88982 6.98249 4.63655 7.31026C4.38328 7.63802 4.44367 8.10904 4.77144 8.3623L10.3185 12.6486C11.3089 13.4138 12.691 13.4138 13.6814 12.6486L19.2285 8.3623Z" fill={`${activeButton === 3 ? `${theme?.inactiveColor}` : `${theme?.menuButtonBackground}`}`} />
                            </g>
                        </g>
                    </svg>
                )}
            </button>
        </div>
    )
}

export default MobileMenu4x;

async function getBase64FromUrl(url: string): Promise<string> {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64 = reader.result as string;
            resolve(base64.split(',')[1]); // Remove the data URL prefix
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}