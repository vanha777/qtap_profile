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

const Card: React.FC<MediaProps> = ({ theme, media, isMobile, user }) => {
    // Inline style to set the dynamic ring color
    const style: React.CSSProperties = {
        '--ring-color': '#000' || '#000', // Set custom property, fallback to #000
    } as React.CSSProperties;
    return (
        <>
            <div className={`bg-primary-content card ${theme?.daisy === 'rose' ? '' : 'glass'} w-96`}
            >
                {/* <img style={{
                    height: 400,
                }} src={media.media} alt="car!" /> */}
                <video
                    style={{
                        height: 400,
                        width: 'auto', // Adjust as needed, or use '100%' if you want it to fill the width of its container
                        objectFit: 'cover' // Ensures the video covers the container without stretching
                    }}
                    src={media.media} // Replace with your video source URL
                    autoPlay
                    muted // Optional: Mutes the video
                    playsInline // Optional: For inline playback on mobile devices
                    loop // Optional: To loop the video
                />

                <div className="relative">
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                        <div className="avatar">
                            {/* <div className={`w-24 rounded-full ring ring-primary ring-offset-base-100 ${theme?.daisy === 'rose' ? 'ring-offset-2' : ''}`}>
                                <a>
                                    <img src={user?.photo} alt="avatar" />
                                </a>
                            </div> */}
                            <div className="w-24 h-24 rounded-full relative">
                                <div
                                    className={`absolute inset-0 rounded-full p-1 ${theme?.daisy === 'rose' ? 'ring-offset-2' : ''}`}
                                    style={{
                                        backgroundImage: `${theme?.avatarBorder}`,
                                    }}
                                >
                                    <div className="w-full h-full rounded-full bg-base-100 p-[2px]">
                                        <img src={user?.photo} alt="avatar" className="w-full h-full rounded-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-body pt-16">
                    <div >

                        <h1 className="text-info-content text-4xl font-bold text-gray-900 mb-2 font-signature">
                            {user?.name}
                        </h1>


                        <h2 className="text-info-content text-xl font-semibold text-gray-700 mb-4 font-heading">
                            {user?.title}
                        </h2>


                        <p className="text-info-content text-base text-gray-600 font-description">
                            {user?.bio}
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Card;