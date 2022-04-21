import svg1 from '../assets/images/svg-1.svg';
import svg2 from '../assets/images/svg-2.svg';
import svg3 from '../assets/images/svg-3.svg';

export interface InfoDataProps {
    id: string;
    lightBg: boolean;
    lightText: boolean;
    lightTextDesc: boolean;
    topLine: string;
    headLine: string;
    description: string;
    buttonLabel: string;
    imgStart: boolean;
    img: any;
    alt: string;
    dark: boolean;
    primary: boolean;
    darkText: boolean
}

export const InfoData: InfoDataProps[] = [
    {
        id: 'about',
        lightBg: true,
        lightText: false,
        lightTextDesc: false,
        topLine: 'Premium Bank',
        headLine: 'Unlimited Transactions with zero fees',
        description:
            `Get access to our exclusive app that allows
            you to send unlimited transactions without 
            getting charged`,
        buttonLabel: 'Get started',
        imgStart: false,
        img: svg1,
        alt: 'Car',
        dark: false,
        primary: false,
        darkText: true

    },
    {
        id: 'discover',

        lightBg: false,
        lightText: true,
        lightTextDesc: true,
        topLine: 'Unlimited Access',
        headLine: 'Login to your account at any time',
        description:
            `We have you covered no matter where you are located. 
            All you need is an internet connection and a phone or computer`,
        buttonLabel: 'Get started',
        imgStart: true,
        img: svg2,
        alt: 'Piggybank',
        dark: true,
        primary: true,
        darkText: false,
    },
    {
        id: 'signup',
        lightBg: true,
        lightText: false,
        lightTextDesc: false,
        topLine: 'Join our Team',
        headLine: 'Creating an account is extremely easy',
        description:
            `Get everything set up and ready in 
            under 10 minutes. All you need to do 
            is add your information and you are ready to go.`,
        buttonLabel: 'Get started',
        imgStart: false,
        img: svg3,
        alt: 'Paper',
        dark: false,
        primary: false,
        darkText: true
    },
]
