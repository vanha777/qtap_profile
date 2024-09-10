"use client";


import Link from 'next/link';
import { useEffect, useState } from "react";
import { stringify } from 'querystring';
import Card from './card';
import { Theme, Media, User } from '../../themeConfig';
// import SwipeFlipCard from './swipe';
import SwipeFlipCard from './card2';
// Define the props for the SliderItem component
interface SliderItemProps {
    theme?: Theme,
    user?: User;
}

const isMobileDevice = () => {
    return window.innerWidth <= 768;
};

const Slider: React.FC<SliderItemProps> = ({ theme, user }) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const updateIsMobile = () => setIsMobile(isMobileDevice());

        updateIsMobile(); // Initial check
        window.addEventListener('resize', updateIsMobile);

        return () => window.removeEventListener('resize', updateIsMobile);
    }, []);

    return (

        <div className="carousel w-full flex items-center">
            {user?.media.map((media, index) => (
                <div id={`${index}`} className="carousel-item relative w-full">
                    {/* <Card theme={theme} user={user} isMobile={isMobile} media={media} /> */}
                    <SwipeFlipCard theme={theme} user={user} isMobile={isMobile} media={media} />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a  className="btn btn-circle">❮</a>
                        <a  className="btn btn-circle">❯</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Slider;