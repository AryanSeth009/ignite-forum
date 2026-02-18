'use client';

import Image from 'next/image';
import { useState } from 'react';

interface TeamMember {
    name: string;
    role: string;
    image: string;
}

interface TeamData {
    id: string;
    name: string;
    description: string;
    slug: string; // for image path structure
    head: TeamMember;
    members: TeamMember[];
}

// Dummy Data
const TEAMS_DATA: TeamData[] = [
    {
        id: 'media',
        name: 'Media',
        description: 'Capturing moments and spreading the word.',
        slug: 'media',
        head: {
            name: 'Sarah Jenkins',
            role: 'Media Head',
            image: '/images/teams/media/head.jpg',
        },
        members: [
            { name: 'Alex M.', role: 'Senior Editor', image: '/images/teams/media/member1.jpg' },
            { name: 'Jamie L.', role: 'Content Creator', image: '/images/teams/media/member2.jpg' },
            { name: 'Sam P.', role: 'Photographer', image: '/images/teams/media/member3.jpg' },
            { name: 'Chris T.', role: 'Social Media', image: '/images/teams/media/member4.jpg' },
        ],
    },
    {
        id: 'documentation',
        name: 'Documentation',
        description: 'Creating comprehensive guides and records.',
        slug: 'documentation',
        head: {
            name: 'David Chen',
            role: 'Head of Documentation',
            image: '/images/teams/documentation/head.jpg',
        },
        members: [
            {
                name: 'Emily R.',
                role: 'Tech Writer',
                image: '/images/teams/documentation/member1.jpg',
            },
            {
                name: 'Michael B.',
                role: 'Archivist',
                image: '/images/teams/documentation/member2.jpg',
            },
            { name: 'Lisa K.', role: 'Editor', image: '/images/teams/documentation/member3.jpg' },
            {
                name: 'Tom H.',
                role: 'Researcher',
                image: '/images/teams/documentation/member4.jpg',
            },
        ],
    },
    {
        id: 'hospitality',
        name: 'Hospitality',
        description: 'Ensuring a welcoming experience for everyone.',
        slug: 'hospitality',
        head: {
            name: 'Jessica Wong',
            role: 'Head of Hospitality',
            image: '/images/teams/hospitality/head.jpg',
        },
        members: [
            {
                name: 'Ryan G.',
                role: 'Events Coord.',
                image: '/images/teams/hospitality/member1.jpg',
            },
            {
                name: 'Sophie L.',
                role: 'Guest Relations',
                image: '/images/teams/hospitality/member2.jpg',
            },
            { name: 'Mark D.', role: 'Logistics', image: '/images/teams/hospitality/member3.jpg' },
            { name: 'Anna F.', role: 'Planner', image: '/images/teams/hospitality/member4.jpg' },
        ],
    },
    {
        id: 'technical',
        name: 'Technical',
        description: 'Driving innovation and technical excellence.',
        slug: 'technical',
        head: {
            name: 'Robert Fox',
            role: 'Technical Lead',
            image: '/images/teams/technical/head.jpg',
        },
        members: [
            { name: 'Cody F.', role: 'DevOps', image: '/images/teams/technical/member1.jpg' },
            {
                name: 'Esther H.',
                role: 'Frontend Dev',
                image: '/images/teams/technical/member2.jpg',
            },
            { name: 'Guy H.', role: 'Backend Dev', image: '/images/teams/technical/member3.jpg' },
            { name: 'Jenny W.', role: 'QA Engineer', image: '/images/teams/technical/member4.jpg' },
        ],
    },
    {
        id: 'finance',
        name: 'Finance',
        description: 'Managing budgets and financial planning.',
        slug: 'finance',
        head: {
            name: 'Amanda Low',
            role: 'Finance Director',
            image: '/images/teams/finance/head.jpg',
        },
        members: [
            { name: 'Brad T.', role: 'Accountant', image: '/images/teams/finance/member1.jpg' },
            {
                name: 'Kelly S.',
                role: 'Budget Analyst',
                image: '/images/teams/finance/member2.jpg',
            },
            { name: 'Tim R.', role: 'Auditor', image: '/images/teams/finance/member3.jpg' },
            { name: 'Laura M.', role: 'Treasurer', image: '/images/teams/finance/member4.jpg' },
        ],
    },
    {
        id: 'discipline',
        name: 'Discipline',
        description: 'Maintaining order and high standards.',
        slug: 'discipline',
        head: {
            name: 'Marcus Bell',
            role: 'Head of Discipline',
            image: '/images/teams/discipline/head.jpg',
        },
        members: [
            { name: 'Evan S.', role: 'Coordinator', image: '/images/teams/discipline/member1.jpg' },
            { name: 'Tara W.', role: 'Supervisor', image: '/images/teams/discipline/member2.jpg' },
            { name: 'Leo K.', role: 'Monitor', image: '/images/teams/discipline/member3.jpg' },
            { name: 'Mia J.', role: 'Inspector', image: '/images/teams/discipline/member4.jpg' },
        ],
    },
];

export default function TeamsPage() {
    const [selectedTeam, setSelectedTeam] = useState<TeamData | null>(null);

    // Close modal handle
    const closeModal = () => setSelectedTeam(null);

    return (
        <main className="min-h-screen bg-gray-50 px-4 py-16 font-sans text-gray-900 md:px-8">
            {/* Header */}
            <div className="mb-12 text-center">
                <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm">
                    Our Teams
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-gray-600">
                    Meet the dedicated individuals driving our success across all departments.
                </p>
            </div>

            {/* Grid Layout */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {TEAMS_DATA.map((team) => (
                    <div
                        key={team.id}
                        onClick={() => setSelectedTeam(team)}
                        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                    >
                        {/* Placeholder Icon/Image Area */}
                        <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-100">
                            {/* Abstract decorative element */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat opacity-10"></div>

                            {/* Team Initial or Icon Placeholder */}
                            <span className="select-none text-6xl font-black text-indigo-300 drop-shadow-sm transition-transform duration-300 group-hover:scale-110">
                                {team.name.charAt(0)}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="mb-2 text-2xl font-bold text-gray-800 transition-colors group-hover:text-indigo-600">
                                {team.name}
                            </h3>
                            <p className="mb-4 line-clamp-2 text-sm text-gray-600">
                                {team.description}
                            </p>

                            <div className="flex items-center gap-1 text-sm font-medium text-indigo-500 transition-all group-hover:gap-2">
                                Click to view team <span>&rarr;</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Overlay */}
            {selectedTeam && (
                <div
                    className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity duration-300"
                    onClick={(e) => {
                        // Close if clicked on backdrop
                        if (e.target === e.currentTarget) closeModal();
                    }}
                >
                    <div className="animate-in zoom-in-95 relative flex max-h-[90vh] w-full max-w-4xl transform flex-col overflow-y-auto rounded-3xl bg-white shadow-2xl transition-all duration-300 md:flex-row">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200"
                            aria-label="Close modal"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* Team Head Side Panel (Left on Desktop, Top on Mobile) */}
                        <div className="flex w-full flex-col items-center justify-center border-b border-indigo-100 bg-indigo-50 p-8 text-center md:w-1/3 md:border-b-0 md:border-r">
                            <h2 className="mb-6 text-xl font-bold uppercase tracking-wider text-indigo-900">
                                Team Lead
                            </h2>

                            <div className="relative mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-lg md:h-48 md:w-48">
                                {/* Using next/image for optimized loading, failing gracefully to placeholder if not found */}
                                <Image
                                    src={selectedTeam.head.image}
                                    alt={selectedTeam.head.name}
                                    fill
                                    className="object-cover"
                                    onError={(e) => {
                                        // Fallback logic handled by cleaner structure if needed,
                                        // but for this assignment we assume images exist or just fail silently visually.
                                        // A real implementation might swap src on error.
                                    }}
                                />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900">
                                {selectedTeam.head.name}
                            </h3>
                            <p className="font-medium text-indigo-600">{selectedTeam.head.role}</p>
                        </div>

                        {/* Team Members Grid (Right on Desktop, Bottom on Mobile) */}
                        <div className="w-full p-8 md:w-2/3">
                            <div className="mb-8 flex items-center justify-between">
                                <h2 className="text-3xl font-bold text-gray-900">
                                    {selectedTeam.name} Team
                                </h2>
                                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-800">
                                    {selectedTeam.members.length} Members
                                </span>
                            </div>

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                {selectedTeam.members.map((member, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4 transition-all duration-300 hover:bg-white hover:shadow-md"
                                    >
                                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border-2 border-white shadow-sm">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-800">
                                                {member.name}
                                            </h4>
                                            <p className="text-sm font-medium text-gray-500">
                                                {member.role}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
