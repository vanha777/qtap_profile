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
                <img style={{
                    height: 400,
                }} src={media.media} alt="car!" />

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

                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                            {user.name}
                        </h1>


                        <h2 className="text-xl font-semibold text-gray-700 mb-4">
                            {user.title}
                        </h2>


                        <p className="text-base text-gray-600">
                            {user.bio}
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Card;