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

// types/user.ts (example)
export interface User {
  name: string;
  photo: string;
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
    background: 'bg-gradient-rose',
    primary: '#4a00ff',
    secondary: '',
    inactiveColor: '#333333',
    buttonBackground: '#FFFFFF',
    buttonText: '#4a00ff',
    daisy: 'rose'
  },
  "silver": {
    background: 'bg-gradient-silver',
    primary: '#be123c',
    secondary: '',
    inactiveColor: '#333333',
    buttonBackground: '#FFFFFF',
    buttonText: '#be123c',
    daisy: 'silver'
  },
  "gold": {
    background: 'bg-gradient-gold',
    primary: '#0f766e',
    secondary: '',
    inactiveColor: '#333333',
    buttonBackground: '#f0fdf4F',
    buttonText: '#0f766e',
    daisy: 'gold'
  },
  // Add more routes and themes as needed
};

export default themeConfig;
