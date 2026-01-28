'use client';
import Image from 'next/image';
import React, { useContext } from 'react';
import { MagicCard } from './ui/magic-card';
import { Link } from '@radix-ui/themes';
import { I_Experience } from '@/types/project';
import { DarkModeContext } from '@/context/DarkModeContext';
import { bricolage_grotesque, inter } from '@/utils/fonts';
import Title from './ui/Title';

const experiences: I_Experience[] = [
    {
        company_name: 'RenewBuy',
        job_title: 'Back End Developer (Intern)',
        duration: 'Jan 2025 - Mar 2025',
        company_link: 'https://www.renewbuy.com/',
        company_logo: '/renewbuy.jpg',
        description:
            'Worked on a health insurance module by optimizing API performance, implementing caching, and improving reliability while building and testing REST APIs for compliant workflows.',
    },
    {
        company_name: 'Wonder Creative Studio',
        job_title: 'Back End Developer (Intern)',
        duration: 'Apr 2025 - Aug 2025',
        company_link: 'https://wondercreativestudio.com/',
        company_logo: '/wonder-creative.jpg.png',
        description:
            'Worked on backend features and APIs, focusing on reliable integrations, clean data flows, and maintainable server-side code.',
    },
    {
        company_name: 'Damru (Rishihood University)',
        job_title: 'Board Member',
        duration: 'Aug 2025 - Jan 2026',
        company_link: 'https://www.rishihood.edu.in/',
        company_logo: '/damru.jpg',
        description:
            'Led the cultural fest from the ground up—driving planning, coordination, and execution to create memorable student experiences.',
    },
    {
        company_name: 'Neutron (Techfest)',
        job_title: 'Bandwidth',
        duration: 'Feb 2025 - Present',
        company_link: 'https://www.instagram.com/neutronfest/',
        company_logo: '/neutron.jpg',
        description:
            'Led marketing and social media efforts for Neutron, achieving 2,000+ registrations and a footfall of 1,400+ participants. Planned and executed multi-platform campaigns, collaborated with sponsors and student communities, and drove engagement to deliver a record-breaking event.',
    },
    {
        company_name: 'Neutron (Techfest)',
        job_title: 'Core Committee',
        duration: 'Feb 2024 - Apr 2025',
        company_link: 'https://www.instagram.com/neutronfest/',
        company_logo: '/neutron.jpg',
        description:
            'Head of marketing and social media—owned content planning, campaign execution, and community engagement to grow reach and participation.',
    },
];

const ExperienceCard = ({
    company_link,
    company_logo,
    company_name,
    duration,
    job_title,
    description
}: I_Experience) => {
    const darkModeContext = useContext(DarkModeContext);
    if (!darkModeContext) {
        throw new Error("darkModeContext is possibly undefined!");
    }

    const { isDarkMode } = darkModeContext;

    return (
        <MagicCard className="cursor-pointer dark:shadow-2xl !bg-transparent border-none" gradientColor={`${isDarkMode ? '#262626' : 'rgba(197, 241, 241, 0.4)'}`}>
            <div className="flex w-full px-5 max-sm:px-0 max-sm:pr-1 py-3">
                <div className="w-24 flex items-center justify-center">
                    <Link href={company_link} target='_blank'>
                        <Image src={company_logo} alt='company-logo' width={50} height={50} className='rounded-full' />
                    </Link>
                </div>
                <div className="w-full">
                    <div className="">
                        <div className={`flex justify-between max-sm:items-center ${bricolage_grotesque}`}>
                            <h1 className='text-lg max-sm:text-base font-semibold'>{company_name}</h1>
                            <span className={`text-xs max-sm:text-[10px] max-sm:hidden`}>{duration}</span>
                        </div>
                        <h2 className={`text-sm max-sm:text-xs ${inter}`}>{job_title}</h2>
                        <h2 className={`text-sm max-sm:text-[10px] hidden max-sm:block mt-1 ${inter}`}>{duration}</h2>
                    </div>
                    <div className="mt-3 text-sm max-sm:text-[11px]">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </MagicCard>
    );
};

const Experience = () => {
    return (
        <div className='w-1/2 max-lg:w-full max-lg:px-20 max-sm:w-full max-sm:px-5 flex flex-col items-center mt-4 pb-8'>
            <Title title='Experience' />

            <div className="w-full flex flex-col gap-4 mt-5">
                {experiences.map((exp) => (
                    <ExperienceCard key={`${exp.company_name}-${exp.job_title}-${exp.duration}`} {...exp} />
                ))}
            </div>
        </div>
    );
};

export default Experience;
