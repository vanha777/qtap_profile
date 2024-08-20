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
    return (
        <div className="">
            <div
                className="flex items-center justify-center"
                style={{
                    width: "200px",
                    height: "200px",
                    transform: 'rotateZ(-5deg)', // Tilt by 5 degrees on Z-axis
                    transformOrigin: 'center', // Ensure the transformation is centered
                    backgroundColor: `${theme?.daisy == "silver" ? "white" : ""}`,
                }}
            >
                <QRCodeSVG
                    value={`https://biz-profile.vercel.app/${theme?.daisy}/2`}
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
                <h1 className={`${theme?.daisy == "silver" ? "text-accent-content" : "text-info-content"} text-4xl font-bold text-gray-900 mb-2 font-signature`}>
                    @{user?.name}
                </h1>
            </div>
        </div>

    );
};

export default SvgQRCode;

