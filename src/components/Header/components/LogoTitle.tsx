import Image from 'next/image';
import Link from 'next/link';

export default function LogoTitle({
    titleColor,
    className,
    onClick,
}: {
    titleColor: 'text-grey' | 'text-white';
    className?: string;
    onClick?: () => void;
}) {
    return (
        <Link href="/" className={`${className} flex flex-row items-center`} onClick={onClick}>
            <Image
                src="/images/logos/logo.png"
                alt="Ignite Forum Logo"
                className="h-auto w-[4rem] object-contain md:w-[8rem] lg:w-[10rem]"
                width={400}
                height={400}
            />
            <h1 className={`${titleColor} ml-2 text-xl font-bold md:text-base lg:text-lg`}>
                IGNITE FORUM
            </h1>
        </Link>
    );
}
