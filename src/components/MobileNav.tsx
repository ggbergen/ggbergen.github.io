import { AnchorHTMLAttributes, forwardRef, useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

import {
  FaBars,
  FaDiscord,
  FaFacebook,
  FaTwitch,
  FaYoutube,
} from 'react-icons/fa6';

import navPaths from '@/nav.json';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type NavLinkProps = (typeof navPaths)[0];

const NavLink = forwardRef<
  HTMLAnchorElement,
  NavLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>
>(({ href, text, ...props }, ref) => {
  const router = useRouter();

  return (
    <Link
      ref={ref}
      href={href}
      className={cn(
        'my-1 pl-4 text-xl font-semibold transition-colors hover:text-white/90',
        router.asPath == href ? 'text-white' : 'text-white/80',
      )}
      {...props}
    >
      {text}
    </Link>
  );
});

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size={'lg'}
            className="z-10 mr-2 px-0 text-base text-white hover:bg-transparent hover:text-white focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <FaBars className="!h-8 !w-8" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex flex-col border-red-600 bg-red-600 pr-0"
        >
          <span>
            <img src="/logo-text.png" className="h-20 p-4"></img>
          </span>
          {navPaths.map((navPath) => {
            return (
              <NavLink
                key={navPath.href}
                onClick={() => setOpen(false)}
                {...navPath}
              ></NavLink>
            );
          })}
          <div className="flex-grow"></div>
          <div className="-ml-6 flex items-center justify-evenly gap-2 text-4xl text-white">
            <a
              href="http://discord.ggbergen.org"
              className="relative transition hover:text-indigo-500"
              target="_blank"
            >
              <FaDiscord className="top-0 text-white opacity-0 blur-sm hover:opacity-100" />
              <FaDiscord className="pointer-events-none absolute top-0" />
            </a>
            <a
              href="https://www.facebook.com/ggbergen"
              className="relative transition hover:text-blue-600"
              target="_blank"
            >
              <FaFacebook className="top-0 text-white opacity-0 blur-sm hover:opacity-100" />
              <FaFacebook className="pointer-events-none absolute top-0" />
            </a>
            <a
              href="https://www.twitch.tv/ggbergentv"
              className="relative transition hover:text-purple-600"
              target="_blank"
            >
              <FaTwitch className="top-0 text-yellow-200 opacity-0 blur-sm hover:opacity-100" />
              <FaTwitch className="pointer-events-none absolute top-0" />
            </a>
            <a
              href="http://discord.ggbergen.org"
              className="group relative transition hover:text-red-600"
              target="_blank"
            >
              <FaYoutube className="absolute z-0 text-3xl text-white opacity-0 blur-sm group-hover:opacity-100"></FaYoutube>
              <div className="absolute left-1/3 top-1/3 h-2 w-2 bg-white opacity-0 group-hover:opacity-100" />
              <FaYoutube className="pointer-events-none relative top-0 z-10" />
            </a>
          </div>
        </SheetContent>
      </Sheet>
      <span className="absolute left-0 mx-auto w-full text-center font-bold sm:inline-block md:hidden">
        {navPaths.find((navPath) => navPath.href == router.asPath)?.text}
      </span>
    </>
  );
}
