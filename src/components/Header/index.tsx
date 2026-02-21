import { auth } from '@/auth';
import type { Session } from 'next-auth';
import HeaderClient from './HeaderClient';
import HeaderMobileClient from './HeaderMobileClient';

export type HeaderNextStep = 'signup' | 'payment' | null;

export type HeaderData = {
    isSignedIn: boolean;
    nextStep: HeaderNextStep;
    isCommittee: boolean;
    isAdmin: boolean;
    avatar: string | null;
};

interface ExtendedSession extends Session {
    user: {
        id?: string;
        email?: string;
        name?: string;
        firstName?: string;
        lastName?: string;
        isCommittee?: boolean;
        isAdmin?: boolean;
        image?: string;
    };
}

export default async function Header() {
    const session = (await auth()) as ExtendedSession | null;

    const headerData: HeaderData = {
        avatar: session?.user?.image ?? null,
        isAdmin: !!session?.user?.isAdmin,
        isCommittee: !!session?.user?.isCommittee,
        isSignedIn: !!session,
        nextStep: null,
    };

    return (
        <>
            <HeaderClient data={headerData} className="hidden md:block" />
            <HeaderMobileClient data={headerData} className="md:hidden" />
        </>
    );
}
