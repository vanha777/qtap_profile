// src/app/profile/[id]/page.tsx
"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import MobileMenu3x from '@/components/mobileMenu3x';
import MobileMenu4x from './mobileMenu4x';
import Slider from '@/components/slider';
import themeConfig from '../../themeConfig';
import { usePathname, useParams } from 'next/navigation';
import { Theme, User } from '../../themeConfig';
import LoadingAnimation from './loadingAnimation';
import { motion } from 'framer-motion';

const MinimumLoadingTime: React.FC<{ children: React.ReactNode, minLoadingTime: number }> = ({ children, minLoadingTime }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, minLoadingTime);

        return () => clearTimeout(timer);
    }, [minLoadingTime]);

    if (isLoading) {
        return <LoadingAnimation />;
    }

    return <>{children}</>;
};

interface ProfileComponentsProps {
    theme?: Theme,
    user?: User
}

const ProfileComponent: React.FC<ProfileComponentsProps> = ({ theme, user }) => {
    const [activeButton, setActiveButton] = useState(1);

    useEffect(() => {
        console.log("this is theme inside compoennt,", theme);
    }, [theme, user]);

    return (
        <MinimumLoadingTime minLoadingTime={3000}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className={`flex items-center justify-center overflow-hidden fixed`}
                    style={{
                        ...(theme?.daisy === 'silver'
                            ? { background: `${theme?.background}` }
                            : { backgroundImage: `url(${theme?.background})` }),
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {user && (
                        user.social.length > 3 ? (
                            <MobileMenu4x
                                theme={theme}
                                user={user}
                                activeButton={activeButton}
                                setActiveButton={setActiveButton}
                            />
                        ) : (
                            <MobileMenu3x
                                theme={theme}
                                user={user}
                                activeButton={activeButton}
                                setActiveButton={setActiveButton}
                            />
                        )
                    )}
                    {user !== undefined && (
                        <div className="h-screen w-screen flex items-center justify-center p-5 pb-32 overflow-hidden">
                            <Slider theme={theme} user={user} />
                        </div>
                    )
                    }
                </div>
            </motion.div>
        </MinimumLoadingTime>
    );
}
export default ProfileComponent;