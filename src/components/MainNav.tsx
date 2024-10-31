import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import navPaths from '@/nav.json';

type NavLinkProps = (typeof navPaths)[0];

function NavLink({ href, text }: NavLinkProps) {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={cn(
        'transition-colors hover:text-white/90',
        router.asPath == href ? 'text-white' : 'text-white/80',
      )}
    >
      {text}
    </Link>
  );
}

export function MainNav() {
  return (
    <>
      <div className="mr-4 hidden md:flex">
        <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
          <span className="relative hidden font-bold md:inline-block">
            <img src="/logo-text.png" className="h-8"></img>
          </span>
        </Link>
        <nav className="text-md flex items-center gap-4 font-semibold lg:gap-6">
          {navPaths.map((navPath) => {
            return <NavLink key={navPath.href} {...navPath}></NavLink>;
          })}
        </nav>
      </div>
    </>
  );
}
