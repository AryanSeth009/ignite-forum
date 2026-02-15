import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Activities',
};

export default function ActivitiesPage() {
    return (
        <main className="flex flex-col items-center gap-8 md:gap-16">
            <div className="flex justify-center">
                <h1 className="text-4xl font-black">Activities</h1>
            </div>
            <section className="w-full max-w-[62rem] border-4 border-black bg-white px-8 py-8 text-black md:px-12 md:py-12">
                This page will showcase department activities (workshops, talks, community sessions,
                hackathons, etc.).
            </section>
        </main>
    );
}
