import {
    /* FaDiscord, */
    FaEnvelope,
    /*  FaFacebook,
 FaGithub, */
    FaInstagram,
    FaLinkedin,
} from /* FaTiktok,
FaYoutube, */ 'react-icons/fa';

export const LINKS = [
    { name: 'Email', link: 'mailto:ignite.csbs@gmail.com', icon: FaEnvelope },
    /* { name: 'GitHub', link: 'https://github.com/compsci-adl', icon: FaGithub }, */
    { name: 'Instagram', link: 'https://www.instagram.com/ignite_svpcet/', icon: FaInstagram },
    /*{  name: 'Facebook', link: 'https://www.facebook.com/compsci.adl/', icon: FaFacebook }, */
    /* { name: 'Discord', link: 'https://discord.gg/UjvVxHA', icon: FaDiscord }, */
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/company/ignite-forum-–-csbs-department-svpcet/',
        icon: FaLinkedin,
    },
    /* { name: 'YouTube', link: 'https://www.youtube.com/@csclub-adl', icon: FaYoutube }, */
] as const;
