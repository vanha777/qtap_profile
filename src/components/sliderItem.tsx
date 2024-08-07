"use client";


import Link from 'next/link';
import { useEffect, useState } from "react";
import { stringify } from 'querystring';
import Card from './card';

// Define the type for the user object
type Media = {
    media: string;
    type: string;
    info: string;
};

// Define the props for the SliderItem component
interface SliderItemProps {
    isMobile: boolean;
    media: Media;
}

const SliderItem: React.FC<SliderItemProps> = ({ media, isMobile }) => {

    return (
        <div
      
      >
            <Card media={media} />
            {/* {media.type === 'image' ? (
                <img src={media.media} alt={media.info} className="w-full h-auto" />
            ) : media.type === 'video' ? (
                <video controls className="w-full h-auto">
                    <source src={media.media} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <p>Unsupported media type</p>
            )}
            <p>{media.info}</p> */}
        </div>
    )
}

export default SliderItem;