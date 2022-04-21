import svg4 from '../assets/images/svg-4.svg';
import svg5 from '../assets/images/svg-5.svg';
import svg6 from '../assets/images/svg-6.svg';

export interface ServicesDataProps {
    id: number;
    title: string;
    description: string;
    icon: any;
}

export const ServicesData: ServicesDataProps[] = [
    {
        id: 1,
        title: 'Reduce expenses',
        description: 'We help reduce your fess and increase your overall revenue.',
        icon: svg4,
    },
    {
        id: 2,
        title: 'Virtual Offices',
        description: 'You can access our platform online anywher e in the world.',
        icon: svg5,
    },
    {
        id: 3,
        title: 'Premium Banefits',
        description: 'Unlock our special menbership card that',
        icon: svg6,
    },
]
