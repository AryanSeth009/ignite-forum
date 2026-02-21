import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Notification from '@/components/Notification';
import '@/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { Archivo } from 'next/font/google';

export const metadata: Metadata = {
    icons: '/favicon.ico',
    title: {
        template: '%s | CSBS Club',
        default: 'CSBS Club',
    },
    description:
        'This Website is showing the upcoming recent and all featuring activities in the IGNITE CLUB CSBS. ',
};

// TODO: Add canonical URLs
// TODO: Sitemap
// TODO: Meta tags

export const viewport: Viewport = {
    themeColor: '#252020',
};

const archivo = Archivo({
    variable: '--font-archivo',
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" className={archivo.className}>
            <body id="root" className="overflow-x-hidden bg-grey text-white">
                <Notification />
                <Header />
                <div className="mx-auto min-h-screen w-responsive pb-6 pt-32 md:pt-40">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
