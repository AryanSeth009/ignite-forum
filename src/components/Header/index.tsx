import LINKS from '@/constants/links';
import Link from 'next/link';

export type HeaderNextStep = 'signup' | 'payment' | null;

export type HeaderData = {
    isSignedIn: boolean;
    nextStep: HeaderNextStep;
    isCommittee: boolean;
    isAdmin: boolean;
    avatar: string | null;
};

export default function Header() {
    return (
        <header className="fixed z-[9999] w-full">
            <div className="mx-auto mt-8 w-responsive">
                <div className="flex items-center justify-between gap-8 border-4 border-black bg-white px-8 py-4 text-grey">
                    <Link href="/" className="py-2 font-black">
                        Ignite Forum
                    </Link>
                    <nav className="flex gap-4">
                        {LINKS.map((link) => (
                            <Link
                                key={link.title}
                                href={link.href ?? '#'}
                                className="py-2 hover:underline"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="relative -right-[0.5rem] -top-[7.5rem] -z-10 h-[8rem] w-responsive border-4 border-black bg-white lg:-top-[6rem] lg:h-[6.5rem] md-lg:-top-[4.75rem] md-lg:h-[5.25rem]" />
            </div>
        </header>
    );
}
