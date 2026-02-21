import FancyRectangle from '@/components/FancyRectangle';
import Title from '@/components/Title';
import VictoryTicker from '@/components/VictoryTicker';
import { fetchEvents, type Event } from '@/data/events';
import { SPONSOR_TYPES, fetchSponsors } from '@/data/sponsors';
import { payloadURL } from '@/lib/payload';
import Image from 'next/image';
import { Fragment } from 'react';
import UpcomingEventCard from './UpcomingEventCard';

export default async function HomePage() {
    const EVENTS: Event[] = await fetchEvents();
    // Get current date/time in Adelaide (Australia/Adelaide) timezone
    const CURRENT_DATE = new Date(
        new Date().toLocaleString('en-US', { timeZone: 'Australia/Adelaide' })
    );
    const UPCOMING_EVENTS = EVENTS.filter((event) => event.date.timestamp >= CURRENT_DATE);

    const sponsors = await fetchSponsors();
    return (
        <main className="relative pt-24 lg:pt-32">
            {/* Hero Section */}
            <section className="mb-8 flex justify-center text-center font-black">
                <div className="relative z-10 flex flex-col items-center">
                    {/* Grid */}
                    <Image
                        src="/images/square-grid.svg"
                        alt="Square Grid"
                        width={500}
                        height={500}
                        className="absolute -z-10 mt-8 w-[60vw] max-w-[800px] md:w-[70vw] lg:w-[50vw]"
                    />

                    <div className="relative z-10">
                        <h1 className="text-5xl lg:text-7xl 2xl:text-8xl">INTELLIGENCE.</h1>
                        <div className="h-2" />
                        <h1 className="text-5xl lg:text-7xl 2xl:text-8xl">DOMINANCE.</h1>
                        <div className="h-2" />

                        <Title colour="orange" font="font-black">
                            SUPREMACY.
                        </Title>
                        <div className="h-4 md:h-8" />
                    </div>
                </div>
            </section>

            <VictoryTicker />

            {/* CTA Section */}
            <section>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div
                        className={`flex flex-col justify-around ${UPCOMING_EVENTS.length === 0 ? 'lg:col-span-2' : ''}`}
                    >
                        <div>
                            <div className="relative z-10 mt-12 flex flex-col text-2xl font-black lg:mt-12 lg:text-3xl">
                                <h3>The CSBS Excellence</h3>
                                <div className="bg-red mt-2 w-fit px-2">
                                    <h3 className="text-grey">Mission</h3>
                                </div>
                            </div>
                            <div className="relative z-10 mt-4 border-2 border-white bg-grey px-4 py-4 md:px-6 md:py-6">
                                <p className="text-lg md:text-xl">
                                    IGNITE FORUM is the premier multidisciplinary hub of SVPCET
                                    Nagpur's Computer Science & Business Systems department. We
                                    bridge the gap between technical intelligence and real-world
                                    business systems through immersive industry exposure and
                                    relentless competitive drive.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="relative z-10 mt-4 flex flex-row items-center text-2xl font-black lg:text-3xl">
                                <h3 className="">The 'Double Victory'</h3>
                                <Image
                                    src="/images/yellow-star.svg"
                                    alt="Yellow Star"
                                    className="ml-4 h-10"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div className="relative z-10 mt-4 border-2 border-white bg-grey px-4 py-4 md:px-6 md:py-6">
                                <p className="text-lg text-yellow md:text-xl">
                                    SVPCET History made! We are the ONLY department to hold the
                                    Overall Championship Trophies for both Sports and Cultural wings
                                    at Insight 2026.
                                </p>
                            </div>
                        </div>
                    </div>

                    {UPCOMING_EVENTS.length > 0 && (
                        <div className="relative z-10 mt-12 text-2xl font-black md:flex-row lg:ml-10 lg:mt-12 lg:text-3xl">
                            <div className="flex lg:justify-end">
                                <h3>Upcoming Events</h3>
                            </div>

                            <div className="mt-4 space-y-6">
                                {UPCOMING_EVENTS.slice(0, 3).map((event, i) => (
                                    <UpcomingEventCard key={i} event={event} index={i} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <hr className="mb-10 mt-16 h-0.5 bg-white"></hr>

            {/* Club info cards */}
            <section>
                {/* <Grid /> */}
                <Image
                    src="/images/square-grid.svg"
                    alt="Square Grid"
                    width={500}
                    height={500}
                    className="absolute -z-10 mt-12 w-0 max-w-[800px] lg:ml-36 lg:w-[50vw]"
                />

                <div className="mr-2 grid auto-rows-fr grid-cols-1 gap-8 text-xl lg:grid-cols-3">
                    <FancyRectangle colour="white" offset="8" filled fullWidth fullHeight>
                        <div className="flex h-full flex-col">
                            <div className="bg-red w-full border-4 border-black px-4 py-4 md:px-6 md:py-6">
                                <h3 className="text-2xl font-black text-grey lg:text-3xl">
                                    Innovation
                                </h3>
                            </div>
                            <div className="-mt-2 h-full w-fit border-4 border-black bg-white px-4 py-4 md:px-6 md:py-6">
                                <div className="relative text-lg text-black md:text-xl">
                                    <p>
                                        Active industry integration through visits to{' '}
                                        <span className="relative inline-block">
                                            Lokmat Press & Dinshaw’s
                                            <span className="bg-red absolute left-0 top-0 h-full w-full opacity-30"></span>
                                        </span>{' '}
                                        plus expert sessions on AI, Data Science, and global higher
                                        studies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FancyRectangle>
                    <FancyRectangle colour="white" offset="8" filled fullWidth fullHeight>
                        <div className="flex h-full flex-col">
                            <div className="w-full border-4 border-black bg-orange px-4 py-4 md:px-6 md:py-6">
                                <h3 className="text-2xl font-black text-grey lg:text-3xl">
                                    Incubation
                                </h3>
                            </div>
                            <div className="-mt-2 h-full w-fit border-4 border-black bg-white px-4 py-4 md:px-6 md:py-6">
                                <div className="relative text-lg text-black md:text-xl">
                                    <p>
                                        The{' '}
                                        <span className="relative inline-block">
                                            'Mind to Market'
                                            <span className="absolute left-0 top-0 h-full w-full bg-orange opacity-30"></span>
                                        </span>{' '}
                                        initiative powers our startup culture, converting raw
                                        ideation into market-ready MVPs and sustainable business
                                        systems.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FancyRectangle>
                    <FancyRectangle colour="white" offset="8" filled fullWidth fullHeight>
                        <div className="flex h-full flex-col">
                            <div className="w-full border-4 border-black bg-yellow px-4 py-4 md:px-6 md:py-6">
                                <h3 className="text-2xl font-black text-grey lg:text-3xl">
                                    Dominance
                                </h3>
                            </div>
                            <div className="-mt-2 h-full w-fit border-4 border-black bg-white px-4 py-4 md:px-6 md:py-6">
                                <div className="relative text-lg text-black md:text-xl">
                                    <p>
                                        From{' '}
                                        <span className="relative inline-block">
                                            'Stroke of Art'
                                            <span className="absolute left-0 top-0 h-full w-full bg-yellow opacity-30"></span>
                                        </span>{' '}
                                        victories to undefeated streaks in Football and Volleyball,
                                        we define athletic and creative supremacy on campus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FancyRectangle>
                </div>
            </section>
            {/* **** */}

            {/* Sponsors Section */}
            <section>
                <div className="relative z-10 mt-12 flex flex-row items-center text-2xl font-black md:text-4xl lg:mt-20 lg:text-5xl">
                    <Image
                        src="/images/yellow-triangle.svg"
                        alt="Yellow Triangle"
                        className="mb-12 mr-4"
                        width={30}
                        height={30}
                    />

                    <div>
                        <h3>Supported By </h3>
                        <div className="flex flex-col smr:flex-row">
                            <h3 className="mb-2 mr-2 md:mb-0">Industry&apos;s </h3>
                            <FancyRectangle colour="orange" offset="6" filled={false}>
                                <div className="w-fit bg-orange px-2">
                                    <h2>Greatest</h2>
                                </div>
                            </FancyRectangle>
                        </div>
                    </div>
                </div>
                <div className="relative z-10 mt-16 space-y-4">
                    {SPONSOR_TYPES.map((type) => {
                        // Filter sponsors for the given tier
                        const filteredSponsors = sponsors.filter(
                            (sponsor) => sponsor.type.toLowerCase() === type.toLowerCase()
                        );
                        if (filteredSponsors.length === 0) return null;
                        return (
                            <Fragment key={type}>
                                <h3 className="text-center text-2xl font-black capitalize smr:text-left lg:text-3xl">
                                    {type} Sponsors
                                </h3>
                                {/* // 0–300px -> flex; 301–479px -> grid 2-cols; 480px+ -> flex */}
                                <div className="flex flex-wrap justify-center gap-6 pb-2 xs:grid xs:grid-cols-2 smr:flex smr:flex-wrap smr:justify-start">
                                    {filteredSponsors.map(({ image, website, name }, i) => (
                                        <a
                                            href={website}
                                            key={i}
                                            className="block"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FancyRectangle colour="white" offset="10">
                                                <Image
                                                    src={payloadURL + `${image}`}
                                                    alt={`${name} Logo`}
                                                    width={250}
                                                    height={250}
                                                    className="h-[150px] w-[150px] bg-white object-contain p-2 md:h-[250px] md:w-[250px]"
                                                />
                                            </FancyRectangle>
                                        </a>
                                    ))}
                                </div>
                            </Fragment>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
