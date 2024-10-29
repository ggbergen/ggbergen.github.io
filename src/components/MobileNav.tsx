import { AnchorHTMLAttributes, forwardRef, useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

import { GiHamburgerMenu } from 'react-icons/gi';

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
        'font-semibold transition-colors hover:text-foreground/80',
        router.asPath == href ? 'text-foreground' : 'text-foreground/60',
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
            className="z-10 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <GiHamburgerMenu className="!h-8 !w-8" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col pr-0">
          <span>
            <img src="/logo.png" className="h-24"></img>
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
