// src/app/profile/[id]/page.tsx
"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import MobileMenu from '@/components/mobileMenu';
import Slider from '@/components/slider';

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
  name: string;
  photo: string;
  title: string;
  bio: string;
  social: Social[];
  media: Media[];
};


export default function ProfilePage() {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState(1);
  const [id, setId] = useState<string | undefined>(undefined);
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    // const uuid = pathname.match(/\/profile\/(\d+)$/);
    // if (uuid) {
    //   setId(uuid[1]);
    //   const fetchUserData = async () => {
    //     // Simulate fetching user data
    //     const response = await fetch(`/api/user/${uuid[1]}`); // Replace with your API endpoint
    //     const data: User = await response.json();
    //     setUser(data);
    //   };
    //   fetchUserData();
    // }

    // Extract the dynamic route parameter `id`
    const { pathname } = new URL(window.location.href);
    const match = pathname.match(/\/profile\/(\d+)$/);
    if (match) {
      // setId(match[1]);
      if (match[1] == "1") {
        const user1: User = {
          name: 'Van Ha',
          photo: 'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
          title: 'Tech Lover',
          bio:'Passionate about building scalable and efficient software solutions.',
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
          photo: 'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
          title: 'Social Media Lover',
          bio:'A business leader, entrepreneur, and active community member.',
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
        setUser(user2);
      }
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center" style={{
      // height: '38rem',
      // maxWidth: '640px',
      background: 'linear-gradient(to right, #E17AFE, #9BAAFF)'
    }}>
      <MobileMenu activeButton={activeButton} setActiveButton={setActiveButton} />
      {activeButton === 1 && user !== undefined && (
        <div className="h-screen w-screen flex items-center justify-center p-5 pb-20">
        <Slider user={user} />
         </div>
      )
      }
      {/* {activeButton === 2 &&
        <div className="h-screen w-screen flex items-center justify-center">
          <WalletCard />
        </div>
      }
      {activeButton === 3 &&
        <div className="h-screen w-screen flex items-center justify-center">
          <Connection />
        </div>
      } */}
      {/* <h1>Profile Page</h1>
      <p>Profile ID: {id}</p> */}
      {/* Add any additional content or components here */}
    </div>
  );
}
