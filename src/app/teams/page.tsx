'use client';

import gsap from 'gsap';
import { CldImage } from 'next-cloudinary';
import Image from 'next/image';
import { useState, useRef, useLayoutEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';

interface President {
    name: string;
    role: string;
    image: string;
    linkedin?: string; // Users can paste LinkedIn URLs here, e.g., 'https://linkedin.com/in/username'
}

interface TeamMember {
    name: string;
    role: string;
    image: string;
    linkedin?: string; // Users can paste LinkedIn URLs here, e.g., 'https://linkedin.com/in/username'
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
    linkedin: 'https://www.linkedin.com/in/joe-francis-joison-298304397/',
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
            linkedin: 'https://www.linkedin.com/in/anushkamoon2106/',
        },
        members: [
            {
                name: 'Rudra Dalal',
                role: 'Media Co-Head',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573392/Rudra_Dalal_qjse1u.png',
                linkedin: 'https://www.linkedin.com/in/rudra-dalal-902661301/',
            },
            {
                name: 'Animesh Tajne',
                role: 'Media Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573390/Animesh_Tajne_zrolp8.png',
                linkedin: 'https://www.linkedin.com/in/animesh-tajne/',
            },
            {
                name: 'Om Tikle',
                role: 'Media Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573391/Om_Tikle_bmecm1.png',
                linkedin: 'https://www.linkedin.com/in/om-tikle-125b4a329/',
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
            linkedin: 'https://www.linkedin.com/in/vedanti-adhe-98134a329/',
        },
        members: [
            {
                name: 'Himangi Pardhi',
                role: 'Documentation Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573387/Himangi_Pardhi_ngjkjt.png',
                linkedin: 'https://www.linkedin.com/in/himangi-pardhi-802007330/',
            },
            {
                name: 'Neha Burele',
                role: 'Documentation Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573387/Nehe_Burele_pgznox.png',
                linkedin: 'https://www.linkedin.com/in/neha-burele-4893092a6/',
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
            linkedin: 'https://www.linkedin.com/in/samruddhi-barbatkar-91370a314/',
        },
        members: [
            {
                name: 'Sakshi Bende',
                role: 'Hospitality Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573389/Sakshi_Bende_ufzyuk.png',
                linkedin: 'https://www.linkedin.com/in/sakshi-bende/',
            },
            {
                name: 'Anushka Chinchulkar',
                role: 'Hospitality Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573388/Anushka_Chinchulkar_b1swpt.png',
                linkedin: '',
            },
            {
                name: 'Kankshi Patle',
                role: 'Hospitality Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573389/Kankshi_Patle_t36iea.png',
                linkedin: 'https://www.linkedin.com/in/kankshi-patle-a03a99316/',
            },
            {
                name: 'Ojas Bramhane',
                role: 'Hospitality Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573389/Ojas_Bramhane_sry9lf.png',
                linkedin: 'https://www.linkedin.com/in/ojas-bramhane-691b18259/',
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
            linkedin: 'https://www.linkedin.com/in/aryan-seth-/',
        },
        members: [
            {
                name: 'Rugved Kadu',
                role: 'Technical Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573394/Rugved_Kadu_eanahl.png',
                linkedin: 'https://www.linkedin.com/in/kadurugved/',
            },
            {
                name: 'Rachit Guha',
                role: 'Technical Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573393/Rachit_Guha_wj4i19.png',
                linkedin: 'https://www.linkedin.com/in/rachitguha/',
            },
            {
                name: 'Sudeep Kuralkar',
                role: 'Technical Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771584683/Sudeep_Kuralkar_jokpnq.png',
                linkedin: 'https://www.linkedin.com/in/sudeep-kuralkar-20906525b/',
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
            linkedin: 'https://www.linkedin.com/in/anushkamahulkar/',
        },
        members: [
            {
                name: 'Shreyasi Jumbde',
                role: 'Finance Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573388/Shreyasi_Jubme_ek7h43.png',
                linkedin: 'https://www.linkedin.com/in/shreyasi-jumde-077b13317/',
            },
            {
                name: 'Swejal Gujwar',
                role: 'Finance Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573388/Swejal_Gujwar_i17xwu.png',
                linkedin: 'https://www.linkedin.com/in/swejal-gujwar-96a58b336/',
            },
            {
                name: 'Armata Alani',
                role: 'Finance Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573388/Amrata_Ailani_tnfc2o.png',
                linkedin: 'https://www.linkedin.com/in/amrata-ailani-21a131307/',
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
            linkedin: 'https://www.linkedin.com/in/chaitanyapawar02/',
        },
        members: [
            {
                name: 'Devanshu Barai',
                role: 'Discipline Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573386/Devanshu_Barai_hdyfn4.png',
                linkedin: 'https://www.linkedin.com/in/devanshu-barai-28a243342/',
            },
            {
                name: 'Dhanesh Wahane',
                role: 'Discipline Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573387/Dhanesh_Wahane_ibisin.png',
                linkedin: 'https://www.linkedin.com/in/dhanesh-wahane-40047b330/',
            },
            {
                name: 'Subodh Bobhate',
                role: 'Discipline Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573387/Subodh_Bobhate_fu0di4.png',
                linkedin: 'https://www.linkedin.com/in/subodh-bobhate-262a76310/',
            },
            {
                name: 'Rohit Chokatkar',
                role: 'Discipline Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573386/Rohit_Chokatkar_drryym.png',
                linkedin: 'https://www.linkedin.com/in/rohit-chokatkar-a0352832a/',
            },
            {
                name: 'Bhawarth Talkhande',
                role: 'Discipline Team',
                image: 'https://res.cloudinary.com/dodrojsly/image/upload/v1771573386/Bhawarth_Talkhande_zteoj8.png',
                linkedin: 'https://www.linkedin.com/in/bhawarth-talkhande-768560352/',
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
        <main className="relative min-h-screen overflow-hidden pb-32 font-sans text-gray-100">
            {/* Technical Grid Pattern Background exactly matching events page */}
            <div
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                    backgroundImage:
                        'linear-gradient(white 1px, transparent 1px), linear-gradient(to right, white 1px, transparent 1px)',
                    backgroundSize: '100px 100px',
                }}
            ></div>

            <div className="relative z-10 mx-auto mt-16 flex max-w-7xl flex-col items-center px-4 sm:px-8 md:mt-24">
                {/* Header */}
                <div className="relative mb-6 inline-block text-center">
                    <div className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 border-2 border-[#111] bg-[#000000]"></div>
                    <div className="relative z-10 border-2 border-black border-b-[#8b5cf6] border-r-[#8b5cf6] bg-[#8b5cf6] px-8 py-3">
                        <h1 className="text-4xl font-black uppercase tracking-wide text-black md:text-5xl">
                            Our Teams
                        </h1>
                    </div>
                </div>
                <p className="mb-16 max-w-2xl text-center text-base font-medium leading-relaxed text-white md:text-lg">
                    Meet the dedicated individuals driving our success across all departments.
                </p>

                {/* President Card */}
                <div className="group relative mx-auto mb-20 w-full max-w-md">
                    <div className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 rounded-xl border-[2px] border-white transition-all duration-300 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:border-[#eab308]"></div>
                    <div className="relative z-10 flex items-center justify-between rounded-xl border-[2px] border-white bg-[#22201f] p-6 transition-colors group-hover:bg-[#2a2827]">
                        <div className="flex items-center">
                            <div className="relative mr-6 h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-gray-400 bg-black transition-colors duration-300 group-hover:border-[#eab308]">
                                <SmoothImage
                                    src={President.image}
                                    alt={President.name}
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div>
                                <h2 className="mb-2 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#eab308] md:text-3xl">
                                    {President.name}
                                </h2>
                                <span className="inline-block border border-black bg-[#eab308] px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-black">
                                    {President.role}
                                </span>
                            </div>
                        </div>
                        {President.linkedin && (
                            <a
                                href={President.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-4 right-4 text-gray-400 transition-colors hover:text-[#eab308]"
                                title="View LinkedIn"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <FaLinkedin size={24} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                    {TEAMS_DATA.map((team) => (
                        <div
                            key={team.id}
                            onClick={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                setOriginRect(rect);
                                setSelectedTeam(team);
                            }}
                            className="group relative flex h-full w-full cursor-pointer flex-col outline-none"
                        >
                            <div className="pointer-events-none absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-2xl border-[2px] border-white transition-all duration-300 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:border-[#eab308]"></div>

                            <div className="relative z-10 flex h-full flex-col overflow-hidden rounded-2xl border-[2px] border-white bg-[#22201f]">
                                {/* Image Area */}
                                <div className="relative flex h-48 w-full items-center justify-center overflow-hidden border-b-[2px] border-white bg-[#f8f9fa] p-4 sm:h-56">
                                    {/* Team Image Logic */}
                                    {team.name.charAt(0).toUpperCase() === 'M' ? (
                                        <Image
                                            src="https://res.cloudinary.com/dodrojsly/image/upload/v1771590658/media_fliz0a.png"
                                            alt="Media Team"
                                            fill
                                            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : team.name.charAt(0).toUpperCase() === 'D' ? (
                                        team.id === 'documentation' ? (
                                            <Image
                                                src="https://res.cloudinary.com/dodrojsly/image/upload/v1771595535/Documentation_henqhx.png"
                                                alt="Documentation Team"
                                                fill
                                                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                                            />
                                        ) : (
                                            <Image
                                                src="https://res.cloudinary.com/dodrojsly/image/upload/v1771595585/discipline_r3aw1u.png"
                                                alt="Discipline Team"
                                                fill
                                                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                                            />
                                        )
                                    ) : team.name.charAt(0).toUpperCase() === 'H' ? (
                                        <Image
                                            src="https://res.cloudinary.com/dodrojsly/image/upload/v1771595500/Hospitality_q9pegt.png"
                                            alt="Hospitality Team"
                                            fill
                                            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : team.name.charAt(0).toUpperCase() === 'T' ? (
                                        <Image
                                            src="https://res.cloudinary.com/dodrojsly/image/upload/v1771595479/Technical_wbd25v.png"
                                            alt="Technical Team"
                                            fill
                                            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : team.name.charAt(0).toUpperCase() === 'F' ? (
                                        <Image
                                            src="https://res.cloudinary.com/dodrojsly/image/upload/v1771595563/finance_qd7a8y.png"
                                            alt="Finance Team"
                                            fill
                                            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <span className="text-6xl font-black text-gray-700">
                                            {team.name.charAt(0)}
                                        </span>
                                    )}
                                </div>

                                {/* Content Area */}
                                <div className="flex flex-grow flex-col bg-[#252020] p-6 md:p-8">
                                    <div className="mb-4 flex items-center">
                                        <h3 className="text-3xl font-bold tracking-wide text-white">
                                            {team.name}
                                        </h3>
                                    </div>
                                    <p className="mb-8 line-clamp-2 text-sm font-medium leading-relaxed text-gray-300 md:text-base">
                                        {team.description}
                                    </p>
                                    <div className="mt-auto flex items-center text-sm font-bold uppercase tracking-wide text-[#8b5cf6] transition-colors group-hover:text-[#eab308]">
                                        Click to view team{' '}
                                        <span className="ml-2 transform font-bold transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay updated to match brutalist styling */}
            {selectedTeam && (
                <div
                    ref={overlayRef}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) closeModal();
                    }}
                >
                    {/* Modal Offset Wrapper */}
                    <div ref={modalRef} className="relative h-auto max-h-[90vh] w-full max-w-5xl">
                        {/* Offset background shadow border */}
                        <div className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 rounded-xl border-2 border-white"></div>

                        {/* Modal Container */}
                        <div className="relative z-10 flex h-full max-h-[90vh] w-full flex-col overflow-hidden rounded-xl border-2 border-white bg-[#252020] shadow-2xl md:flex-row">
                            {/* Close Button Component */}
                            <button
                                onClick={closeModal}
                                className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded border-2 border-white bg-black text-white transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#fff] active:translate-x-0 active:translate-y-0 active:shadow-none"
                                aria-label="Close modal"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>

                            {/* Left Panel: Team Lead */}
                            <div className="flex w-full flex-col items-start overflow-y-auto border-b-2 border-white bg-[#111] p-8 md:w-[35%] md:border-b-0 md:border-r-2 md:p-10">
                                <div className="mb-8 border border-black bg-[#eab308] px-4 py-1.5">
                                    <h2 className="text-lg font-extrabold uppercase tracking-wider text-black">
                                        Team Lead
                                    </h2>
                                </div>

                                <div className="group/lead relative flex w-full flex-col items-start outline-none">
                                    <div className="relative mb-6 aspect-square w-full max-w-[200px] shrink-0 overflow-hidden rounded-xl border-2 border-white bg-gray-900 transition-colors duration-300 group-hover/lead:border-[#eab308]">
                                        <SmoothImage
                                            src={selectedTeam.head.image}
                                            alt={selectedTeam.head.name}
                                            fill
                                            className="object-cover object-top transition-transform duration-500 group-hover/lead:scale-105"
                                        />
                                    </div>
                                    <h3 className="mb-2 text-3xl font-bold text-white transition-colors duration-300 group-hover/lead:text-[#eab308] md:text-4xl">
                                        {selectedTeam.head.name}
                                    </h3>
                                    <div className="flex w-full items-center justify-between pr-4">
                                        <p className="text-lg font-extrabold uppercase tracking-wider text-[#8b5cf6]">
                                            {selectedTeam.head.role}
                                        </p>
                                        {selectedTeam.head.linkedin && (
                                            <a
                                                href={selectedTeam.head.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-1 text-gray-400 transition-colors hover:text-[#eab308]"
                                                title="View LinkedIn"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <FaLinkedin size={24} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Right Panel: Team Members */}
                            <div className="flex w-full flex-col overflow-y-auto bg-[#1a1918] p-8 md:w-[65%] md:p-10">
                                <div className="mb-8 flex flex-col border-b-2 border-gray-500 pb-8">
                                    <h2 className="mb-4 text-4xl font-black uppercase tracking-wider text-white md:text-5xl">
                                        {selectedTeam.name}{' '}
                                        <span className="block text-[#ea580c] sm:inline">Team</span>
                                    </h2>
                                    <div className="flex inline-flex items-center self-start border-2 border-white bg-[#222] px-4 py-1">
                                        <span className="mr-2 text-lg font-bold text-[#8b5cf6]">
                                            ▶
                                        </span>
                                        <span className="text-base font-bold uppercase tracking-widest text-white">
                                            {selectedTeam.members.length} Members
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-6 pb-6 sm:grid-cols-2">
                                    {selectedTeam.members.map((member, idx) => (
                                        <div
                                            key={idx}
                                            className="group/member relative block outline-none"
                                        >
                                            {/* Small offset box for member card */}
                                            <div className="pointer-events-none absolute inset-0 translate-x-1.5 translate-y-1.5 rounded border border-gray-600 transition-all group-hover/member:translate-x-2 group-hover/member:translate-y-2 group-hover/member:border-[#eab308]"></div>

                                            <div className="relative z-10 flex items-center justify-between rounded border-2 border-white bg-[#111] p-4 transition-colors group-hover/member:bg-[#1a1a1a]">
                                                <div className="flex items-center gap-4">
                                                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-gray-500 bg-black transition-colors group-hover/member:border-[#eab308]">
                                                        <SmoothImage
                                                            src={member.image}
                                                            alt={member.name}
                                                            fill
                                                            className="object-cover object-top"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <h4 className="mb-1 text-lg font-bold leading-tight text-white transition-colors group-hover/member:text-[#eab308]">
                                                            {member.name}
                                                        </h4>
                                                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                                                            {member.role}
                                                        </p>
                                                    </div>
                                                </div>
                                                {member.linkedin && (
                                                    <a
                                                        href={member.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="ml-2 mt-auto text-gray-400 transition-colors hover:text-[#eab308]"
                                                        title="View LinkedIn"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <FaLinkedin size={20} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
