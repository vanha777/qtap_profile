// src/app/profile/[id]/page.tsx
"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import MobileMenu from '@/components/mobileMenu';
import Slider from '@/components/slider';
import themeConfig from '../../../../themeConfig';
import { usePathname, useParams } from 'next/navigation';
import ProfileComponent from '@/components/profileComponent';
import { Theme, User } from '../../../../themeConfig'

export default function ProfilePage() {
    const pathName = usePathname();
    const userId = useParams().id;
    const router = useRouter();
    const [activeButton, setActiveButton] = useState(1);
    const [path, setPath] = useState();
    const [id, setId] = useState<string | undefined>(undefined);
    const [user, setUser] = useState<User | undefined>(undefined);
    const [cssTheme, setCssTheme] = useState<Theme | undefined>(undefined);
    const [daisyTheme, setDaisyTheme] = useState<string | undefined>(undefined);

    useEffect(() => {
        const basePath = pathName.split('/')[1]?.trim();
        console.log("this is path name,", basePath);
        const cssTheme = themeConfig[basePath] || themeConfig[''];
        setCssTheme(cssTheme);
        setDaisyTheme(cssTheme.daisy);

        console.log("this is theme ,", cssTheme);
        console.log("this is params ,", userId);
        if (userId) {
            // setId(match[1]);
            if (userId == "1") {
                const user1: User = {
                    name: 'Van Ha',
                    photo: 'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
                    phone:"+61451862476",
                    email:"vanha101096@gmail.com",
                    title: 'Tech Lover',
                    bio: 'Passionate about building scalable and efficient software solutions.',
                    social: [
                        {
                            link: 'https://twitter.com/johndoe',
                            platforms: 'Twitter',
                            icons: 'https://example.com/twitter-icon.png'
                        },
                        {
                            link: 'https://linkedin.com/in/johndoe',
                            platforms: 'LinkedIn',
                            icons: 'https://example.com/linkedin-icon.png'
                        }
                    ],
                    media: [
                        {
                            media: 'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
                            type: 'image',
                            info: 'This is a test video'
                        }
                    ]
                };
                setUser(user1);
            } else {
                const user2: User = {
                    name: 'RenuSpa IO',
                    photo: 'https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/image/Image%204.jpeg',
                    phone:"+61413906792",
                    email:"sofiang2407@gmail.com",
                    title: 'NuSkin',
                    bio: 'I love helping content creators to build authentic brands that truly stand out.',
                    social: [
                        {
                            link: 'https://mysite.mynuskin.com/content/nuskin/en_AU/mysite/mysite-home.mysite.sofiabeautyworld.html?storeId=AS00220965#home',
                            platforms: 'Nuskin',
                            icons: 'https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/theme/IMG_9913.png'
                        },
                        {
                            link: 'https://www.facebook.com/sofiang2407',
                            platforms: 'Facebook',
                            icons: 'https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/theme/faceBook.svg'
                        },
                        {
                            link: 'https://www.instagram.com/sofia.socialbae',
                            platforms: 'Instargram',
                            icons: 'https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/theme/instargram.svg'
                        }
                    ],
                    media: [
                        {
                            photo: 'https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/image/att.wzzJIvDLz9sp4q845BXNX-WtM0eZbmeyaIR41nJjYT4.jpg',
                            media: 'https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/video/16.mp4?t=2024-09-11T09%3A41%3A11.193Z',
                            type: 'video',
                            name:'LumiSpa',
                            title: 'NuSkin',
                            info:'Ageloc, Anti-Aging',
                            link:'https://www.nuskin.com/us/en/product/ageloc-rose-gold-lumispa-io'
                        },
                        {
                            photo: 'https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/image/Image%204.jpeg',
                            media: 'https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/video/renu2.mp4?t=2024-09-11T09%3A08%3A58.205Z',
                            type: 'video',
                            name:'RenuSpa IO',
                            title: 'NuSkin',
                            info:'Massage, Muscle-Recovery',
                            link:'https://www.nuskin.com/us/en/product/nuskin-renuspa-io?categoryId=beauty_devices'
                        },
                    ]
                };
                setUser(user2);
            }
        }
    }, [router]);

    return (
        <div data-theme={`${daisyTheme}`} className='fixed'>
            <ProfileComponent theme={cssTheme} user={user} />
        </div>

    );
}
