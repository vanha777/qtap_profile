"use client";


import Link from 'next/link';
import { useEffect, useState } from "react";
import { stringify } from 'querystring';
import Card from './card';

// Define the types for social and media objects
type Social = {
    link: string;
    platforms: string;
    icons: string;
};

type Media = {
    media: string;
    type: string;
    info: string;
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
type Theme = {
    background: string;
    primary: string;
    secondary: string;
    inactiveColor?: string;
    textColor?: string; // Optional property for text color
    borderColor?: string;
    buttonBackground: string
    buttonText?: String
};

// Define the props for the SliderItem component
interface SliderItemProps {
    theme?:Theme,
    user?: User;
}

const isMobileDevice = () => {
    return window.innerWidth <= 768;
};

const Slider: React.FC<SliderItemProps> = ({ theme,user }) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const updateIsMobile = () => setIsMobile(isMobileDevice());

        updateIsMobile(); // Initial check
        window.addEventListener('resize', updateIsMobile);

        return () => window.removeEventListener('resize', updateIsMobile);
    }, []);

    return (
        <div className="carousel carousel-vertical rounded-box h-full">
            {/* <Card media={user.media[0]} /> */}
            {user?.media.map((media) => (
             <div className="carousel-item">
                <Card theme={theme} user={user} isMobile={isMobile} media={media} />
                </div>
            ))}
        </div>
    )
}

export default Slider;