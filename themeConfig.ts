// themeConfig.ts

// type Theme = {
//     background: string;
//     primary: string;
//     secondary: string;
//     inactiveColor?: string;
//     textColor?: string; // Optional property for text color
//     borderColor?: string;
//     buttonBackground: string
//     buttonText?: String
// };

type ThemeConfig = {
  [key: string]: Theme;
};

// types/theme.ts
export interface Theme {
  background: string;
  primary: string;
  secondary: string;
  daisy: string
  inactiveColor?: string;
  textColor?: string; // Optional property for text color
  borderColor?: string;
  buttonBackground: string
  menuButtonBackground:string
  buttonText?: string
  backBackground?:string
  avatarBorder:string

}

// Define the types for social and media objects
export interface Social {
  link: string;
  platforms: string;
  icons: string;
};

export interface Media {
  media: string;
  type: string;
  info: string;
};

// types/user.ts (example)
export interface User {
  name: string;
  photo: string;
  phone: string;
  email: string;
  qr_code?: string;
  username?: string;
  title: string;
  bio: string;
  social: Social[];
  media: Media[];
  type:string;
  address:string;
  suburb:string;
  post_code:string;
  country:string;
}

const themeConfig: ThemeConfig = {
  "": {
    avatarBorder: 'linear-gradient(to right, #C0C0C0, #333333)',
    background: 'bg-gradient-rose-gold',
    primary: '#4a00ff',
    secondary: '',
    inactiveColor: '#333333',
    buttonBackground: '#FFFFFF',
    menuButtonBackground: '#FFFFFF',
    buttonText: '#4a00ff',
    daisy: 'silver'
  },
  "silver": {
    avatarBorder: 'linear-gradient(to right, #4a00ff, #F6C0BA)',
    background: 'linear-gradient(to right, #E17AFE, #9BAAFF)',
    primary: '#4a00ff',
    secondary: '',
    inactiveColor: '2',
    buttonBackground: '#4a00ff',
    menuButtonBackground: '#4a00ff',
    buttonText: '#4a00ff',
    daisy: 'silver'
  },
  // "rose": {
  //   background: 'linear-gradient(135deg, #FFECF0 0%, #E6F7FF 100%)',
  //   primary: '#E29587',
  //   secondary: '',
  //   inactiveColor: '#333333',
  //   buttonBackground: '#FFFFFF',
  //   buttonText: '#E29587',
  //   daisy: 'rose'
  // },
  "rose": {
    avatarBorder: 'linear-gradient(90deg, #DC419B, #F5895C)',
    // background: 'https://eazypic.s3.ap-southeast-4.amazonaws.com/Background+Colour+For+Silver+Card+Profile+.png',
    background: '/test.png',
    backBackground:'linear-gradient(90deg, #DC419B, #F5895C)',
    primary: '#DC419B',
    secondary: '',
    inactiveColor: '1',
    buttonBackground: '#DC419B',
    menuButtonBackground: '#DC419B',
    buttonText: '#dc419b',
    daisy: 'rose'
  },
  "gold": {
    avatarBorder: 'linear-gradient(to right, #FFD700, #99621E)',
    background: '/black_water.png',
    // background: 'linear-gradient(to right, #002F6C, #000000)',
    primary: '#F9E73E',
    secondary: '',
    inactiveColor: '3',
    buttonBackground: '#FFD700',
    menuButtonBackground: '#FFD700',
    buttonText: '#0f766e',
    daisy: 'gold'
  },
  // Add more routes and themes as needed
};

export default themeConfig;
