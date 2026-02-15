import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Settings',
    robots: { index: false, follow: false },
};

export default async function SettingsPage() {
    return (
        <main className="flex flex-col items-center gap-8 md:gap-16">
            <div className="flex justify-center">
                <h1 className="text-4xl font-black">Settings</h1>
            </div>
            <section className="w-full max-w-[62rem] border-4 border-black bg-white px-8 py-8 text-black md:px-12 md:py-12">
                Settings are disabled for this department website build.
            </section>
        </main>
    );
}
