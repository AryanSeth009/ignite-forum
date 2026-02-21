import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Notification from '@/components/Notification';
import Preloader from '@/components/Preloader';
import '@/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { Archivo } from 'next/font/google';

export const metadata: Metadata = {
    icons: {
        icon: [
            { url: '/images/logos/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/images/logos/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/images/logos/favicon.ico' },
        ],
        apple: [{ url: '/images/logos/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
        other: [
            {
                rel: 'android-chrome',
                url: '/images/logos/android-chrome-192x192.png',
                sizes: '192x192',
            },
            {
                rel: 'android-chrome',
                url: '/images/logos/android-chrome-512x512.png',
                sizes: '512x512',
            },
        ],
    },
    title: {
        template: '%s | Ignite Forum',
        default: 'Ignite Forum',
    },
    description:
        'This Website is showing the upcoming recent and all featuring activities in the Ignite Forum. ',
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
                <Preloader />
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
