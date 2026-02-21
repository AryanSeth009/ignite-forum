'use client';

import type { HeaderData } from '.';
import Button from '../Button';
import HeaderLinks from './components/HeaderLinks';
import LogoTitle from './components/LogoTitle';
import ScrollShader from './components/ScrollShader';
import { SignInJoin } from './components/SignInJoin';
import UserButton from './components/UserButton';

export default function HeaderClient({
    data,
    className,
}: {
    data: HeaderData;
    className?: string;
}) {
    const isMember = data.nextStep === null;
    const memberLinks = [
        ...(isMember
            ? [
                  {
                      title: 'Ignite Forum Drive',
                      href: process.env.NEXT_PUBLIC_DRIVE_LINK ?? '',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                  },
                  { title: 'Photo Gallery', href: '/gallery' },
              ]
            : []),
    ];
    return (
        <header className={`${className} fixed z-[9999] w-full`}>
            <ScrollShader />
            <div className="mx-auto mt-2 w-responsive">
                <div className="flex items-center justify-between gap-8 border-4 border-black bg-white px-8 py-0 text-grey">
                    <div className="flex flex-shrink items-center">
                        <LogoTitle titleColor="text-grey" className="grow" />
                    </div>
                    <div className="flex items-center md:gap-4">
                        <HeaderLinks dropdownLinks={memberLinks} />
                    </div>
                </div>
                <div className="relative -right-[0.5rem] -top-[2.75rem] -z-10 h-[3.25rem] w-responsive border-4 border-black bg-white" />
            </div>
        </header>
    );
}
