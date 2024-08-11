// src/app/profile/[id]/page.tsx
"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import MobileMenu from '@/components/mobileMenu';
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
        console.log("this is theme inside compoennt,",theme);
    }, [theme,user]);

    return (
        <div className={`flex items-center justify-center`} 
        style={{
            background: `${theme?.background}`
        }}>
            {/* <div className="full-screen-gradient" > */}
            {user && (
                <MobileMenu theme={theme} user={user} activeButton={activeButton} setActiveButton={setActiveButton} />
            )
            }
            {/* {activeButton === 1 && */}
            {user !== undefined && (
                <div className="h-screen w-screen flex items-center justify-center p-5 pb-20">
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