"use client";


import Link from 'next/link';
import { useEffect, useState } from "react";
import { stringify } from 'querystring';
import Card from './card';
import { Theme,Media,User } from '../../themeConfig';

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