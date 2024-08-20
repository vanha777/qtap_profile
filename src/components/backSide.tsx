"use client";


import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { Theme, Media, User } from '../../themeConfig';
import SvgQRCode from './qrCode';
interface MediaProps {
    theme?: Theme;
    isMobile: boolean;
    media: Media;
    user?: User;
}

const BackSide: React.FC<MediaProps> = ({ theme, media, isMobile, user }) => {
    // Inline style to set the dynamic ring color
    const style: React.CSSProperties = {
        '--ring-color': '#000' || '#000', // Set custom property, fallback to #000
    } as React.CSSProperties;
    return (
        <>
            <div className={`overflow-hidden items-center justify-center bg-primary-content card ${theme?.daisy === 'silver' ? '' : 'glass'} `}
                style={{
                    height: '550px', width: '350px',
                    background: `${theme?.daisy == "silver" ? `${theme?.backBackground}` : ""}`

                }}
            >
                <SvgQRCode theme={theme} user={user} />
            </div>
        </>
    )
}

export default BackSide;