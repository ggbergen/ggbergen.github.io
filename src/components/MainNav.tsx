import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import navPaths from '@/nav.json';
import socials from '@/socials.json';
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTwitch,
  FaYoutube,
} from 'react-icons/fa6';

type NavLinkProps = (typeof navPaths)[0];

function highlightPath(path: string, href: string) {
  if (path == href) {
    return true;
  }
  if (href.length > 2 && path.startsWith(href)) {
    return true;
  }

  return false;
}

function NavLink({ href, text }: NavLinkProps) {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={cn(
        'transition-colors hover:text-foreground/90',
        highlightPath(router.asPath, href) ? 'text-foreground' : 'text-foreground/80',
      )}
    >
      {text}
    </Link>
  );
}

export function MainNav() {
  return (
    <>
      <nav className="mr-4 hidden w-full md:flex">
        <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
          <span className="relative hidden font-bold md:inline-block">
            <img src="/logo-text.png" className="h-8"></img>
          </span>
        </Link>
        <div className="text-md flex items-center gap-4 font-semibold lg:gap-6">
          {navPaths.map((navPath) => {
            return <NavLink key={navPath.text} {...navPath}></NavLink>;
          })}
        </div>
        <div className="flex-grow"></div>
        <div className="flex justify-evenly gap-5 text-3xl">
          <a
            href={socials.discord}
            className="relative transition hover:text-indigo-500"
            target="_blank"
          >
            <FaDiscord className="top-0 text-white opacity-0 blur-sm hover:opacity-100" />
            <FaDiscord className="pointer-events-none absolute top-0" />
          </a>
          <a
            href={socials.instagram}
            className="relative transition hover:text-violet-500"
            target="_blank"
          >
            <FaInstagram className="top-0 text-white opacity-0 blur-sm hover:opacity-100" />
            <FaInstagram className="pointer-events-none absolute top-0" />
          </a>
          <a
            href={socials.facebook}
            className="relative transition hover:text-blue-600"
            target="_blank"
          >
            <FaFacebook className="top-0 text-white opacity-0 blur-sm hover:opacity-100" />
            <FaFacebook className="pointer-events-none absolute top-0" />
          </a>
          <a
            href={socials.twitch}
            className="relative transition hover:text-purple-600"
            target="_blank"
          >
            <FaTwitch className="top-0 text-white opacity-0 blur-sm hover:opacity-100" />
            <FaTwitch className="pointer-events-none absolute top-0" />
          </a>
          <a
            href={socials.youtube}
            className="group relative transition hover:text-red-600"
            target="_blank"
          >
            <FaYoutube className="absolute z-0 text-3xl text-white opacity-0 blur-sm group-hover:opacity-100"></FaYoutube>
            <div className="absolute left-1/3 top-1/3 h-1/3 w-1/3 bg-white opacity-0 group-hover:opacity-100" />
            <FaYoutube className="pointer-events-none relative top-0 z-10" />
          </a>
        </div>
      </nav>
    </>
  );
}
