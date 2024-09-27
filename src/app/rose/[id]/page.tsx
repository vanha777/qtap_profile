// src/app/profile/[id]/page.tsx
"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import themeConfig from '../../../../themeConfig';
import { usePathname, useParams } from 'next/navigation';
import ProfileComponent from '@/components//test/profileComponent';
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
                    name: 'Sofia Nguyen',
                    photo: 'https://eazypic.s3.ap-southeast-4.amazonaws.com/IMG_2078.png',
                    phone:"+61413906792",
                    email:"sofiang2407@gmail.com",
                    title: 'Social Media Strategist',
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
                        },
                        {
                            link: 'https://www.instagram.com/sofia.socialbae',
                            platforms: 'Instargram',
                            icons: 'https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/theme/tiktok.svg?t=2024-09-13T14%3A13%3A57.513Z'
                        }
                    ],
                    media: [
                        {
                            media: 'https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/video/IMG_8651.MOV?t=2024-08-22T10%3A18%3A39.819Z',
                            type: 'video',
                            info: 'This is a test video'
                        }
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
