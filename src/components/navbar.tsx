import Links from '@/nav.json';
import Link from 'next/link';

type NavBarProps = {
    className: string
}

export function NavBar({className = ''}) {
    return (<div className={`flex gap-8 text-white font-bold ${className}`}>
        {
            Links.map(({href, text}, index) =>
                (<Link className="transition-colors" key={index} href={href}>{text}</Link>)
            )
        }
    </div>);
}