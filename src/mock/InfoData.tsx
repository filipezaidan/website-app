import svg1 from '../assets/images/svg-1.svg';
import svg2 from '../assets/images/svg-2.svg';
import svg3 from '../assets/images/svg-3.svg';
import svg4 from '../assets/images/svg-4.svg';
import svg5 from '../assets/images/svg-5.svg';
import svg6 from '../assets/images/svg-6.svg';

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
        lightBg: false,
        lightText: true,
        lightTextDesc: true,
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
        dark: true,
        primary: true,
        darkText: false,
    },
    {
        id: 'discover',
        lightBg: true,
        lightText: false,
        lightTextDesc: false,
        topLine: 'Unlimited Access',
        headLine: 'Login to your account at any time',
        description:
            `We have you covered no matter where you are located. 
            All you need is an internet connection and a phone or computer`,
        buttonLabel: 'Get started',
        imgStart: true,
        img: svg2,
        alt: 'Piggybank',
        dark: false,
        primary: false,
        darkText: true
    },
    {
        id: 'about',
        lightBg: false,
        lightText: true,
        lightTextDesc: true,
        topLine: 'Premium Bank',
        headLine: 'Unlimited Transactions with zero fees',
        description:
            `Get access to our exclusive app that allows
        you to send unlimited transactions without 
        getting charged any fees`,
        buttonLabel: 'Get started',
        imgStart: false,
        img: svg3,
        alt: 'Car',
        dark: true,
        primary: true,
        darkText: false
    },
]
