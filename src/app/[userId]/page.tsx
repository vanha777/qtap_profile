// src/app/profile/[id]/page.tsx
"use client"

import { useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import themeConfig from '../../../themeConfig';
import { usePathname, useParams } from 'next/navigation';
import ProfileComponent from '@/components/profileComponent';
import { Theme, User } from '../../../themeConfig'
import { Auth } from '@/lib/auth';
import SEO from '@/components/seo';
import { GoogleTagManager, sendGTMEvent } from '@next/third-parties/google'
import LoadingAnimation from '@/components/loadingAnimation';
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

export default function ProfilePage() {
    const pathName = usePathname().replace('@', '').replace('/', '');
    // const userId = useParams().userId;
    const router = useRouter();
    const [user, setUser] = useState<User | undefined>(undefined);
    const [cssTheme, setCssTheme] = useState<Theme | undefined>(undefined);
    const [daisyTheme, setDaisyTheme] = useState<string | undefined>(undefined);

    const sendUserTapEvent = () => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'user_tap', {
                event_category: 'User Interaction',
                event_label: pathName,
                value: pathName,
            });
        }
    };



    const fetchUserData = async () => {

        const { data, error } = await Auth
            .from('users')
            .select('*')
            .eq('username', pathName)
            .single()

        if (error) {
            router.replace("https://biz-touch.vercel.app");
        }

        data.name = `${data.first_name} ${data.last_name}`;

        const cssTheme = themeConfig[data.theme] || themeConfig[''];
        setCssTheme(cssTheme);
        setDaisyTheme(cssTheme.daisy);
        setUser(data)
        console.log('Fetched user data:', data)
    }

    useEffect(() => {
        console.log("this is pathname ", pathName);
        if (pathName) {
            fetchUserData();
            sendUserTapEvent();
        }
    }, [pathName]);

    return (
        <div data-theme={`${daisyTheme}`}>
            <Suspense fallback={<LoadingAnimation />}>
                <MinimumLoadingTime minLoadingTime={3000}>
                    <SEO title={user?.title} bio={user?.bio} imageUrl={user?.phone} url={`https://biz-touch.me/${user?.username}`} name={user?.name} />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <ProfileComponent theme={cssTheme} user={user} />
                    </motion.div>
                </MinimumLoadingTime>
            </Suspense>
        </div>
    );
}
