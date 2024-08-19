"use client";


import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { Theme, Media, User } from '../../themeConfig';

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
            <div className={`overflow-hidden bg-primary-content card ${theme?.daisy === 'rose' ? '' : 'glass'} `}
            style={{ height: '480px',width:'320px' }}
            >
                
            </div>
        </>
    )
}

export default BackSide;