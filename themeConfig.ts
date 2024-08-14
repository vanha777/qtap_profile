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
  buttonText?: String

}

// Define the types for social and media objects
export interface Social {
  link: string;
  platforms: string;
  icons: string;
};

export interface Media  {
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
  title: string;
  bio: string;
  social: Social[];
  media: Media[];
}

const themeConfig: ThemeConfig = {
  "": {
    background: 'bg-gradient-rose-gold',
    primary: '#4a00ff',
    secondary: '',
    inactiveColor: '#333333',
    buttonBackground: '#FFFFFF',
    buttonText: '#4a00ff',
    daisy: 'silver'
  },
  "rose": {
    background: 'linear-gradient(to right, #E17AFE, #9BAAFF)',
    primary: '#4a00ff',
    secondary: '',
    inactiveColor: '#333333',
    buttonBackground: '#FFFFFF',
    buttonText: '#4a00ff',
    daisy: 'rose'
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
  "silver": {
    background: 'linear-gradient(to right, #1F1F1F, #4D4D4D)',
    primary: '#C0C0C0',
    secondary: '',
    inactiveColor: '#333333',
    buttonBackground: '#E0E0E0',
    buttonText: '#be123c',
    daisy: 'silver'
  },
  "gold": {
    background: 'linear-gradient(to right, #2C2C2C, #1A1A1A)',
    primary: '#C09A3E',
    secondary: '',
    inactiveColor: '#858585',
    buttonBackground: '#E6C68B',
    buttonText: '#0f766e',
    daisy: 'gold'
  },
  // Add more routes and themes as needed
};

export default themeConfig;
