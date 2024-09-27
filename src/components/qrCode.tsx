"use client";

import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { Theme, User, Media, Social } from '../../themeConfig';
import { motion } from "framer-motion";
import AnimatedText from "./animatedText";
interface ThemeProps {
    theme?: Theme,
    user?: User
}

const SvgQRCode: React.FC<ThemeProps> = ({ theme, user }) => {
    const generateVCard = () => {
        const vCardData = `BEGIN:VCARD
    VERSION:3.0
    FN:John Doe
    ORG:Example Company
    TEL:+1234567890
    EMAIL:john.doe@example.com
    END:VCARD`;

        const blob = new Blob([vCardData], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'contact.vcf'; // File name for the downloaded vCard
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: '🚀 Discover My Digital Business Card!',
                    text: '📈 Connect with me easily and instantly. Check out my digital business card with all my contact details and social links. Just a click away!',
                    url: `${`${user?.qr_code ? `${user.qr_code}` : `https://biz-profile.vercel.app/@${user?.username}`}`}`,
                });
                console.log('Link shared successfully');
            } catch (error) {
                console.error('Error sharing the link:', error);
            }
        } else {
            alert('Web Share API is not supported in your browser.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div
                className=" rounded-box"
                style={{
                    width: "200px",
                    height: "200px",
                    transform: 'rotateZ(-5deg)', // Tilt by 5 degrees on Z-axis
                    transformOrigin: 'center', // Ensure the transformation is centered
                    backgroundColor: `${theme?.daisy == "rose" ? "#F0F0F0" : ""}`,
                }}
            >
                <QRCodeSVG
                    // value={`https://biz-profile.vercel.app/${theme?.daisy}/2`}
                    value={`${user?.qr_code ? `${user.qr_code}` : `https://biz-touch.me/@${user?.username}`}`}
                    size={200}
                    bgColor="transparent"
                    fgColor={`url(#gradient${theme?.inactiveColor})`}
                    level="M" // Error correction level: L, M, Q, H
                    includeMargin={true}
                // imageSettings={{
                //     src: "https://eazypic.s3.ap-southeast-4.amazonaws.com/IMG_2078.png",
                //     height: 50,
                //     width: 50,
                //     excavate: true, // Removes QR code dots behind the logo
                //   }}
                />
                <svg width="0" height="0">
                    <defs>
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
                    </defs>
                </svg>
                {/* <div className="mt-10">
                    <h1 className="text-info-content text-4xl font-bold text-gray-900 mb-2 font-signature">
                        @{user?.name}
                    </h1>
                </div> */}
            </div>
            <div
                className="mt-10"
                style={{
                    // Applying tilt directly to the element
                    transform: 'rotateZ(5deg)', // Tilt by 20 degrees on X-axis
                    transformOrigin: 'center', // Ensure the transformation is centered
                }}
            >
                <h1 className={`${theme?.daisy == "rose" ? "text-neutral" : "text-info-content"} text-4xl font-bold text-gray-900 mb-2 font-signature`}>
                    @{user?.name}
                </h1>
            </div>

            {/* <div className="flex flex-row justify-between mt-10 ">
                <button className="btn btn-circle mx-8" onClick={handleShare}>
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 13V17.5C20 20.5577 16 20.5 12 20.5C8 20.5 4 20.5577 4 17.5V13M12 3L12 15M12 3L16 7M12 3L8 7" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <button className="btn btn-circle mx-8" onClick={generateVCard}>
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Interface / Download">
                            <path id="Vector" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>
                </button>
            </div> */}

        </div>

    );
};

export default SvgQRCode;

