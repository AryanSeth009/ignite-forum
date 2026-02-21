import FancyRectangle from '@/components/FancyRectangle';
import Paragraph from '@/components/Paragraph';
import Title from '@/components/Title';
import { fetchCommitteeMember } from '@/data/committee-members';
import { LINKS } from '@/data/links';
import type { Metadata } from 'next';
import Image from 'next/image';
import FAQ from './FAQ';

export const metadata: Metadata = {
    title: 'About',
};

export default async function AboutPage() {
    const committeeMembers = await fetchCommitteeMember();

    return (
        <main className="relative">
            <div className="h-full">
                <div className="mb-8 flex justify-center">
                    <Title colour="orange">About Us</Title>
                </div>
                {/* Basic Description */}
                <section className="flex flex-col gap-10 md:flex-row">
                    {/* Grid */}
                    <Image
                        src="/images/square-grid.svg"
                        alt="Square Grid"
                        width={500}
                        height={500}
                        className="absolute -z-10 ml-8 mt-8 w-0 max-w-[800px] md:w-[70vw] lg:w-[50vw]"
                    />
                    <div className="mr-2 flex">
                        <FancyRectangle colour={'purple'} offset={'8'} filled rounded>
                            <Image
                                src={'/images/about/meet-and-greet.jpg'}
                                alt={'Meet and Greet'}
                                width={1210}
                                height={800}
                                className="rounded-xl border-2 border-white"
                            ></Image>
                        </FancyRectangle>
                    </div>
                    <div className="mb-10 mt-8 flex flex-col lg:justify-center">
                        <div className="relative flex justify-end">
                            <Image
                                src="/images/white-star.svg"
                                alt="White Star"
                                className="absolute right-0 -translate-x-14 -translate-y-4"
                                width={30}
                                height={30}
                            />
                            <Image
                                src="/images/white-star.svg"
                                alt="White Star"
                                className="absolute right-0 -translate-y-8"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="flex h-fit flex-row self-center border-b-2 border-t-2 border-white bg-grey px-4">
                            <Image
                                src="/images/yellow-triangle.svg"
                                alt="Yellow Triangle"
                                className="mb-12 mr-4"
                                width={30}
                                height={30}
                            />
                            <p className="my-4 text-lg md:text-xl">
                                <span className="font-bold text-orange">
                                    IGNITE FORUM: Where Technology Meets Business
                                </span>
                                <br />
                                <br />
                                The Ignite Forum is the premier student body of the Department of
                                Computer Science and Business Systems (CSBS) at St. Vincent Pallotti
                                College of Engineering and Technology, Nagpur.
                                <br />
                                <br />
                                Founded to foster a spirit of innovation and professional
                                excellence, Ignite serves as a launchpad for students to transition
                                from academic learners to industry leaders. We pride ourselves on a
                                culture that balances rigorous technical development with unmatched
                                creative and athletic dominance.
                            </p>
                        </div>
                    </div>
                </section>
                {/* Member Perks */}
                <section className="flex flex-col gap-10 md:flex-row">
                    <div className="mr-2 md:w-[54vw]">
                        <div className="mb-4 flex flex-row flex-wrap text-2xl font-black md:mt-6 lg:mt-12 lg:text-3xl">
                            <h3 className="mb-2 mr-2 md:mb-0">Members will have </h3>
                            <div className="flex items-center">
                                <div className="mb-2 w-fit bg-yellow px-2 md:mb-0">
                                    <h3 className="text-grey">access</h3>
                                </div>
                                <h3 className="mb-2 ml-2 md:mb-0">to</h3>
                            </div>
                        </div>
                        <FancyRectangle colour={'purple'} offset={'8'} filled rounded>
                            <Paragraph>
                                <ul className="ml-6 list-disc space-y-2">
                                    <li>
                                        <span className="font-bold text-yellow">
                                            The Champion’s Edge:
                                        </span>{' '}
                                        Be part of the only department to secure a &quot;Double
                                        Victory&quot;—winning Overall Championship Trophies in both
                                        Sports and Culture at Insight 2026.
                                    </li>
                                    <li>
                                        <span className="font-bold text-purple">
                                            Industry 5.0 Focus:
                                        </span>{' '}
                                        Participate in specialized workshops like &quot;Mind to
                                        Market&quot; and expert sessions on AI, Data Science, and
                                        AWS Cloud Automation.
                                    </li>
                                    <li>
                                        <span className="font-bold text-orange">
                                            Real-World Exposure:
                                        </span>{' '}
                                        Beyond the classroom, we conduct mandatory Industrial Visits
                                        (e.g., Lokmat Press, Dinshaw’s Dairy) to study automated
                                        production and ERP systems in action.
                                    </li>
                                    <li>
                                        <span className="font-bold text-yellow">
                                            Hackathon Culture:
                                        </span>{' '}
                                        Join our elite coding teams who have secured National Wins
                                        (Techelons 2026) and top ranks at Abhyudaya (IIIT Nagpur)
                                        and HackNagpur 2.0.
                                    </li>
                                    <li>
                                        <span className="font-bold text-purple">
                                            Global Pathways:
                                        </span>{' '}
                                        Access seminars on International Higher Studies and career
                                        roadmaps with industry veterans from TCS, Wipro, and
                                        Persistent Systems.
                                    </li>
                                    <li>
                                        <span className="font-bold text-orange">
                                            Holistic Growth:
                                        </span>{' '}
                                        From volunteering for the Vidyarthi Vigyan Manthan (VVM) to
                                        youth empowerment through Jeevan Vidya, we build responsible
                                        citizens.
                                    </li>
                                </ul>
                            </Paragraph>
                        </FancyRectangle>
                    </div>
                    <div>
                        <Image src="/images/crosses.svg" alt="Crosses" height={80} width={237} />
                        <Image
                            src={'/images/about/duck-ctf.jpg'}
                            alt={'Duck CTF'}
                            width={500}
                            height={500}
                            className="rounded-xl border-2 border-white"
                        ></Image>
                    </div>
                </section>
                {/* Competitions & Projects */}
                <section className="mt-10 flex flex-col gap-10 md:flex-row">
                    <div className="flex h-fit flex-row self-center border-b-2 border-t-2 border-white bg-grey px-4">
                        <Image
                            src="/images/yellow-triangle.svg"
                            alt="Yellow Triangle"
                            className="mb-12 mr-4"
                            width={30}
                            height={30}
                        />
                        <p className="my-4 text-lg lg:text-xl">
                            Our elite coding teams have secured National Wins, including the{' '}
                            <span className="font-bold text-yellow">
                                1st Prize (₹20,000) at TECHELONS 2026
                            </span>{' '}
                            for &apos;SkyCoPilot&apos; (Applied AI for Industry 5.0). We also hold
                            top ranks at Abhyudaya (IIIT Nagpur) and HackNagpur 2.0, coordinating
                            team projects that translate technical prowess into real-world impact.
                        </p>
                    </div>
                    <div className="mr-2 flex justify-center lg:justify-end">
                        <FancyRectangle colour={'purple'} offset={'8'} filled rounded>
                            <Image
                                src={'/images/about/quiz-night.jpg'}
                                alt={'Quiz Night'}
                                width={1317}
                                height={750}
                                className="rounded-xl border-2 border-white"
                            ></Image>
                        </FancyRectangle>
                    </div>
                </section>
                {/* Welcome to join */}
                <section className="mt-10 grid flex-col gap-6 md:grid-cols-3">
                    <Image
                        src={'/images/about/cocktail-night.jpg'}
                        alt={'Cocktail Night'}
                        width={500}
                        height={500}
                        className="rounded-xl border-2 border-white"
                    ></Image>
                    <Image
                        src={'/images/about/duck-ctf-2.jpg'}
                        alt={'Duck CTF 2'}
                        width={500}
                        height={500}
                        className="rounded-xl border-2 border-white"
                    ></Image>
                    <Image
                        src={'/images/about/ai-panel.jpg'}
                        alt={'AI Panel'}
                        width={500}
                        height={500}
                        className="rounded-xl border-2 border-white"
                    ></Image>
                </section>
                <section className="relative mt-8">
                    <Image
                        src="/images/white-star-outline.svg"
                        alt="White Star Outline"
                        className="absolute z-10 -translate-x-4 -translate-y-4"
                        width={50}
                        height={50}
                    />
                    <div className="relative rounded-xl border-2 border-white bg-grey px-4 py-4 md:px-6 md:py-6">
                        <p className="text-lg md:text-xl">
                            Under the guidance of our HOD{' '}
                            <span className="font-bold text-orange">Dr. Praveen Sen</span> and the
                            current leadership of President{' '}
                            <span className="font-bold text-orange">Mr. Joe Francis</span>, Ignite
                            Forum continues to set new benchmarks for departmental excellence.
                            Active memberships are open to all innovators within the CSBS
                            department.
                        </p>
                    </div>
                    <Image
                        src="/images/white-star-outline.svg"
                        alt="White Star Outline"
                        className="absolute right-0 z-10 -translate-y-8 translate-x-4"
                        width={50}
                        height={50}
                    />
                </section>
                {/* Committee Members */}
                <section id="committee" className="mt-8">
                    {/* Grid */}
                    <Image
                        src="/images/rectangle-grid.svg"
                        alt="Rectangle Grid"
                        width={750}
                        height={750}
                        className="absolute -z-10 ml-20 mt-8 w-0 max-w-[1200px] lg:w-[80vw]"
                    />
                    <div className="flex w-fit bg-orange px-2 lg:mb-0">
                        <h2 className="text-5xl font-bold">Committee Members</h2>
                    </div>
                    <div className="mb-2 mr-2 mt-8 grid auto-rows-fr grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                        {committeeMembers.map((member, index) => (
                            <FancyRectangle
                                key={index}
                                colour={member.exec ? 'yellow' : 'white'}
                                offset={'8'}
                                filled
                                rounded
                                fullWidth
                                fullHeight
                            >
                                <div
                                    className={`h-full w-full rounded-xl border-2 ${member.exec ? 'border-yellow' : 'border-white'} flex flex-col justify-center bg-grey p-4`}
                                >
                                    <h3 className="text-2xl font-bold">{member.name}</h3>
                                    <p>{member.position}</p>
                                </div>
                            </FancyRectangle>
                        ))}
                    </div>
                    <div className="relative mb-2 mt-8 flex flex-row justify-end space-x-4 *:h-12 md:*:h-16">
                        {/* Ducks removed */}
                    </div>
                </section>
                <section className="mt-8 md:mt-0">
                    <FancyRectangle colour="purple" offset="8" filled={false}>
                        <div className="w-fit bg-purple px-2 py-2">
                            <h2 className="text-4xl font-bold text-grey md:text-5xl">FAQ</h2>
                        </div>
                    </FancyRectangle>
                    <div className="mt-8" />
                    <div className="flex flex-col gap-x-16 gap-y-8 lg:flex-row">
                        {/* FAQ */}
                        <div className="mb-8 mr-2 flex flex-col justify-items-center gap-12 lg:w-full">
                            {/* Grid */}
                            <Image
                                src="/images/rectangle-grid.svg"
                                alt="Rectangle Grid"
                                width={750}
                                height={750}
                                className="absolute -z-10 ml-20 mt-8 max-h-[600px] w-0 max-w-[1200px] lg:w-[70vw]"
                            />

                            <FAQ
                                question={'Where is the forum located?'}
                                answer={
                                    <p>
                                        We are based in the CSBS Departmental wing at SVPCET,
                                        Nagpur.
                                    </p>
                                }
                                colour={'orange'}
                            ></FAQ>
                            <FAQ
                                question={'What are the perks of being a member?'}
                                answer={
                                    <p>
                                        Access to expert guest lectures, hands-on hackathon
                                        mentorship, industrial field trips, and a chance to
                                        represent the &quot;Double Champion&quot; department in
                                        inter-college fests.
                                    </p>
                                }
                                colour={'yellow'}
                            ></FAQ>
                            <FAQ
                                question={'How do I join?'}
                                answer={
                                    <p>
                                        Membership is open to all students of the CSBS department
                                        who are ready to innovate and lead. Visit our{' '}
                                        <a href="/join" className="underline">
                                            join page
                                        </a>{' '}
                                        to get started.
                                    </p>
                                }
                                colour={'purple'}
                            ></FAQ>
                        </div>
                        <div className="flex flex-col gap-8">
                            <Image
                                src={'/images/about/o-week.jpg'}
                                alt={'O Week'}
                                width={1055.5}
                                height={500}
                                className="rounded-xl border-2 border-white"
                            ></Image>
                            <Image
                                src={'/images/about/women-in-cs.jpg'}
                                alt={'Women in CS'}
                                width={1342}
                                height={500}
                                className="rounded-xl border-2 border-white"
                            ></Image>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
