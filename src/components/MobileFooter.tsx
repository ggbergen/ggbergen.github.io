import {
  FaTwitch,
  FaDiscord,
  FaFacebook,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa6';
import HiddenElement from './HiddenLink';
import { cn } from '@/lib/utils';

import socials from '@/socials.json';

export default function MobileFooter({ className = '' }) {
  return (
    <footer className={cn('mt-8 bg-red-600 p-8 text-white', className)}>
      <div className="container flex flex-col items-center justify-evenly gap-2 p-0">
        <div className="flex w-full justify-evenly gap-2 text-5xl">
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
            <FaTwitch className="top-0 text-yellow-200 opacity-0 blur-sm hover:opacity-100" />
            <FaTwitch className="pointer-events-none absolute top-0" />
          </a>
          <a
            href={socials.youtube}
            className="group relative transition hover:text-red-600"
            target="_blank"
          >
            <FaYoutube className="absolute z-0 text-5xl text-white opacity-0 blur-sm group-hover:opacity-100"></FaYoutube>
            <div className="absolute left-1/3 top-1/3 h-4 w-4 bg-white opacity-0 group-hover:opacity-100" />
            <FaYoutube className="pointer-events-none relative top-0 z-10" />
          </a>
        </div>
        <h1 className="text-center text-2xl font-bold">Kontakt oss</h1>
        <div className="flex w-full justify-between">
          <p className="mr-4 flex-1 text-right">
            <HiddenElement text="Vis telefon">
              <a
                href="tel:+4712345678"
                className="h-4 cursor-pointer font-normal text-white underline hover:underline md:no-underline"
              >
                Tlf: <span className="font-semibold">123 45 678</span>
              </a>
            </HiddenElement>
          </p>
          <p className="ml-4 flex-1 text-left">
            <HiddenElement text="Vis epost">
              <a
                href="mailto:styret@ggbergen.org"
                className="h-4 cursor-pointer text-white underline hover:underline md:no-underline"
              >
                <span className="font-semibold">styret@ggbergen.org</span>
              </a>
            </HiddenElement>
          </p>
        </div>
        <p>GG Bergen 915 014 879</p>
        <img className="h-24 pt-2" src="/logo.png"></img>
      </div>
    </footer>
  );
}
