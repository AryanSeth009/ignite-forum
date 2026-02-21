'use client';

import gsap from 'gsap';
import { CldImage } from 'next-cloudinary';
import Image from 'next/image';
import { useState, useRef, useLayoutEffect } from 'react';

interface President {
    name: string;
    role: string;
    image: string;
}

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

const President: President = {
    name: 'Joe Francis',
    role: 'President',
    image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573392/Joe_Francis_u8hyf0.png',
};
//Data of Members Ignite Club
const TEAMS_DATA: TeamData[] = [
    {
        id: 'media',
        name: 'Media',
        description: 'Capturing moments and spreading the word.',
        slug: 'media',
        head: {
            name: 'Anushka Moon',
            role: 'Media Head',
            image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573391/Anushka_Moon_jcxyue.png',
        },
        members: [
            {
                name: 'Rudra Dalal',
                role: 'Media Co-Head',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573392/Rudra_Dalal_qjse1u.png',
            },
            {
                name: 'Animesh Tajne',
                role: 'Media Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573390/Animesh_Tajne_zrolp8.png',
            },
            {
                name: 'Om Tikle',
                role: 'Media Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573391/Om_Tikle_bmecm1.png',
            },
        ],
    },
    {
        id: 'documentation',
        name: 'Documentation',
        description: 'Creating comprehensive guides and records.',
        slug: 'documentation',
        head: {
            name: 'Vedanti Adhe',
            role: 'Head of Documentation',
            image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573387/Vedanti_Adhe_uh53ex.png',
        },
        members: [
            {
                name: 'Himangi Pardhi',
                role: 'Documentation Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573387/Himangi_Pardhi_ngjkjt.png',
            },
            {
                name: 'Neha Burele',
                role: 'Documentation Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573387/Nehe_Burele_pgznox.png',
            },
        ],
    },
    {
        id: 'hospitality',
        name: 'Hospitality',
        description: 'Ensuring a welcoming experience for everyone.',
        slug: 'hospitality',
        head: {
            name: 'Samruddhi Barbakar',
            role: 'Head of Hospitality',
            image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573390/Samruddhi_Barbatkar_yydki1.png',
        },
        members: [
            {
                name: 'Sakshi Bende',
                role: 'Hospitality Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573389/Sakshi_Bende_ufzyuk.png',
            },
            {
                name: 'Anushka Chinchulkar',
                role: 'Hospitality Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573388/Anushka_Chinchulkar_b1swpt.png',
            },
            {
                name: 'Kankshi Patle',
                role: 'Hospitality Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573389/Kankshi_Patle_t36iea.png',
            },
            {
                name: 'Ojas Bramhane',
                role: 'Hospitality Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573389/Ojas_Bramhane_sry9lf.png',
            },
        ],
    },
    {
        id: 'technical',
        name: 'Technical',
        description: 'Driving innovation and technical excellence.',
        slug: 'technical',
        head: {
            name: 'Aryan Seth',
            role: 'Technical Head',
            image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573392/Aryan_Seth_uogg3f.png',
        },
        members: [
            {
                name: 'Rugved Kadu',
                role: 'Technical Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573394/Rugved_Kadu_eanahl.png',
            },
            {
                name: 'Rachit Guha',
                role: 'Technical Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573393/Rachit_Guha_wj4i19.png',
            },
            {
                name: 'Sudeep Kuralkar',
                role: 'Technical Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771584683/Sudeep_Kuralkar_jokpnq.png',
            },
        ],
    },
    {
        id: 'finance',
        name: 'Finance',
        description: 'Managing budgets and financial planning.',
        slug: 'finance',
        head: {
            name: 'Anushka Mahulkar',
            role: 'Head Of Finance',
            image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573387/Anushka_Mahulkar_e5xiyl.png',
        },
        members: [
            {
                name: 'Shreyasi Jumbe',
                role: 'Finance Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573388/Shreyasi_Jubme_ek7h43.png',
            },
            {
                name: 'Swejal Gujwar',
                role: 'Finance Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573388/Swejal_Gujwar_i17xwu.png',
            },
            {
                name: 'Armata Alani',
                role: 'Finance Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573388/Amrata_Ailani_tnfc2o.png',
            },
        ],
    },
    {
        id: 'discipline',
        name: 'Discipline',
        description: 'Maintaining order and high standards.',
        slug: 'discipline',
        head: {
            name: 'Chaitanya Pawar',
            role: 'Head of Discipline',
            image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573387/chaitanya_Pawar_mu0rd8.png',
        },
        members: [
            {
                name: 'Devanshu Barai',
                role: 'Discipline Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573386/Devanshu_Barai_hdyfn4.png',
            },
            {
                name: 'Dhanesh Wahane',
                role: 'Discipline Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573387/Dhanesh_Wahane_ibisin.png',
            },
            {
                name: 'Subodh Bobhate',
                role: 'Discipline Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573387/Subodh_Bobhate_fu0di4.png',
            },
            {
                name: 'Rohit Chokatkar',
                role: 'Discipline Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573386/Rohit_Chokatkar_drryym.png',
            },
            {
                name: 'Bhawarth Talkhande',
                role: 'Discipline Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573386/Bhawarth_Talkhande_zteoj8.png',
            },
        ],
    },
];

const SmoothImage = (props: any) => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <Image
            {...props}
            className={`${props.className || ''} transition-all duration-500 ease-out ${
                isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
            }`}
            onLoad={(e) => {
                setIsLoaded(true);
                if (props.onLoad) props.onLoad(e);
            }}
            onError={(e) => {
                setIsLoaded(true);
                if (props.onError) props.onError(e);
            }}
        />
    );
};

export default function TeamsPage() {
    const [selectedTeam, setSelectedTeam] = useState<TeamData | null>(null);
    const [originRect, setOriginRect] = useState<DOMRect | null>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        if (selectedTeam && originRect && modalRef.current && overlayRef.current) {
            const ctx = gsap.context(() => {
                const finalRect = modalRef.current!.getBoundingClientRect();

                // Calculate center points
                const originCenterX = originRect.left + originRect.width / 2;
                const originCenterY = originRect.top + originRect.height / 2;

                const finalCenterX = finalRect.left + finalRect.width / 2;
                const finalCenterY = finalRect.top + finalRect.height / 2;

                const deltaX = originCenterX - finalCenterX;
                const deltaY = originCenterY - finalCenterY;

                // Animate Overlay
                gsap.fromTo(
                    overlayRef.current,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.4, ease: 'power2.out' }
                );

                // Animate Modal Content (Uniform Scale Concept)
                // Start small (scale: 0) at the card's center position.
                gsap.fromTo(
                    modalRef.current,
                    {
                        x: deltaX,
                        y: deltaY,
                        scale: 0.1, // Start very small
                        opacity: 0,
                    },
                    {
                        x: 0,
                        y: 0,
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        ease: 'back.out(1.2)', // Bouncy pop effect
                        // ease: "power3.out", // Smooth alternative if bounce is too much
                        transformOrigin: 'center center',
                        clearProps: 'all',
                    }
                );
            });
            return () => ctx.revert();
        }
    }, [selectedTeam, originRect]);

    // Close modal handle
    const closeModal = () => {
        if (modalRef.current && overlayRef.current) {
            gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, ease: 'power2.inOut' });
            gsap.to(modalRef.current, {
                opacity: 0,
                scale: 0.9,
                duration: 0.3,
                ease: 'power2.inOut',
                onComplete: () => setSelectedTeam(null),
            });
        } else {
            setSelectedTeam(null);
        }
    };

    return (
        <main className="text-white-100 min-h-screen px-4 py-16 font-sans md:px-8">
            {/* Header */}
            <div className="mb-12 text-center">
                <h1 className="text-white-900 mb-4 text-5xl font-extrabold tracking-tight drop-shadow-sm">
                    Our Teams
                </h1>
                <p className="text-white-600 mx-auto max-w-2xl text-lg font-bold">
                    Meet the dedicated individuals driving our success across all departments.
                </p>
            </div>

            {/* President Card */}
            <div className="mb-16 flex justify-center">
                <div className="group relative flex w-full max-w-md flex-col items-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl md:flex-row md:p-6">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50 opacity-50"></div>

                    {/* Image */}
                    <div className="relative z-10 mb-4 h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-md md:mb-0 md:mr-6 md:h-28 md:w-28">
                        <SmoothImage
                            src={President.image}
                            alt={President.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-900">{President.name}</h2>
                        <div className="mx-auto mb-2 h-1 w-12 rounded-full bg-indigo-500 md:mx-0"></div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                            {President.role}
                        </p>
                    </div>
                </div>
            </div>

            {/* Grid Layout */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {TEAMS_DATA.map((team) => (
                    <div
                        key={team.id}
                        onClick={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            setOriginRect(rect);
                            setSelectedTeam(team);
                        }}
                        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                    >
                        {/* Placeholder Icon/Image Area */}
                        <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-100">
                            {/* Abstract decorative element */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat opacity-10"></div>

                            {/* Team Initial or Icon Placeholder */}
                            {team.name.charAt(0).toUpperCase() === 'M' ? (
                                <Image
                                    src="https://res.cloudinary.com/dodrojsly/image/upload/v1771590658/media_fliz0a.png"
                                    alt="Media Team"
                                    width={600}
                                    height={600}
                                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                            ) : team.name.charAt(0).toUpperCase() === 'D' ? (
                                team.id === 'documentation' ? (
                                    <Image
                                        src="https://res.cloudinary.com/dodrojsly/image/upload/v1771595535/Documentation_henqhx.png"
                                        alt="Documentation Team"
                                        width={600}
                                        height={600}
                                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                ) : (
                                    <Image
                                        src="https://res.cloudinary.com/dodrojsly/image/upload/v1771595585/discipline_r3aw1u.png"
                                        alt="Discipline Team"
                                        width={600}
                                        height={600}
                                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                )
                            ) : team.name.charAt(0).toUpperCase() === 'H' ? (
                                <Image
                                    src="https://res.cloudinary.com/dodrojsly/image/upload/v1771595500/Hospitality_q9pegt.png"
                                    alt="Hospitality Team"
                                    width={600}
                                    height={600}
                                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                            ) : team.name.charAt(0).toUpperCase() === 'T' ? (
                                <Image
                                    src="https://res.cloudinary.com/dodrojsly/image/upload/v1771595479/Technical_wbd25v.png"
                                    alt="Technical Team"
                                    width={600}
                                    height={600}
                                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                            ) : team.name.charAt(0).toUpperCase() === 'F' ? (
                                <Image
                                    src="https://res.cloudinary.com/dodrojsly/image/upload/v1771595563/finance_qd7a8y.png"
                                    alt="Finance Team"
                                    width={600}
                                    height={600}
                                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                            ) : (
                                <span className="select-none text-6xl font-black text-indigo-300 drop-shadow-sm transition-transform duration-300 group-hover:scale-110">
                                    {team.name.charAt(0)}
                                </span>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="mb-2 text-3xl font-bold text-gray-800 transition-colors group-hover:text-indigo-600">
                                {team.name}
                            </h3>
                            <p className="mb-4 line-clamp-2 text-sm font-bold text-gray-600">
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
                    ref={overlayRef}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
                    onClick={(e) => {
                        // Close if clicked on backdrop
                        if (e.target === e.currentTarget) closeModal();
                    }}
                >
                    <div
                        ref={modalRef}
                        className="relative flex max-h-[90vh] w-full max-w-4xl transform flex-col overflow-y-auto rounded-3xl bg-white shadow-2xl md:flex-row"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            /* className="absolute right-4 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-300" */
                            className="absolute right-4 top-3 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:scale-105 hover:bg-gray-300 active:scale-95"
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
                                <SmoothImage
                                    src={selectedTeam.head.image}
                                    alt={selectedTeam.head.name}
                                    fill
                                    className="object-cover"
                                    onError={(e: any) => {
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
                                <span className="mr-5 rounded-full bg-indigo-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-800">
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
                                            <SmoothImage
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
