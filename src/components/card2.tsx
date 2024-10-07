"use client";


import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { Theme, Media, User } from '../../themeConfig';
import Image from 'next/image';

interface MediaProps {
    theme?: Theme;
    isMobile: boolean;
    media: Media;
    user?: User;
}

const BizCard: React.FC<MediaProps> = ({ theme, media, isMobile, user }) => {
    // Inline style to set the dynamic ring color
    const style: React.CSSProperties = {
        '--ring-color': '#000' || '#000', // Set custom property, fallback to #000
    } as React.CSSProperties;
    return (
        <div style={{
        }}>
            <div className={`bg-primary-content card ${theme?.daisy === 'gold' ? 'glass' : ''} `}
                style={{
                    height: '750px', width: '320px',
                    overflowY: 'auto', // Enable vertical scrolling
                    // overflowX: 'auto',
                    position: 'relative' // Ensure the button is positioned correctly
                }}
            >
                {media.type === 'video' ? (
                    <video
                        style={{
                            height: 450,
                            width: 'auto', // Adjust as needed, or use '100%' if you want it to fill the width of its container
                            objectFit: 'cover' // Ensures the video covers the container without stretching
                        }}
                        src={media.media} // Replace with your video source URL
                        autoPlay
                        muted // Optional: Mutes the video
                        playsInline // Optional: For inline playback on mobile devices
                        loop // Optional: To loop the video
                    />
                ) : (
                    <Image
                        style={{
                            height: 450,
                            width: 'auto', // Ensures the image is not stretched
                            objectFit: 'cover' // Ensures the image covers the container without stretching
                        }}
                        src={media.media} // Replace with your image source URL
                        alt="media" // Provide a meaningful alt text
                        width={1000}
                        height={1000}
                    />
                )}

                <div className="relative">
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                        <div className="avatar">
                            <div className="w-24 h-24 rounded-full relative">
                                <div
                                    className={`absolute inset-0 rounded-full p-1 ${theme?.daisy === 'rose' ? 'ring-offset-2' : ''}`}
                                    style={{
                                        backgroundImage: `${theme?.avatarBorder}`,
                                    }}
                                >
                                    <div className="w-full h-full rounded-full bg-base-100 p-[2px]">
                                        <Image
                                            src={user?.photo || '/default-avatar.png'}
                                            alt="avatar"
                                            className="w-full h-full rounded-full object-cover"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-body pt-16">
                    <div>
                        <h1 className="text-info-content text-4xl font-bold text-gray-900 mb-2 font-signature">
                            {user?.name}
                        </h1>

                        <h2 className="text-info-content text-xl font-semibold text-gray-700 mb-4 font-heading">
                            {user?.title}
                        </h2>
                        <a
                            href="https://biz-profile.vercel.app/" // Replace with your actual URL
                            className="fixed right-0 px-4 py-2 text-white rounded-lg outline-none ring-2 ring-white-500 ring-offset-2"
                        style={{ backgroundColor: theme?.menuButtonBackground }}
                        >
                            Our Services
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BizCard;