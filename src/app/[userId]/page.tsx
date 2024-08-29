// src/app/profile/[id]/page.tsx
"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import themeConfig from '../../../themeConfig';
import { usePathname, useParams } from 'next/navigation';
import ProfileComponent from '@/components/profileComponent';
import { Theme, User } from '../../../themeConfig'
import { Auth } from '@/lib/auth';
import SEO from '@/components/seo'; 

export default function ProfilePage() {
    const pathName = usePathname().replace('@', '').replace('/', '');
    // const userId = useParams().userId;
    const router = useRouter();
    const [user, setUser] = useState<User | undefined>(undefined);
    const [cssTheme, setCssTheme] = useState<Theme | undefined>(undefined);
    const [daisyTheme, setDaisyTheme] = useState<string | undefined>(undefined);

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
        }
    }, [router]);

    return (
        <div data-theme={`${daisyTheme}`}>
            <SEO title={user?.title} bio={user?.bio} imageUrl={user?.phone} url={`https://biz-touch.me/${user?.username}`} name={user?.name}  />
            <ProfileComponent theme={cssTheme} user={user} />
        </div>

    );
}
