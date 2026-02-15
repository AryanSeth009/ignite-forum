export type LinkType = {
    title: string;
    href?: string;
    dropdown?: LinkType[];
};

const LINKS: LinkType[] = [
    { title: 'About', href: '/about' },
    { title: 'Activities', href: '/activities' },
    { title: 'Events', href: '/events' },
    { title: 'Teams', href: '/teams' },
    { title: 'Gallery', href: '/gallery' },
    // {
    //     title: 'More',
    //     dropdown: [
    //         { title: 'FAQs', href: '/faqs' },
    //         { title: 'Photo Gallery', href: '/gallery' },
    //         { title: 'Resources', href: '/resources' },
    //     ],
    // },
    { title: 'Contact', href: '/contact' },
];

export default LINKS;
