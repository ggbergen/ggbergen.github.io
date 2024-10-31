import { AnchorHTMLAttributes, forwardRef, useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

import { FaBars } from 'react-icons/fa6';

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
        </SheetContent>
      </Sheet>
      <span className="absolute left-0 mx-auto w-full text-center font-bold sm:inline-block md:hidden">
        {navPaths.find((navPath) => navPath.href == router.asPath)?.text}
      </span>
    </>
  );
}
