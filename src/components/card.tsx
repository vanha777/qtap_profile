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
            <div style={{

            }}>


                <div className={`bg-primary-content card ${theme?.daisy === 'gold' ? 'glass' : ''} `}
                    style={{
                        height: '550px', width: '320px',
                        overflowY: 'auto', // Enable vertical scrolling
                        // overflowX: 'auto',
                    }}
                >
                    {/* <img style={{
                    height: 400,
                }} src={media.media} alt="car!" /> */}

                    {/* <video
                        style={{
                            height: 250,
                            width: 'auto', // Adjust as needed, or use '100%' if you want it to fill the width of its container
                            objectFit: 'cover' // Ensures the video covers the container without stretching
                        }}
                        src={media.media} // Replace with your video source URL
                        autoPlay
                        muted // Optional: Mutes the video
                        playsInline // Optional: For inline playback on mobile devices
                        loop // Optional: To loop the video
                    />
                    <img style={{
                        height: 250,
                    }} src={media.media} alt="car!" /> */}

                    {media.type === 'video' ? (
                        <video
                            style={{
                                height: 250,
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
                        <img
                            style={{
                                height: 250,
                                width: 'auto', // Ensures the image is not stretched
                                objectFit: 'cover' // Ensures the image covers the container without stretching
                            }}
                            src={media.media} // Replace with your image source URL
                            alt="media" // Provide a meaningful alt text
                        />
                    )}

                    <div className="relative">
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                            <div className="avatar">
                                <div className="w-48 h-48 rounded-full relative">
                                    <div
                                        className={`absolute inset-0 rounded-full p-1 ${theme?.daisy === 'rose' ? 'ring-offset-2' : ''}`}
                                        style={{
                                            backgroundImage: `${theme?.avatarBorder}`,
                                        }}
                                    >
                                        <div className="w-full h-full rounded-full bg-base-100 p-[2px]">
                                            <img src={media?.photo} alt="avatar" className="w-full h-full rounded-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-body pt-16 relative">
                        <div className='pt-24'>

                            <h1 className="text-info-content text-4xl font-bold text-gray-900 mb-2 font-signature">
                                {media?.name}
                            </h1>


                            <h2 className="text-info-content text-xl font-semibold text-gray-700 mb-2 font-heading">
                                {media?.title}
                            </h2>


                            <p className="mb-4 text-info-content text-base text-gray-600 font-description">
                                {media?.info}
                            </p>

                            {/* <button className="absolute bottom-0 right-0 px-4 py-2 bg-blue-600 text-white rounded-lg outline-none ring-2 ring-blue-500 ring-offset-2">
                                Book Demo
                            </button> */}
                            <button
                                className="absolute bottom-0 right-0 px-4 py-2 text-white rounded-lg outline-none ring-2 ring-pink-500 ring-offset-2"
                                style={{ backgroundColor: theme?.menuButtonBackground }}
                            >
                                Book Demo
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;