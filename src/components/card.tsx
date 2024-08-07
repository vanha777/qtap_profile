"use client";


import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

type Media = {
    media: string;
    type: string;
    info: string;
};

// Define the types for social and media objects
type Social = {
    link: string;
    platforms: string;
    icons: string;
};

// Define the type for the user object
type User = {
    photo: string;
    name: string;
    title: string;
    bio: string;
    social: Social[];
    media: Media[];
};

interface MediaProps {
    isMobile: boolean;
    media: Media;
    user: User;
}

const Card: React.FC<MediaProps> = ({ media, isMobile, user }) => {

    return (
        <>
            <div className="card w-96 bg-white">
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
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <a>
                                    <img src={user.photo} alt="avatar" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-body pt-16">
                    <div >

                        <h1 className="text-4xl font-bold text-gray-900 mb-2 font-signature">
                            {user.name}
                        </h1>


                        <h2 className="text-xl font-semibold text-gray-700 mb-4 font-heading">
                            {user.title}
                        </h2>


                        <p className="text-base text-gray-600 font-description">
                            {user.bio}
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Card;