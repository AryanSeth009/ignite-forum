import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Teams',
};

export default function TeamsPage() {
    return (
        <main className="flex flex-col items-center gap-8 md:gap-16">
            <div className="flex justify-center">
                <h1 className="text-4xl font-black">Teams</h1>
            </div>
            <section className="w-full max-w-[62rem] border-4 border-black bg-white px-8 py-8 text-black md:px-12 md:py-12">
                This page will showcase your teams (core committee, event team, design team,
                technical team, volunteers, etc.).
            </section>
        </main>
    );
}
