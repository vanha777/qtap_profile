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

interface ProfileComponentsProps {
    theme?: Theme,
    user?: User
}

const ProfileComponent: React.FC<ProfileComponentsProps> = ({ theme, user }) => {
    const [activeButton, setActiveButton] = useState(1);

    // const theme: Theme = {
    //     background: 'bg-gradient-rose-gold',
    //     primary: '#4a00ff',
    //     secondary: '',
    //     inactiveColor: '#333333',
    //     buttonBackground: '#FFFFFF',
    //     buttonText: '#4a00ff'
    // };

    useEffect(() => {
        console.log("this is theme inside compoennt,", theme);
    }, [theme, user]);

    return (
        <div className={`flex items-center justify-center overflow-hidden fixed`}
            style={{

                background: `${theme?.background}`,

                backgroundImage: `${theme?.daisy == 'rose' ? `url(${theme?.background})` : ''}`,
                backgroundSize: 'cover', // Adjust how the background image is sized
                backgroundPosition: 'center', // Center the background image
                // backdropFilter: 'blur(100px)', // Apply the blur effect

            }}
        >
            {/* <div className="full-screen-gradient" > */}
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
            {/* {activeButton === 1 && */}
            {user !== undefined && (
                <div className="h-screen w-screen flex items-center justify-center p-5 pb-20 overflow-hidden">
                    <Slider theme={theme} user={user} />
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
export default ProfileComponent;